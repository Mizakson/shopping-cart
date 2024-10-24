import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event";
import Info from "../components/Info/Info"

describe("Nav component", () => {
    it("renders", () => {
        render(<Info />)
        const info = screen.getByTestId("info")
        expect(info).toBeInTheDocument()
    })
})