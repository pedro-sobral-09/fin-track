import { describe, it, expect, vi } from "vitest";
import { createDefaultCategories } from "./defaultCategories.js";

function createFakeRepository(){
    return {
        createMany: vi.fn().mockResolvedValue({ count: 1 })
    }
}

describe(`createDefautlCategories`, () => {
    it(`creates categories per default entry, scoped to the user`, async () => {
        const fakeRepo = createFakeRepository();
        const user = { id: "user-123" };

        await createDefaultCategories(fakeRepo, user);

        expect(fakeRepo.createMany).toHaveBeenCalledTimes(1);

        const [categoriesPassed] = fakeRepo.createMany.mock.calls[0];
        expect(categoriesPassed.length).toEqual(14);
        expect(categoriesPassed.every(t => t.userId === user.id)).toBe(true);
    });
});