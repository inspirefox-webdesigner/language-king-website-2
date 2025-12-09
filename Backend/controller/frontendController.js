import connection from '../db/connection.js';
import API_BASE_URL from "../config/api.js";

// Get PTE students for frontend display
export const getPTEStudentsForFrontend = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      'SELECT name, country, flag, image, gradient FROM pte_students ORDER BY created_at ASC'
    );
    
    // Transform data to match frontend format
    const students = rows.map(student => ({
      name: student.name,
      country: student.country,
      flag: student.flag ? `/uploads/${student.flag}` : null,
      image: student.image ? `/uploads/${student.image}` : null,
      gradient: student.gradient || 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
    }));
    
    res.json(students);
  } catch (error) {
    console.error('Error fetching PTE students for frontend:', error);
    res.status(500).json({ message: 'Error fetching PTE students' });
  }
};

// Get NAATI-CCL students for frontend display
export const getNAATICCLStudentsForFrontend = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      'SELECT name, country, flag, image, gradient FROM naati_ccl_students ORDER BY created_at ASC'
    );
    
    // Transform data to match frontend format
    const students = rows.map(student => ({
      name: student.name,
      country: student.country,
      flag: student.flag ? `/uploads/${student.flag}` : null,
      image: student.image ? `/uploads/${student.image}` : null,
      gradient: student.gradient || 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
    }));
    
    res.json(students);
  } catch (error) {
    console.error('Error fetching NAATI-CCL students for frontend:', error);
    res.status(500).json({ message: 'Error fetching NAATI-CCL students' });
  }
};

// Get PTE Fame for frontend display
export const getPTEFameForFrontend = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      'SELECT id, title, student_name, band, video_url, video_placeholder_img, student_img, flag_img FROM pte_fame ORDER BY created_at DESC'
    );
    
    // Transform data to match frontend format
    const fameEntries = rows.map(entry => ({
      id: entry.id,
      title: entry.title,
      name: entry.student_name,
      tag: entry.band,
      video: entry.video_url ? `${API_BASE_URL.replace('/api','')}/uploads/${entry.video_url}` : null,
      image: entry.video_placeholder_img ? `${API_BASE_URL.replace('/api','')}/uploads/${entry.video_placeholder_img}` : null,
      avatar: entry.student_img ? `${API_BASE_URL.replace('/api','')}/uploads/${entry.student_img}` : null,
      flag: entry.flag_img ? `${API_BASE_URL.replace('/api','')}/uploads/${entry.flag_img}` : null
    }));
    
    res.json(fameEntries);
  } catch (error) {
    console.error('Error fetching PTE Fame for frontend:', error);
    res.status(500).json({ message: 'Error fetching PTE Fame' });
  }
};

// Get NAATI CCL Results for frontend display
export const getNAATICCLResultsForFrontend = async (req, res) => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute(
      'SELECT id, title, student_name, band, video_url, video_placeholder_img, student_img, flag_img FROM naati_ccl_results ORDER BY created_at DESC'
    );
    
    // Transform data to match frontend format
    const resultsEntries = rows.map(entry => ({
      id: entry.id,
      title: entry.title,
      name: entry.student_name,
      tag: entry.band,
      video: entry.video_url ? `${API_BASE_URL.replace('/api','')}/uploads/${entry.video_url}` : null,
      image: entry.video_placeholder_img ? `${API_BASE_URL.replace('/api','')}/uploads/${entry.video_placeholder_img}` : null,
      avatar: entry.student_img ? `${API_BASE_URL.replace('/api','')}/uploads/${entry.student_img}` : null,
      flag: entry.flag_img ? `${API_BASE_URL.replace('/api','')}/uploads/${entry.flag_img}` : null
    }));
    
    res.json(resultsEntries);
  } catch (error) {
    console.error('Error fetching NAATI CCL Results for frontend:', error);
    res.status(500).json({ message: 'Error fetching NAATI CCL Results' });
  }
};