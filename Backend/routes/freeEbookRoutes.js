import express from 'express';
import { getFreeEbookBanner, updateFreeEbookBanner } from '../controller/freeEbookController.js';

const router = express.Router();

// GET /api/free-ebook/banner - Get banner data
router.get('/banner', getFreeEbookBanner);

// PUT /api/free-ebook/banner - Update banner data
router.put('/banner', updateFreeEbookBanner);

export default router;