import { Router } from 'express';
import {
    loginHandler,
    registerHandler,
    logoutHandler,
    resetPasswordHandler,
    forgotPasswordHandler,
} from './auth.controller';

const router = Router();

router.post('/login', loginHandler);
router.post('/register', registerHandler);
router.post('/logout', logoutHandler);
router.post('/forgot-password', forgotPasswordHandler);
router.post('/reset-password', resetPasswordHandler);

export default router;
