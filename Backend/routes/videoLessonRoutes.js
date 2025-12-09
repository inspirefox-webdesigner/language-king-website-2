import express from 'express';
import { getAllVideoLessons, getVideoLessonById, createVideoLesson, updateVideoLesson, deleteVideoLesson } from '../controller/videoLessonController.js';

const router = express.Router();

router.get('/video-lessons', getAllVideoLessons);
router.get('/video-lessons/:id', getVideoLessonById);
router.post('/video-lessons', createVideoLesson);
router.put('/video-lessons/:id', updateVideoLesson);
router.delete('/video-lessons/:id', deleteVideoLesson);

export default router;
