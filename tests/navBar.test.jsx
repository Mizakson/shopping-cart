import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/navBar';
import Navoption from '../src/components/navOption';

// mock navOption component
vi.mock('../src/components/navOption', () => ({
    default: vi.fn(({ text, link, toggleOption }) => (
        <li data-testid={`mock-navoption-${text.toLowerCase()}`}>
            <a href={link} onClick={toggleOption}>{text}</a>
        </li>
    )),
}));

describe('navBar', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render title and "Main St. Shop" text', () => {
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

    });
});