// container.js
import { prisma } from "./shared/lib/prisma.js";
import { Router } from "express";

import createUserRepository from "./modules/user/user.repository.js";
import createCategoryRepository from "./modules/category/category.repository.js";
import createAuthMiddleware from "./shared/middleware/authenticate.js";

import createAuthService from "./modules/auth/auth.service.js";
import createUserService from "./modules/user/user.service.js";
import createCategoryService from "./modules/category/category.service.js";

import createAuthController from "./modules/auth/auth.controller.js";
import createUserController from "./modules/user/user.controller.js";
import createCategoryController from "./modules/category/category.controller.js";

import createAuthRouter from "./modules/auth/auth.routers.js";
import createUserRouter from "./modules/user/user.routers.js";
import createCategoryRouter from "./modules/category/category.routers.js";

// repositories
const userRepository = createUserRepository(prisma);
const categoryRepository = createCategoryRepository(prisma);

// middleware
const authMiddleware = createAuthMiddleware(userRepository);

// services
const authService = createAuthService(userRepository, categoryRepository);
const userService = createUserService(userRepository);
const categoryService = createCategoryService(userRepository, categoryRepository);

// controllers
const authController = createAuthController(authService);
const userController = createUserController(userService);
const categoryController = createCategoryController(categoryService);

// routes
const authRouter = createAuthRouter(authController);
const userRouter = createUserRouter(authMiddleware, userController);
const categoryRouter = createCategoryRouter(authMiddleware, categoryController);

export { authRouter, userRouter, categoryRouter };