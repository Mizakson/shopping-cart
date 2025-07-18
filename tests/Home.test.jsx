import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../src/components/Home";

describe('Home', () => {
    it('should render Home component and main title', () => {

        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        expect(screen.getByRole('heading', { name: /Main St. Shop/i })).toBeInTheDocument();

    });

    it('should render Shop link in the text "Visit our shop now!"', () => {

        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )


        const shopLink = screen.getByRole('link', { name: /shop/i });
        expect(shopLink).toBeInTheDocument();
        expect(shopLink).toHaveAttribute('href', '/shop');

        const parentParagraph = shopLink.closest('p');

        expect(parentParagraph).toBeInTheDocument();
        expect(parentParagraph).toHaveTextContent(/Visit our shop now!/i);
        expect(parentParagraph).toContainElement(shopLink);

    });

    it('should render the filler text content', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        // paragraph 1
        expect(screen.getByText(/Lorem ipsum odor amet, consectetuer adipiscing elit./i)).toBeInTheDocument();

        // paragraph 2
        expect(screen.getByText(/Duis sociosqu netus enim lobortis tempus ut sociosqu mattis./i)).toBeInTheDocument();

        // paragraph 3
        expect(screen.getByText(/Dolor curae parturient risus facilisis cubilia augue phasellus mus./i)).toBeInTheDocument();
    });
});