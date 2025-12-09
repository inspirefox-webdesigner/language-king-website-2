import express from 'express';
import {
    getContactSubmissions,
    getCourseSubmissions,
    getBookTrailSubmissions,
    createContactSubmission,
    createCourseSubmission,
    createBookTrailSubmission,
    deleteContactSubmission,
    deleteCourseSubmission,
    deleteBookTrailSubmission
} from '../controller/formController.js';
 
const router = express.Router();
 
// GET routes
router.get('/contact', getContactSubmissions);
router.get('/course', getCourseSubmissions);
router.get('/booktrail', getBookTrailSubmissions);
 
// POST routes
router.post('/contact', createContactSubmission);
router.post('/course', createCourseSubmission);
router.post('/booktrail', createBookTrailSubmission);
 
// DELETE routes
router.delete('/contact/:id', deleteContactSubmission);
router.delete('/course/:id', deleteCourseSubmission);
router.delete('/booktrail/:id', deleteBookTrailSubmission);
 
export default router;