import pool from '../db/connection.js'

// Get all FAQs
export const getAllFAQs = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT id, question, answer, created_at FROM FAQs ORDER BY created_at ASC')
    
    // Remove duplicates based on question (case-insensitive)
    const uniqueFaqs = []
    const seenQuestions = new Set()
    
    for (const faq of rows) {
      const normalizedQuestion = faq.question.trim().toLowerCase()
      if (!seenQuestions.has(normalizedQuestion)) {
        seenQuestions.add(normalizedQuestion)
        uniqueFaqs.push(faq)
      }
    }
    
    // Add cache headers to prevent caching issues
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    })
    
    res.json(uniqueFaqs)
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    res.status(500).json({ error: 'Failed to fetch FAQs' })
  }
}

// Get FAQ by ID
export const getFAQById = async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.execute('SELECT * FROM FAQs WHERE id = ?', [id])
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'FAQ not found' })
    }
    
    res.json(rows[0])
  } catch (error) {
    console.error('Error fetching FAQ:', error)
    res.status(500).json({ error: 'Failed to fetch FAQ' })
  }
}

// Create new FAQ
export const createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body
    
    if (!question || !answer) {
      return res.status(400).json({ error: 'Question and answer are required' })
    }
    
    // Check for duplicate question (case-insensitive)
    const [existing] = await pool.execute(
      'SELECT id FROM FAQs WHERE LOWER(TRIM(question)) = LOWER(TRIM(?))',
      [question]
    )
    
    if (existing.length > 0) {
      return res.status(400).json({ error: 'FAQ with this question already exists' })
    }
    
    const [result] = await pool.execute(
      'INSERT INTO FAQs (question, answer) VALUES (?, ?)',
      [question.trim(), answer.trim()]
    )
    
    res.status(201).json({ 
      id: result.insertId, 
      question: question.trim(), 
      answer: answer.trim(),
      message: 'FAQ created successfully' 
    })
  } catch (error) {
    console.error('Error creating FAQ:', error)
    res.status(500).json({ error: 'Failed to create FAQ' })
  }
}

// Update FAQ
export const updateFAQ = async (req, res) => {
  try {
    const { id } = req.params
    const { question, answer } = req.body
    
    if (!question || !answer) {
      return res.status(400).json({ error: 'Question and answer are required' })
    }
    
    // Check for duplicate question (excluding current FAQ)
    const [existing] = await pool.execute(
      'SELECT id FROM FAQs WHERE LOWER(TRIM(question)) = LOWER(TRIM(?)) AND id != ?',
      [question, id]
    )
    
    if (existing.length > 0) {
      return res.status(400).json({ error: 'FAQ with this question already exists' })
    }
    
    const [result] = await pool.execute(
      'UPDATE FAQs SET question = ?, answer = ? WHERE id = ?',
      [question.trim(), answer.trim(), id]
    )
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'FAQ not found' })
    }
    
    res.json({ message: 'FAQ updated successfully' })
  } catch (error) {
    console.error('Error updating FAQ:', error)
    res.status(500).json({ error: 'Failed to update FAQ' })
  }
}

// Delete FAQ
export const deleteFAQ = async (req, res) => {
  try {
    const { id } = req.params
    
    const [result] = await pool.execute('DELETE FROM FAQs WHERE id = ?', [id])
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'FAQ not found' })
    }
    
    res.json({ message: 'FAQ deleted successfully' })
  } catch (error) {
    console.error('Error deleting FAQ:', error)
    res.status(500).json({ error: 'Failed to delete FAQ' })
  }
}
