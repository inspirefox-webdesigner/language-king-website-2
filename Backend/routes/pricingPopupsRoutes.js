import express from 'express';
import { getPopupByCard, getAllPopups, upsertPopup, deletePopup } from '../controller/pricingPopupsController.js';

const router = express.Router();

// Get all popups
router.get('/', getAllPopups);

// Get popup by card ID
router.get('/card/:cardId', getPopupByCard);

// Create or update popup
router.post('/', upsertPopup);

// Delete popup
router.delete('/:id', deletePopup);

export default router;
