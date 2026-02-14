import pool from '../db/connection.js';

// Get all tabs
export const getAllTabs = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM pricing_tabs ORDER BY display_order ASC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching tabs:', error);
    res.status(500).json({ error: 'Failed to fetch tabs' });
  }
};

// Create new tab
export const createTab = async (req, res) => {
  try {
    const { tab_name, display_order } = req.body;
    
    if (!tab_name) {
      return res.status(400).json({ error: 'Tab name is required' });
    }

    const [result] = await pool.execute(
      'INSERT INTO pricing_tabs (tab_name, display_order) VALUES (?, ?)',
      [tab_name, display_order || 0]
    );

    res.status(201).json({ 
      message: 'Tab created successfully',
      id: result.insertId 
    });
  } catch (error) {
    console.error('Error creating tab:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Tab name already exists' });
    }
    res.status(500).json({ error: 'Failed to create tab' });
  }
};

// Update tab
export const updateTab = async (req, res) => {
  try {
    const { id } = req.params;
    const { tab_name, display_order } = req.body;

    await pool.execute(
      'UPDATE pricing_tabs SET tab_name = ?, display_order = ? WHERE id = ?',
      [tab_name, display_order, id]
    );

    res.json({ message: 'Tab updated successfully' });
  } catch (error) {
    console.error('Error updating tab:', error);
    res.status(500).json({ error: 'Failed to update tab' });
  }
};

// Delete tab
export const deleteTab = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.execute('DELETE FROM pricing_tabs WHERE id = ?', [id]);

    res.json({ message: 'Tab deleted successfully' });
  } catch (error) {
    console.error('Error deleting tab:', error);
    res.status(500).json({ error: 'Failed to delete tab' });
  }
};
