import { describe, expect, it, vi, beforeEach, } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/navBar';
import Navoption from '../src/components/navOption';

let mockToggleOptionSpy = vi.fn();

// Mock navOption component globally
vi.mock('../src/components/navOption', () => ({
    default: vi.fn(({ text, link, toggleOption }) => {
        // wrap the original toggleOption prop from Navbar with mockToggleOptionSpy
        // when clicked, it will call onClickHandler which will first call mockToggleOptionSpy 
        // and then call the toggleOption from Navbar
        const onClickHandler = (event) => {
            if (text === 'Home') {
                mockToggleOptionSpy(event);
            }
            toggleOption(event);
        };

        return (
            <li data-testid={`mock-navoption-${text.toLowerCase()}`}>
                <a href={link} onClick={onClickHandler}>{text}</a>
            </li>
        );
    }),
}));

describe('navBar', () => {

    beforeEach(() => {
        vi.clearAllMocks();
        mockToggleOptionSpy.mockClear();
    });

    it('should render "Main St. Shop" text, "Home" and "Shop" nav options', () => {
        render(
            <BrowserRouter>
                <Navbar itemTotal={3} />
            </BrowserRouter>
        );

        expect(Navoption).toHaveBeenCalledWith(
            expect.objectContaining({
                text: 'Home',
                link: '/home'
            }),
            {}
        );

        expect(Navoption).toHaveBeenCalledWith(
            expect.objectContaining({
                text: 'Shop',
                link: '/shop',
            }),
            {}
        );

        expect(screen.getByRole('heading', { name: /Main St. Shop/i })).toBeInTheDocument();
        expect(screen.getByTestId('mock-navoption-home')).toBeInTheDocument();
        expect(screen.getByTestId('mock-navoption-shop')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Shop')).toBeInTheDocument();
    });

    it('should display correct itemTotal in cart', () => {
        render(
            <BrowserRouter>
                <Navbar itemTotal={5} />
            </BrowserRouter>
        );

        expect(screen.getByText('Cart(5)')).toBeInTheDocument();
    });

    it('should call toggleOption when a Navoption is clicked', async () => {
        render(
            <BrowserRouter>
                <Navbar itemTotal={0} />
            </BrowserRouter>
        );

        const homeLink = screen.getByText('Home');

        await act(async () => {
            await userEvent.click(homeLink);
        });

        expect(mockToggleOptionSpy).toHaveBeenCalledOnce();
    });
});
