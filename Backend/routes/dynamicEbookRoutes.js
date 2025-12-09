import express from 'express';
import { 
  getAllDynamicPages, 
  getDynamicPageBySlug, 
  getDynamicPageById,
  createDynamicPage, 
  updateDynamicPage, 
  deleteDynamicPage 
} from '../controller/dynamicEbookController.js';

const router = express.Router();

// GET /api/dynamic-ebook - Get all pages (list)
router.get('/', getAllDynamicPages);

// GET /api/dynamic-ebook/slug/:slug - Get page by slug (for frontend)
router.get('/slug/:slug', getDynamicPageBySlug);

// GET /api/dynamic-ebook/:id - Get page by ID (for admin edit)
router.get('/:id', getDynamicPageById);

// POST /api/dynamic-ebook - Create new page
router.post('/', createDynamicPage);

// PUT /api/dynamic-ebook/:id - Update page
router.put('/:id', updateDynamicPage);

// DELETE /api/dynamic-ebook/:id - Delete page
router.delete('/:id', deleteDynamicPage);

export default router;
