import pool from '../db/connection.js'
import multer from 'multer'
import path from 'path'

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, `file-${Date.now()}-${Math.floor(Math.random() * 1000000000)}${path.extname(file.originalname)}`)
  }
})

export const upload = multer({ storage })

// Get Trusted Section
export const getTrustedSection = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM trusted_section ORDER BY id DESC LIMIT 1')
    
    if (rows.length === 0) {
      return res.json(null)
    }
    
    // Parse JSON avatar_images
    const data = rows[0]
    try {
      data.avatar_images = typeof data.avatar_images === 'string' ? JSON.parse(data.avatar_images) : data.avatar_images
    } catch (parseError) {
      console.error('Error parsing avatar_images:', parseError)
      data.avatar_images = []
    }
    
    res.json(data)
  } catch (error) {
    console.error('Error fetching trusted section:', error)
    res.status(500).json({ error: 'Failed to fetch trusted section' })
  }
}

// Create or Update Trusted Section
export const upsertTrustedSection = async (req, res) => {
  try {
    const { heading, avatar_text, star_rating, star_text, bottom_heading, bottom_text, existing_images } = req.body
    
    // Get uploaded avatar images
    const newAvatarImages = req.files ? req.files.map(file => `/uploads/${file.filename}`) : []
    
    // Merge existing and new images
    let existingImagesArray = []
    try {
      existingImagesArray = existing_images ? JSON.parse(existing_images) : []
    } catch (e) {
      existingImagesArray = []
    }
    
    const allImages = [...existingImagesArray, ...newAvatarImages]
    
    // Check if record exists
    const [existing] = await pool.execute('SELECT id FROM trusted_section LIMIT 1')
    
    if (existing.length > 0) {
      // Update existing record
      await pool.execute(
        `UPDATE trusted_section SET 
          heading = ?, 
          avatar_images = ?, 
          avatar_text = ?, 
          star_rating = ?, 
          star_text = ?, 
          bottom_heading = ?, 
          bottom_text = ?
        WHERE id = ?`,
        [
          heading,
          JSON.stringify(allImages),
          avatar_text,
          star_rating || 4.92,
          star_text,
          bottom_heading,
          bottom_text,
          existing[0].id
        ]
      )
      
      res.json({ message: 'Trusted section updated successfully' })
    } else {
      // Create new record
      await pool.execute(
        `INSERT INTO trusted_section 
          (heading, avatar_images, avatar_text, star_rating, star_text, bottom_heading, bottom_text) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          heading,
          JSON.stringify(allImages),
          avatar_text,
          star_rating || 4.92,
          star_text,
          bottom_heading,
          bottom_text
        ]
      )
      
      res.status(201).json({ message: 'Trusted section created successfully' })
    }
  } catch (error) {
    console.error('Error upserting trusted section:', error)
    res.status(500).json({ error: 'Failed to save trusted section' })
  }
}
