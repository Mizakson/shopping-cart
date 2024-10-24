import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event";
import Home from "../components/Home/Home";

describe("Nav component", () => {
    it("renders", () => {
        render(<Home />)
        const nav = document.querySelector("nav")
        const navBar = screen.getByTestId("home")
        expect(navBar).toBeInTheDocument()
        expect(navBar).toContain(nav)
    })
})