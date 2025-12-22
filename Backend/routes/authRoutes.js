import express from 'express';
import { login, getCredentials, updateEmail, updatePassword } from '../controller/authController.js';

const router = express.Router();

router.post('/login', login);
router.get('/credentials', getCredentials);
router.put('/update-email', updateEmail);
router.put('/update-password', updatePassword);

export default router;
