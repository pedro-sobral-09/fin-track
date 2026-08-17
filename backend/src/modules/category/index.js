import { prisma } from "../../shared/lib/prisma.js";
import createCategoryRepository from "./category.repository.js";
import createUserRepository from "../user/user.repository.js";
import createCategoryService from "./category.service.js";
import createCategoryController from "./category.controller.js";
import createCategoryRouter from "./category.routers.js";
import createAuthMiddleware from "../../shared/middleware/authenticate.js";

const categoryRepository = createCategoryRepository(prisma);
const userRepository = createUserRepository(prisma);
const authMiddleware = createAuthMiddleware(userRepository);
const categoryService = createCategoryService(userRepository, categoryRepository);
const categoryController = createCategoryController(categoryService);
const categoryRouter = createCategoryRouter(authMiddleware, categoryController);

export default categoryRouter;