import { runner } from "./runner";

describe("Stack is null case", () => {
    it("@", () => {
        expect(() => runner("@")).toThrow(TypeError("Unexpected string"));
    });
});

describe("One number case", () => {
    it("1", () => {
        expect(runner("1")).toEqual(1);
    });
});

describe("All operation case", () => {
    it("20 - 10 * 10 / 5 - 3", () => {
        expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
    });
});