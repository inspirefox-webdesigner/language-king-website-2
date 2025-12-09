import express from 'express'
import { 
  getAllFAQs, 
  getFAQById, 
  createFAQ, 
  updateFAQ, 
  deleteFAQ 
} from '../controller/faqsController.js'
import { cleanupDuplicateFAQs, getFAQStats } from '../utils/cleanupDuplicateFAQs.js'

const router = express.Router()

// Get all FAQs
router.get('/', getAllFAQs)

// Get FAQ statistics
router.get('/stats', async (req, res) => {
  try {
    const stats = await getFAQStats()
    res.json(stats)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get FAQ stats' })
  }
})

// Cleanup duplicate FAQs
router.post('/cleanup', async (req, res) => {
  try {
    const result = await cleanupDuplicateFAQs()
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Failed to cleanup FAQs' })
  }
})

// Get FAQ by ID
router.get('/:id', getFAQById)

// Create new FAQ
router.post('/', createFAQ)

// Update FAQ
router.put('/:id', updateFAQ)

// Delete FAQ
router.delete('/:id', deleteFAQ)

export default router