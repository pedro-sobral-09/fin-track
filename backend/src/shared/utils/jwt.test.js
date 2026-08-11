import { describe, expect, it } from "vitest";
import jwt from "./jwt.js";

describe(`jwt`, () => {
    const payload = { id: `88c1cfe8-05da-41b0-bd51-3feb334b1421`, email: `teste@teste.com` };

    it(`check if token is create`, () => {
        const token = jwt.generateToken(payload);
        
        expect(typeof token).toBe(`string`);
        expect(token.split(`.`)).toHaveLength(3);
    });

    it(`check if the validate is valid`, () => {
        const token = jwt.generateToken(payload);
        const payloadReturned = jwt.validateToken(token);

        expect(payloadReturned).toMatchObject({ id: payload.id, email: payload.email });
        expect(payloadReturned.id).toEqual(payload.id);
        expect(payloadReturned.email).toEqual(payload.email);
    });

    it(`should throw when token is invalid`, () => {
        expect(() => jwt.validateToken(`token`)).toThrow();
    });
});