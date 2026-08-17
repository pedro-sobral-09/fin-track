import { Router } from 'express';

export default function createAuthRouter(authController){
    const router = Router();

    router.post('/register', authController.register);

    router.post('/login', authController.login);

    return router;
}