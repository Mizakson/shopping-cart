import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop";
import Items from "../src/components/Items";

// Mock the Items component
vi.mock('../src/components/Items', () => ({
    default: vi.fn(() => (
        <div data-testid="mock-items-component">
            Mocked Items Content
        </div>
    )),
}));

describe('Shop', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });


    it('should render the Shop component and include the Items component', () => {
        render(<Shop />);

        expect(screen.getByTestId('mock-items-component')).toBeInTheDocument();
        expect(Items).toHaveBeenCalledTimes(1);
    });
});