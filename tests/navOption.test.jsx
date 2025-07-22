import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Navoption from '../src/components/navOption';

describe('Navoption', () => {
    it('returns truthy', () => {
        expect(true).toBeTruthy();
    })
})

describe('Navoption', () => {

    // add placeholder mock for property
    let mockToggleOption;

    beforeEach(() => {
        mockToggleOption = vi.fn();
    });

    it('should render the provided text and link tag with correct href', () => {
        // use different text to differentiate from used menu sections
        const testText = 'About Us';
        const testLink = '/about';

        render(
            <BrowserRouter> { }
                <Navoption text={testText} link={testLink} toggleOption={mockToggleOption} />
            </BrowserRouter>
        );

        const linkElement = screen.getByText(testText);
        expect(linkElement).toBeInTheDocument();

        expect(linkElement.tagName).toBe('A');
        expect(linkElement).toHaveAttribute('href', testLink);

        expect(screen.getByRole('listitem')).toHaveAttribute('id', testText);
    });
});
