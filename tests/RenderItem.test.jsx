import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RenderItem from '../src/components/RenderItem'; // Adjust path if necessary

describe('RenderItem', () => {

    it('should render the title, image, and price', () => {
        const itemProps = {
            id: '1', //
            title: 'Black Shirt',
            image: 'https://testlink.shop/item/black-shirt',
            price: 20.00,
        };

        render(
            <RenderItem
                id={itemProps.id}
                title={itemProps.title}
                image={itemProps.image}
                price={itemProps.price}
            />
        );

        expect(screen.getByText('Black Shirt')).toBeInTheDocument();

        const imageElement = screen.getByAltText('Black Shirt');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', itemProps.image);

        expect(screen.getByText(`$${itemProps.price}`)).toBeInTheDocument();
    });

    it('should render different item details', () => {
        const itemProps = {
            id: '2',
            title: 'Blue Hat',
            image: 'https://testlink.shop/item/blue-hat',
            price: 8.50,
        };

        render(
            <RenderItem
                id={itemProps.id}
                title={itemProps.title}
                image={itemProps.image}
                price={itemProps.price}
            />
        );

        expect(screen.getByText('Blue Hat')).toBeInTheDocument();
        expect(screen.getByAltText('Blue Hat')).toHaveAttribute('src', itemProps.image);
        expect(screen.getByText(`$${itemProps.price}`)).toBeInTheDocument();
    });
});
