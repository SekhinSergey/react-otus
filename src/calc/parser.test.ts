import { parser } from "./parser";

describe("Parser invalid case", () => {
    it("1 + + 33 - 2", () => {
        expect(() => parser("1 + + 33 - 2")).toThrow(
            TypeError("Unexpected string")
        );
    });
});

describe("Parser correct case", () => {
    it("1 + 32 - 2 + 2 * 3 / 3", () => {
        expect(parser("1 + 32 - 2 + 2 * 3 / 3")).toEqual([1, "+", 32, "-", 2, "+", 2, "*", 3, "/", 3]);
    });
});