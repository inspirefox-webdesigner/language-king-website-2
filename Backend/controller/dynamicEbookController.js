import db from '../db/connection.js';

// Get all dynamic ebook pages
export const getAllDynamicPages = async (req, res) => {
  try {
    const [pages] = await db.query(
      'SELECT id, page_slug, page_title, is_active, created_at FROM dynamic_ebook_pages ORDER BY created_at DESC'
    );
    res.json(pages);
  } catch (error) {
    console.error('Error fetching dynamic pages:', error);
    res.status(500).json({ error: 'Failed to fetch pages' });
  }
};


// Get single dynamic page by slug
export const getDynamicPageBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const [pages] = await db.query(
      'SELECT * FROM dynamic_ebook_pages WHERE page_slug = ? AND is_active = TRUE',
      [slug]
    );
    
    if (pages.length === 0) {
      return res.status(404).json({ error: 'Page not found' });
    }
    
    res.json(pages[0]);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ error: 'Failed to fetch page' });
  }
};


// Get single dynamic page by ID (for admin)
export const getDynamicPageById = async (req, res) => {
  try {
    const { id } = req.params;
    const [pages] = await db.query(
      'SELECT * FROM dynamic_ebook_pages WHERE id = ?',
      [id]
    );
    
    if (pages.length === 0) {
      return res.status(404).json({ error: 'Page not found' });
    }
    
    res.json(pages[0]);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ error: 'Failed to fetch page' });
  }
};


// Create new dynamic page
export const createDynamicPage = async (req, res) => {
  try {
    const pageData = req.body;
    
    // Convert arrays to JSON strings
    if (pageData.learning_points && Array.isArray(pageData.learning_points)) {
      pageData.learning_points = JSON.stringify(pageData.learning_points);
    }
    if (pageData.faqs && Array.isArray(pageData.faqs)) {
      pageData.faqs = JSON.stringify(pageData.faqs);
    }
    
    const [result] = await db.query(
      'INSERT INTO dynamic_ebook_pages SET ?',
      [pageData]
    );
    
    res.status(201).json({ 
      message: 'Page created successfully', 
      id: result.insertId,
      slug: pageData.page_slug
    });
  } catch (error) {
    console.error('Error creating page:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Page slug already exists' });
    }
    res.status(500).json({ error: 'Failed to create page' });
  }
};

// Update dynamic page
export const updateDynamicPage = async (req, res) => {
  try {
    const { id } = req.params;
    const pageData = req.body;
    
    // Convert arrays to JSON strings
    if (pageData.learning_points && Array.isArray(pageData.learning_points)) {
      pageData.learning_points = JSON.stringify(pageData.learning_points);
    }
    if (pageData.faqs && Array.isArray(pageData.faqs)) {
      pageData.faqs = JSON.stringify(pageData.faqs);
    }
    
    const [result] = await db.query(
      'UPDATE dynamic_ebook_pages SET ? WHERE id = ?',
      [pageData, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Page not found' });
    }
    
    res.json({ message: 'Page updated successfully' });
  } catch (error) {
    console.error('Error updating page:', error);
    res.status(500).json({ error: 'Failed to update page' });
  }
};

// Delete dynamic page
export const deleteDynamicPage = async (req, res) => {
  try {
    const { id } = req.params;
    
    const [result] = await db.query(
      'DELETE FROM dynamic_ebook_pages WHERE id = ?',
      [id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Page not found' });
    }
    
    res.json({ message: 'Page deleted successfully' });
  } catch (error) {
    console.error('Error deleting page:', error);
    res.status(500).json({ error: 'Failed to delete page' });
  }
};


