import { describe, it, expect, vi } from "vitest";
import createAuthMiddleware from "./authenticate.js";
import jwt from "../utils/jwt.js";

const user = { 
    email: "test@gmail.com", 
    id: "85f0b7e1-ec91-4427-9d81-d9da80cb9784",
    deletedAt: null,
}

const payload = {id: user.id, email: user.email};

const token = await jwt.generateToken(payload);

function createFakeRepository(){
    return {
        getUserById: vi.fn().mockResolvedValue(user)
    }
}

describe(`authenticate`, () => {
    it(`calls next() when token and user are valid`, async () => {
        const req = {
            headers: { authorization: `Bearer ${token}`}
        }

        const next = vi.fn();

        const res = {}
        res.status = vi.fn().mockReturnValue(res),
        res.json = vi.fn().mockReturnValue(res)
        
        const fakeRepo = createFakeRepository();
        const authMiddleware = createAuthMiddleware(fakeRepo);

        await authMiddleware(req, res, next);

        expect(next).toHaveBeenCalled(1);
        expect(res.status).not.toHaveBeenCalledWith(401);
        expect({id: req.user.id, email: req.user.email}).toEqual(payload);
    });
});