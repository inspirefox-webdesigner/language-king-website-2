import db from '../db/connection.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'aiportal-' + uniqueSuffix + path.extname(file.originalname));
  }
});


export const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Get Book-Box data
const getBookBox = async (req, res) => {
  try {
    const query = 'SELECT * FROM book_box ORDER BY updated_at DESC, id DESC LIMIT 1';
    const [rows] = await db.execute(query);
    
    if (rows.length === 0) {
      // Create default record if none exists
      const defaultData = {
        ebook_title: 'E-Book Only',
        ebook_subtitle: 'Get 7-days Free Trial',
        ebook_price: '$0.99',
        aiportal_title: '6 Month AI Portal',
        aiportal_subtitle: 'Prediction File + 5 Books',
        aiportal_price: '$99',
        aiportal_original_price: '$129',
        aiportal_features: '- 10 Full Mock Tests\n- 20 Sectional Tests\n- 5000+ Exam Questions\n- 5 Books Included',
        aiportal_image: null,
        prediction_file_title: 'Prediction File',
        prediction_file_subtitle: 'Get monthly updates for 6 months',
        prediction_file_price: '$9'
      };
      
      // Insert default data into database
      const insertQuery = `
        INSERT INTO book_box (
          ebook_title, ebook_subtitle, ebook_price,
          aiportal_title, aiportal_subtitle, aiportal_price, aiportal_original_price,
          aiportal_features, aiportal_image, prediction_file_title, prediction_file_subtitle, prediction_file_price
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      
      await db.execute(insertQuery, [
        defaultData.ebook_title, defaultData.ebook_subtitle, defaultData.ebook_price,
        defaultData.aiportal_title, defaultData.aiportal_subtitle, defaultData.aiportal_price,
        defaultData.aiportal_original_price, defaultData.aiportal_features, defaultData.aiportal_image,
        defaultData.prediction_file_title, defaultData.prediction_file_subtitle, defaultData.prediction_file_price
      ]);
      
      return res.json(defaultData);
    }
    
    // Add cache headers to prevent caching issues
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching book box data:', error);
    res.status(500).json({ 
      message: 'Failed to fetch book box data', 
      error: error.message 
    });
  }
};

// Update Book-Box data
const updateBookBox = async (req, res) => {
  try {
    const {
      ebook_title,
      ebook_subtitle,
      ebook_price,
      aiportal_title,
      aiportal_subtitle,
      aiportal_price,
      aiportal_original_price,
      aiportal_features,
      prediction_file_title,
      prediction_file_subtitle,
      prediction_file_price
    } = req.body;

    let aiportal_image = null;
    if (req.file) {
      aiportal_image = req.file.filename;
    }

    // Validate required fields
    if (!ebook_title || !aiportal_title) {
      return res.status(400).json({ 
        message: 'E-Book title and AI Portal title are required fields' 
      });
    }

    // Update the single record (id=1)
    let updateQuery = `
      UPDATE book_box SET
        ebook_title = ?,
        ebook_subtitle = ?,
        ebook_price = ?,
        aiportal_title = ?,
        aiportal_subtitle = ?,
        aiportal_price = ?,
        aiportal_original_price = ?,
        aiportal_features = ?,
        prediction_file_title = ?,
        prediction_file_subtitle = ?,
        prediction_file_price = ?,
        updated_at = CURRENT_TIMESTAMP
    `;
    
    let values = [
      ebook_title, ebook_subtitle || '', ebook_price || '$0.99',
      aiportal_title, aiportal_subtitle || '', aiportal_price || '$99',
      aiportal_original_price || '$129', aiportal_features || '',
      prediction_file_title || 'Prediction File', 
      prediction_file_subtitle || 'Get monthly updates for 6 months',
      prediction_file_price || '$9'
    ];
    
    if (aiportal_image) {
      updateQuery += `, aiportal_image = ?`;
      values.push(aiportal_image);
    }
    
    updateQuery += ` WHERE id = 1`;


    await db.execute(updateQuery, values);
    
    // Return success with updated data
    res.json({ 
      message: 'Book-Box updated successfully! Changes are now live on the website.',
      success: true,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating book box:', error);
    res.status(500).json({ 
      message: 'Failed to update book box. Please try again.', 
      error: error.message,
      success: false
    });
  }
};

export {
  getBookBox,
  updateBookBox
};


