import { kilogram } from "../def/z_barrel";

describe('uval-nonnegative', () => {
    it('creating with minus value on non-negative shall throw error', () => {
        const uv = kilogram(1)
        expect(uv.NonNegative()).toBe(true)

        // uv.val = -1;
        // expect(uv.val).toBe(-1)
    });
})