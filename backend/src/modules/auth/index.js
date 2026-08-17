import { prisma } from "../../shared/lib/prisma.js";
import createUserRepository from "../user/user.repository.js";
import createAuthService from "./auth.service,js";
import createAuthController from "./auth.controller.js";
import createAuthRouter from "./auth.routers.js";

const userRepository = createUserRepository(prisma);
const authService = createAuthService(userRepository);
const authController = createAuthController(authService);
const authRouter = createAuthRouter(authController);

export default authRouter;