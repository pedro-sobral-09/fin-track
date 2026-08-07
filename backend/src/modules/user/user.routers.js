import { Router } from "express";
import { authenticate } from "../../shared/middleware/authenticate.js";
import userController from "./user.controller.js";

const router = Router();

router.get("/", authenticate, userController.getUserById);

router.put("/", authenticate, userController.updateUserData);

router.delete("/", authenticate, userController.deleteUserData);

export default router;