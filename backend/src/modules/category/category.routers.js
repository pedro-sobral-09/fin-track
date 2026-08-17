import { Router } from "express";

export default function createCategoryRouter(authMiddleware, categoryController){
    const router = Router();
    router.use(authMiddleware);

    router.get("/", categoryController.getAllCategories);

    router.get("/:id", categoryController.getCategoryById);

    router.post("/", categoryController.createCategory);

    router.put("/:id", categoryController.updateCategory);

    router.delete("/:id", categoryController.deleteCategory);

    return router;
}