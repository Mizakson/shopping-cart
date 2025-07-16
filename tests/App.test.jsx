import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";

// mock the Outlet component from react-router-dom
vi.mock('react-router-dom', async (importOriginal) => {

    const actual = await importOriginal();
    return {
        ...actual,
        Outlet: vi.fn(() => (
            <div data-testid="mock-outlet">
                Mock Outlet Content
            </div>
        )),
    };
});

describe('App', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the App component', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        // screen.debug() 
        // use to see render output

        // assert heading and mock outlet are in the document
        expect(screen.getByRole('heading', { name: /Main St. Shop/i })).toBeInTheDocument();
        expect(screen.getByTestId('mock-outlet')).toBeInTheDocument();
    });

    it('should initialize itemTotal to 0 and display "Cart(0)" in the Navbar', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        // assert that there is a <p> tag with "Cart(0)" is in the document
        expect(screen.getByText(/Cart\(0\)/i)).toBeInTheDocument();

    });
});
