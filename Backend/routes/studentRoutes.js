import express from 'express';
import {
  getAllPTEStudents,
  getPTEStudentById,
  createPTEStudent,
  updatePTEStudent,
  deletePTEStudent,
  getAllNAATICCLStudents,
  getNAATICCLStudentById,
  createNAATICCLStudent,
  updateNAATICCLStudent,
  deleteNAATICCLStudent,
  getAllPTEFame,
  getPTEFameById,
  createPTEFame,
  updatePTEFame,
  deletePTEFame,
  getAllNAATICCLResults,
  getNAATICCLResultById,
  createNAATICCLResult,
  updateNAATICCLResult,
  deleteNAATICCLResult,
  getTestimonialVideo,
  createOrUpdateTestimonialVideo
} from '../controller/studentController.js';

const router = express.Router();

// PTE Students Routes
router.get('/pte-students', getAllPTEStudents);
router.get('/pte-students/:id', getPTEStudentById);
router.post('/pte-students', createPTEStudent);
router.put('/pte-students/:id', updatePTEStudent);
router.delete('/pte-students/:id', deletePTEStudent);

// NAATI-CCL Students Routes
router.get('/naati-ccl-students', getAllNAATICCLStudents);
router.get('/naati-ccl-students/:id', getNAATICCLStudentById);
router.post('/naati-ccl-students', createNAATICCLStudent);
router.put('/naati-ccl-students/:id', updateNAATICCLStudent);
router.delete('/naati-ccl-students/:id', deleteNAATICCLStudent);

// PTE Fame Routes
router.get('/pte-fame', getAllPTEFame);
router.get('/pte-fame/:id', getPTEFameById);
router.post('/pte-fame', createPTEFame);
router.put('/pte-fame/:id', updatePTEFame);
router.delete('/pte-fame/:id', deletePTEFame);

// NAATI CCL Results Routes
router.get('/naati-ccl-results', getAllNAATICCLResults);
router.get('/naati-ccl-results/:id', getNAATICCLResultById);
router.post('/naati-ccl-results', createNAATICCLResult);
router.put('/naati-ccl-results/:id', updateNAATICCLResult);
router.delete('/naati-ccl-results/:id', deleteNAATICCLResult);

// Testimonial Video Routes
router.get('/testimonial-video', getTestimonialVideo);
router.post('/testimonial-video', createOrUpdateTestimonialVideo);

export default router;