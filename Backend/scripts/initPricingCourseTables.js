import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const initPricingCourseTables = async () => {
  try {
    // Create database connection
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'admin123',
      database: 'language_king',
    });

    console.log('📦 Initializing pricing course tables...');

    // Read SQL file
    const sqlFile = path.join(__dirname, '../db', 'create_pricing_course_tables.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');

    // Split queries and execute
    const queries = sql.split(';').filter((query) => query.trim().length > 0);

    for (const query of queries) {
      try {
        await pool.execute(query);
      } catch (err) {
        if (!err.message.includes('already exists')) {
          console.error('❌ Query error:', err.message);
        }
      }
    }

    console.log('✅ Pricing course tables initialized successfully!');
    await pool.end();
  } catch (error) {
    console.error('❌ Failed to initialize pricing course tables:', error.message);
  }
};

initPricingCourseTables();
