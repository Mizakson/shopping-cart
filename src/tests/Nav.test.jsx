import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event";
import Nav from "../components/Nav";

describe("Nav component", () => {
    it("renders", () => {
        render(<Nav />)
        screen.debug()
    })
})

describe("bool tests", () => {
    it("true is true", () => {
        expect(true).toBe(true)
    })

    it("false is false", () => {
        expect(false).toBe(false)
    })
})