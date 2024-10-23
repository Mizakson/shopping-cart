import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav";

describe("Nav component", () => {
    it("renders", () => {
        render(<Nav />)
        const navBar = screen.getByTestId("nav-bar")
        expect(navBar).toBeInTheDocument()
    })
})