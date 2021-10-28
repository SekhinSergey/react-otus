import { mul, div, add, minus } from "./mathOperators";

describe("mathOperators test cases", () => {
    it("mul 2 * 2 to equal 4", () => {
        expect(mul(2, 2)).toBe(4);
    });
    it("div 2 / 2 to equal 1", () => {
        expect(div(2, 2)).toBe(1);
    });
    it("add 4 + 2 to equal 6", () => {
        expect(add(4, 2)).toBe(6);
    });
    it("minus 4 - 2 to equal 2", () => {
        expect(minus(4, 2)).toBe(2);
    });
});