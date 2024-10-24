import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event";
import Shop from "../components/Shop/Shop";

describe("Shop component", () => {
    it("renders", () => {
        render(<Shop />)

        const shopPage = screen.getByTestId("shop")
        expect(shopPage).toBeInTheDocument()
    })
})