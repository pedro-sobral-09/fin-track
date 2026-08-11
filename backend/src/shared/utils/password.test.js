import { describe, expect, it } from "vitest";
import password from "./password.js";

describe(`password`, () => {
    it(`should generate a hash different from the plain password`, async () => {
        const plain = `mypassword`;
        const hash = await password.hashPassword(plain);

        expect(typeof hash).toBe(`string`);
        expect(hash).not.toBe(plain);
    });

    it(`should the generate diferent hashes for the same password`, async () => {
        const plain = `mypassword`;
        const hash = await password.hashPassword(plain);
        const hash2 = await password.hashPassword(plain);

        expect(typeof hash).toBe(`string`);
        expect(typeof hash2).toBe(`string`);
        expect(hash).not.toBe(hash2);
    });

    it(`should validate the correct password against its hash`, async () => {
        const plain = `mypassword`;
        const hash = await password.hashPassword(plain);

        const result = await password.compare(plain, hash);
        expect(result).toBe(true);
    });

    it(`should reject an incorrect password`, async () => {
        const plain = `mypassword`;
        const hash = await password.hashPassword(plain);

        const result = await password.compare(`12345678`, hash);
        expect(result).toBe(false);
    });
});