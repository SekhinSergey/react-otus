import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc mixed case", () => {
    it("[32, /, 32, +, 10, *, 10]", () => {
        expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
            1,
            "+",
            100,
        ]);
    });
});

describe("secondPrioritiesCalc unexpected stack case", () => {
    it("[32, / 32]", () => {
        expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(TypeError("Unexpected stack!"));
    });
});

describe("secondPrioritiesCalc mixed case", () => {
    it("[32, - 32, +, 10]", () => {
        expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
    });
});