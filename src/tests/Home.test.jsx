import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event";
import Home from "../components/Home/Home";

describe("Nav component", () => {
    it("renders", () => {
        render(<Home />)
        const nav = document.querySelector("nav")
        const homepage = screen.getByTestId("home")
        expect(homepage).toBeInTheDocument()
        expect(homepage).toContain(nav)
    })
})