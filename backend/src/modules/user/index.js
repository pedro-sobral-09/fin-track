import { prisma } from "../../shared/lib/prisma.js";
import createUserRepository from "./user.repository.js";
import createAuthMiddleware from "../../shared/middleware/authenticate.js";
import createUserService from "./user.service.js";
import createUserController from "./user.controller.js";
import createUserRouter from "./user.routers.js";

const userRepository = createUserRepository(prisma);
const authMiddleware = createAuthMiddleware(userRepository);
const userService = createUserService(authMiddleware, userRepository);
const userController = createUserController(userService);
const userRouter = createUserRouter(userController);

export default userRouter;