import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
