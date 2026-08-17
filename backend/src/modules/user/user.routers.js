import { Router } from "express";

export default function createUserRouter(authMiddleware, userController){
    const router = Router();

    router.use(authMiddleware);
    router.get("/", authenticate, userController.getUserById);
    router.put("/", authenticate, userController.updateUserData);
    router.delete("/", authenticate, userController.deleteUserData);

    return router;
}