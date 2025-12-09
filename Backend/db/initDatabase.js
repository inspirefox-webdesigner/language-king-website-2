import connection from './connection.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
const initDatabase = async () => {
  try {
    // Read the SQL file
    const sqlFile = path.join(__dirname, 'createTables.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');
   
    // Split by semicolon to get individual queries
    const queries = sql.split(';').filter(query => query.trim().length > 0);
   
    const conn = await connection;
    
    // Execute each query
    for (let i = 0; i < queries.length; i++) {
      try {
        await conn.execute(queries[i]);
        console.log(`Query ${i + 1} executed successfully`);
      } catch (err) {
        console.error(`Error executing query ${i + 1}:`, err);
      }
    }
   
    console.log('Database initialization completed');
  } catch (error) {
    console.error('Database initialization failed:', error);
  }
};
 
// Run initialization
initDatabase();