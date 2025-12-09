import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Check if file is an image or video
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image and video files are allowed!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit for videos
  }
});

// Upload endpoint
router.post('/upload', (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      console.error('Multer error:', err);
      return res.status(500).json({ error: err.message });
    }
    
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      console.log('File uploaded successfully:', req.file.filename);
      res.json({ 
        message: 'File uploaded successfully',
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Error uploading file' });
    }
  });
});

export default router;