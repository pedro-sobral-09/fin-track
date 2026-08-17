import { prisma } from "../lib/prisma.js";
import createUserRepository from "../../modules/user/user.repository.js";
import createAuthMiddleware from "./authenticate.js";

const userRepository = createUserRepository(prisma);
const authMiddleware = createAuthMiddleware(userRepository);

export default authMiddleware;