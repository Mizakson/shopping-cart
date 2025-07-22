import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import Items from "../src/components/Items";

const mockFetch = vi.fn();
global.fetch = mockFetch;

vi.mock('../src/components/RenderItem', () => ({
    default: vi.fn(({ id, title, image, price }) => (
        <div data-testid={`mock-render-item-${id}`}>
            <p>{title}</p>
            <img src={image} alt={title} />
            <p>${price}</p>
        </div>
    )),
}));

vi.mock('../src/components/AddToCartBtn', () => ({
    default: vi.fn(() => (
        <button data-testid="mock-add-to-cart-btn">Mock Add to Cart</button>
    )),
}));

import RenderItem from '../src/components/RenderItem';
import AddToCartBtn from '../src/components/AddToCartBtn';


describe('Items', () => {

    const mockItemsData = [
        { id: 1, title: 'Item 1', image: 'image1.jpg', price: 5.00 },
        { id: 2, title: 'Item 2', image: 'image2.jpg', price: 7.50 },
        { id: 3, title: 'Item 3', image: 'image3.jpg', price: 10.00 },
    ];

    beforeEach(() => {
        vi.clearAllMocks();
    });

    mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockItemsData),
    });

    it('should fetch and render items correctly', async () => {
        await act(async () => {
            render(<Items />);
        });

        expect(mockFetch).toHaveBeenCalledOnce();
        expect(mockFetch).toHaveBeenCalledWith("https://fakestoreapi.com/products?limit=6")

        await waitFor(() => {

            expect(RenderItem).toHaveBeenCalledTimes(mockItemsData.length);
            expect(AddToCartBtn).toHaveBeenCalledTimes(mockItemsData.length);

            // iterate over data to check each id rendered
            mockItemsData.forEach(item => {
                expect(screen.getByTestId(`mock-render-item-${item.id}`)).toBeInTheDocument();
                expect(screen.getByText(item.title)).toBeInTheDocument();
                expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
            });

            // expect same number of add to cart buttons as item data length
            expect(screen.getAllByTestId('mock-add-to-cart-btn')).toHaveLength(mockItemsData.length);
        });

        // check if specific data is called
        expect(RenderItem).toHaveBeenCalledWith(
            expect.objectContaining({
                id: mockItemsData[0].id,
                title: mockItemsData[0].title,
                image: mockItemsData[0].image,
                price: mockItemsData[0].price,
            }),
            {}
        );
        expect(RenderItem).toHaveBeenCalledWith(
            expect.objectContaining({
                id: mockItemsData[1].id,
                title: mockItemsData[1].title,
                image: mockItemsData[1].image,
                price: mockItemsData[1].price,
            }),
            {}
        );

    });

    it('should handle fetch errors correctly', async () => {

        mockFetch.mockRejectedValueOnce(new Error('Network Error'));

        await act(async () => {
            render(<Items />);
        });

        await waitFor(() => {
            expect(mockFetch).toHaveBeenCalledOnce();
            expect(RenderItem).not.toHaveBeenCalled();
            expect(AddToCartBtn).not.toHaveBeenCalled();
        });

        expect(screen.queryByText('Mock Add to Cart')).not.toBeInTheDocument();
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

    });

    it('should display a loading indicator', async () => {

        mockFetch.mockReturnValueOnce(new Promise(() => { }));

        await act(async () => {
            render(<Items />);
        });

        expect(screen.getByText(/Loading items\.\.\./i)).toBeInTheDocument();
        expect(screen.queryByTestId('mock-render-item-1')).not.toBeInTheDocument();
        expect(screen.queryByText('Mock Add to Cart')).not.toBeInTheDocument();
    });
});

