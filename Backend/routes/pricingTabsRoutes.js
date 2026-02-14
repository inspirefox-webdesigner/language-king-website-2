import express from 'express';
import { getAllTabs, createTab, updateTab, deleteTab } from '../controller/pricingTabsController.js';

const router = express.Router();

// Get all tabs
router.get('/', getAllTabs);

// Create new tab
router.post('/', createTab);

// Update tab
router.put('/:id', updateTab);

// Delete tab
router.delete('/:id', deleteTab);

export default router;
