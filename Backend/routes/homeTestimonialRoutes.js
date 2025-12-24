import express from 'express';
import { getAllHomeTestimonials, getHomeTestimonialById, createHomeTestimonial, updateHomeTestimonial, deleteHomeTestimonial } from '../controller/homeTestimonialController.js';

const router = express.Router();

router.get('/home-testimonials', getAllHomeTestimonials);
router.get('/home-testimonials/:id', getHomeTestimonialById);
router.post('/home-testimonials', createHomeTestimonial);
router.put('/home-testimonials/:id', updateHomeTestimonial);
router.delete('/home-testimonials/:id', deleteHomeTestimonial);

export default router;
