import { Router } from "express";

export default function createUserRouter(authMiddleware, userController){
    const router = Router();

    router.use(authMiddleware);
    router.get("/me", userController.getUserById);
    router.put("/me", userController.updateUser);
    router.delete("/me", userController.deleteUser);

    return router;
}