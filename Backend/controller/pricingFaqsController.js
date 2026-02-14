import pool from '../db/connection.js'

// Get all Pricing FAQs
export const getAllPricingFAQs = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM pricing_faqs ORDER BY created_at ASC')
    res.json(rows)
  } catch (error) {
    console.error('Error fetching pricing FAQs:', error)
    res.status(500).json({ error: 'Failed to fetch pricing FAQs' })
  }
}

// Create new Pricing FAQ
export const createPricingFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body
    
    if (!question || !answer) {
      return res.status(400).json({ error: 'Question and answer are required' })
    }
    
    const [result] = await pool.execute(
      'INSERT INTO pricing_faqs (question, answer) VALUES (?, ?)',
      [question.trim(), answer.trim()]
    )
    
    res.status(201).json({ 
      id: result.insertId, 
      question: question.trim(), 
      answer: answer.trim(),
      message: 'Pricing FAQ created successfully' 
    })
  } catch (error) {
    console.error('Error creating pricing FAQ:', error)
    res.status(500).json({ error: 'Failed to create pricing FAQ' })
  }
}

// Update Pricing FAQ
export const updatePricingFAQ = async (req, res) => {
  try {
    const { id } = req.params
    const { question, answer } = req.body
    
    if (!question || !answer) {
      return res.status(400).json({ error: 'Question and answer are required' })
    }
    
    const [result] = await pool.execute(
      'UPDATE pricing_faqs SET question = ?, answer = ? WHERE id = ?',
      [question.trim(), answer.trim(), id]
    )
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Pricing FAQ not found' })
    }
    
    res.json({ message: 'Pricing FAQ updated successfully' })
  } catch (error) {
    console.error('Error updating pricing FAQ:', error)
    res.status(500).json({ error: 'Failed to update pricing FAQ' })
  }
}

// Delete Pricing FAQ
export const deletePricingFAQ = async (req, res) => {
  try {
    const { id } = req.params
    
    const [result] = await pool.execute('DELETE FROM pricing_faqs WHERE id = ?', [id])
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Pricing FAQ not found' })
    }
    
    res.json({ message: 'Pricing FAQ deleted successfully' })
  } catch (error) {
    console.error('Error deleting pricing FAQ:', error)
    res.status(500).json({ error: 'Failed to delete pricing FAQ' })
  }
}
