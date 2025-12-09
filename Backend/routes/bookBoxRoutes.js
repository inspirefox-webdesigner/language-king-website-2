import express from 'express';
import { getBookBox, updateBookBox, upload } from '../controller/bookBoxController.js';

const router = express.Router();

// GET /api/book-box - Get book box data
router.get('/', getBookBox);

// PUT /api/book-box - Update book box data
router.put('/', upload.single('aiportal_image'), updateBookBox);

export default router;