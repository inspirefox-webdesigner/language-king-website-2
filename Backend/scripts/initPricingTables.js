import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const initPricingTables = async () => {
  try {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'admin123',
      database: 'language_king',
    });

    console.log('Creating pricing tables...');

    // Create pricing_faqs table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS pricing_faqs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('✓ pricing_faqs table created');

    // Create trusted_section table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS trusted_section (
        id INT AUTO_INCREMENT PRIMARY KEY,
        heading TEXT NOT NULL,
        avatar_images JSON NOT NULL,
        avatar_text TEXT NOT NULL,
        star_rating DECIMAL(3,2) DEFAULT 4.92,
        star_text TEXT NOT NULL,
        bottom_heading TEXT NOT NULL,
        bottom_text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('✓ trusted_section table created');

    console.log('✅ All pricing tables created successfully!');
    await pool.end();
  } catch (error) {
    console.error('❌ Error creating pricing tables:', error);
  }
};

initPricingTables();
