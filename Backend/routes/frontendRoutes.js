import express from 'express';
import {
  getPTEStudentsForFrontend,
  getNAATICCLStudentsForFrontend,
  getPTEFameForFrontend,
  getNAATICCLResultsForFrontend
} from '../controller/frontendController.js';
import connection from '../db/connection.js';

const router = express.Router();

// Frontend API routes
router.get('/frontend/pte-students', getPTEStudentsForFrontend);
router.get('/frontend/naati-ccl-students', getNAATICCLStudentsForFrontend);
router.get('/frontend/pte-fame', getPTEFameForFrontend);
router.get('/frontend/naati-ccl-results', getNAATICCLResultsForFrontend);

// Testimonial Video routes
router.get('/testimonial-video', async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute('SELECT * FROM testimonial_video ORDER BY id DESC LIMIT 1');
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.json({});
    }
  } catch (error) {
    console.error('Error fetching testimonial video:', error);
    res.status(500).json({ message: 'Error fetching testimonial video' });
  }
});

router.post('/testimonial-video', async (req, res) => {
  try {
    const { video_url, video_placeholder_img, heading, description, student_name, student_tag, student_avatar } = req.body;
    console.log('Received data:', { video_url, video_placeholder_img, heading, description, student_name, student_tag, student_avatar });
    
    const conn = await connection;
    const [existing] = await conn.execute('SELECT id FROM testimonial_video LIMIT 1');
    
    if (existing.length > 0) {
      console.log('Updating existing record with ID:', existing[0].id);
      await conn.execute(
        'UPDATE testimonial_video SET video_url = ?, video_placeholder_img = ?, heading = ?, description = ?, student_name = ?, student_tag = ?, student_avatar = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [video_url, video_placeholder_img, heading, description, student_name, student_tag, student_avatar, existing[0].id]
      );
    } else {
      console.log('Inserting new record');
      await conn.execute(
        'INSERT INTO testimonial_video (video_url, video_placeholder_img, heading, description, student_name, student_tag, student_avatar) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [video_url, video_placeholder_img, heading, description, student_name, student_tag, student_avatar]
      );
    }
    
    res.json({ message: 'Testimonial video updated successfully', success: true });
  } catch (error) {
    console.error('Error saving testimonial video:', error);
    res.status(500).json({ message: 'Error saving testimonial video', error: error.message });
  }
});

export default router;