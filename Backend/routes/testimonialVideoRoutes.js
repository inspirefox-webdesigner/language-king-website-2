import express from 'express'
import {
  getTestimonialVideo,
  createOrUpdateTestimonialVideo,
  deleteTestimonialVideo,
  getTestimonialHeroSection,
  createOrUpdateTestimonialHeroSection
} from '../controller/testimonialVideoController.js'

const router = express.Router()

router.get('/testimonial-video', getTestimonialVideo)
router.post('/testimonial-video', createOrUpdateTestimonialVideo)
router.delete('/testimonial-video', deleteTestimonialVideo)
router.get('/testimonial-hero-section', getTestimonialHeroSection)
router.post('/testimonial-hero-section', createOrUpdateTestimonialHeroSection)

export default router
