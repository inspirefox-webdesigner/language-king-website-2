import express from 'express';
import { getCardsByTab, getAllCards, createCard, updateCard, deleteCard } from '../controller/pricingCardsController.js';

const router = express.Router();

// Get all cards
router.get('/', getAllCards);

// Get cards by tab
router.get('/tab/:tabId', getCardsByTab);

// Create new card
router.post('/', createCard);

// Update card
router.put('/:id', updateCard);

// Delete card
router.delete('/:id', deleteCard);

export default router;
