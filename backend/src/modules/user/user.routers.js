import { Router } from "express";

export default function createUserRouter(authMiddleware, userController){
    const router = Router();

    router.use(authMiddleware);
    router.get("/", userController.getUserById);
    router.put("/", userController.updateUserData);
    router.delete("/", userController.deleteUserData);

    return router;
}