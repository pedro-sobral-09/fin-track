import { Router } from "express";
import { authenticate } from "../../shared/middleware/authenticate.js";
import categoryController from "./category.controller.js";

const router = Router();

router.get("/", authenticate, categoryController.getAllCategories);

router.get("/:id", authenticate, categoryController.getCategoryById);

router.post("/", authenticate, categoryController.createCategory);

router.put("/:id", authenticate, categoryController.updateCategory);

router.delete("/:id", authenticate, categoryController.deleteCategory);

export default router;