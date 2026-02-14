import pool from '../db/connection.js';

// Get all cards for a specific tab
export const getCardsByTab = async (req, res) => {
  try {
    const { tabId } = req.params;
    
    const [rows] = await pool.execute(
      'SELECT * FROM pricing_cards WHERE tab_id = ? ORDER BY display_order ASC',
      [tabId]
    );

    // Parse JSON points field
    const cards = rows.map(card => ({
      ...card,
      points: typeof card.points === 'string' ? JSON.parse(card.points) : card.points
    }));

    res.json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
};


// Get all cards with tab info
export const getAllCards = async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        pc.*,
        pt.tab_name
      FROM pricing_cards pc
      JOIN pricing_tabs pt ON pc.tab_id = pt.id
      ORDER BY pt.display_order, pc.display_order
    `);

    // Parse JSON points field
    const cards = rows.map(card => ({
      ...card,
      points: typeof card.points === 'string' ? JSON.parse(card.points) : card.points
    }));

    res.json(cards);
  } catch (error) {
    console.error('Error fetching all cards:', error);
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
};

// Create new card
export const createCard = async (req, res) => {
  try {
    const { tab_id, title, price, badge, points, display_order } = req.body;

    if (!tab_id || !title || !price || !points) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const [result] = await pool.execute(
      'INSERT INTO pricing_cards (tab_id, title, price, badge, points, display_order) VALUES (?, ?, ?, ?, ?, ?)',
      [tab_id, title, price, badge || null, JSON.stringify(points), display_order || 0]
    );

    res.status(201).json({ 
      message: 'Card created successfully',
      id: result.insertId 
    });
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({ error: 'Failed to create card' });
  }
};

// Update card
export const updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { tab_id, title, price, badge, points, display_order } = req.body;

    await pool.execute(
      'UPDATE pricing_cards SET tab_id = ?, title = ?, price = ?, badge = ?, points = ?, display_order = ? WHERE id = ?',
      [tab_id, title, price, badge || null, JSON.stringify(points), display_order, id]
    );

    res.json({ message: 'Card updated successfully' });
  } catch (error) {
    console.error('Error updating card:', error);
    res.status(500).json({ error: 'Failed to update card' });
  }
};

// Delete card
export const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.execute('DELETE FROM pricing_cards WHERE id = ?', [id]);

    res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    console.error('Error deleting card:', error);
    res.status(500).json({ error: 'Failed to delete card' });
  }
};
