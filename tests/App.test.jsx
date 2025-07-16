import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Outlet } from "react-router-dom";
import App from "../src/App";
import Navbar from "../src/components/navBar";

describe('App', () => {

    it('should render the App component', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

    })

})
