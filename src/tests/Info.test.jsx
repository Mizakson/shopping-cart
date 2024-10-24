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

    it("contains children", () => {
        render(<Info />)
        const info = screen.getByTestId("info")

        const header = document.querySelector("header")
        const section = document.querySelector("section")
        const footer = document.querySelector("footer")

        expect(info).toContain(header)
        expect(info).toContain(section)
        expect(info).toContainElement(footer)
    })
})