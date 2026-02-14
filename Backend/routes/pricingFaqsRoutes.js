import express from 'express'
import { 
  getAllPricingFAQs, 
  createPricingFAQ, 
  updatePricingFAQ, 
  deletePricingFAQ 
} from '../controller/pricingFaqsController.js'

const router = express.Router()

router.get('/', getAllPricingFAQs)
router.post('/', createPricingFAQ)
router.put('/:id', updatePricingFAQ)
router.delete('/:id', deletePricingFAQ)

export default router
