import db from '../db/connection.js';

const addAiportalImageColumn = async () => {
  try {
    // Check if column already exists
    const checkQuery = `
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_SCHEMA = 'language_king' 
      AND TABLE_NAME = 'book_box' 
      AND COLUMN_NAME = 'aiportal_image'
    `;
    
    const [existingColumns] = await db.execute(checkQuery);
    
    if (existingColumns.length === 0) {
      // Add the column if it doesn't exist
      const alterQuery = `ALTER TABLE book_box ADD COLUMN aiportal_image VARCHAR(255) DEFAULT NULL`;
      await db.execute(alterQuery);
      console.log(' aiportal_image column added successfully to book_box table');
    } else {
      console.log('ℹ aiportal_image column already exists in book_box table');
    }
    
    process.exit(0);
  } catch (error) {
    console.error(' Error adding aiportal_image column:', error);
    process.exit(1);
  }
};

addAiportalImageColumn();