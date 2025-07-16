import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/react";

expect.extend(matchers);

afterEach(() => {
    cleanup();
})