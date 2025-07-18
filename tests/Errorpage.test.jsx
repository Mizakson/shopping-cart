import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "../src/components/Errorpage";

describe('ErrorPage', () => {

    it('should render ErrorPage component, header, and link', () => {

        render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>
        )

        expect(screen.getByRole('heading', { name: /ERROR - page does not exist!/i })).toBeInTheDocument();

        // link text is within button, so first find button
        const homeButton = screen.getByRole('button');
        expect(homeButton).toBeInTheDocument();

        const homeLink = within(homeButton).getByRole('link', { name: /Go back Home\.\.\./i });

        expect(homeLink).toBeInTheDocument();
        expect(homeLink.tagName).toBe('A');
        expect(homeLink).toHaveAttribute('href', '/home');
        expect(homeLink).toHaveTextContent('Go back Home...');

    })

});