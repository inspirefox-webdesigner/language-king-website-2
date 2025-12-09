import pool from '../db/connection.js'

// Function to clean up duplicate FAQs
export const cleanupDuplicateFAQs = async () => {
  try {
    console.log('Starting FAQ cleanup process...')
    
    // Get all FAQs
    const [allFaqs] = await pool.execute('SELECT id, question, answer, created_at FROM FAQs ORDER BY created_at ASC')
    
    if (allFaqs.length === 0) {
      console.log('No FAQs found in database')
      return { success: true, message: 'No FAQs to clean up' }
    }
    
    // Track unique questions and duplicates
    const seenQuestions = new Map()
    const duplicateIds = []
    
    for (const faq of allFaqs) {
      const normalizedQuestion = faq.question.trim().toLowerCase()
      
      if (seenQuestions.has(normalizedQuestion)) {
        // This is a duplicate, mark for deletion
        duplicateIds.push(faq.id)
        console.log(`Found duplicate FAQ: "${faq.question}" (ID: ${faq.id})`)
      } else {
        // First occurrence, keep it
        seenQuestions.set(normalizedQuestion, faq.id)
      }
    }
    
    if (duplicateIds.length === 0) {
      console.log('No duplicate FAQs found')
      return { success: true, message: 'No duplicates found' }
    }
    
    // Delete duplicates
    console.log(`Deleting ${duplicateIds.length} duplicate FAQs...`)
    
    for (const id of duplicateIds) {
      await pool.execute('DELETE FROM FAQs WHERE id = ?', [id])
    }
    
    console.log(`Successfully deleted ${duplicateIds.length} duplicate FAQs`)
    
    return { 
      success: true, 
      message: `Cleaned up ${duplicateIds.length} duplicate FAQs`,
      deletedCount: duplicateIds.length
    }
    
  } catch (error) {
    console.error('Error during FAQ cleanup:', error)
    return { 
      success: false, 
      message: 'Failed to cleanup duplicate FAQs',
      error: error.message
    }
  }
}

// Function to get FAQ statistics
export const getFAQStats = async () => {
  try {
    const [allFaqs] = await pool.execute('SELECT question FROM FAQs')
    const seenQuestions = new Set()
    let duplicateCount = 0
    
    for (const faq of allFaqs) {
      const normalizedQuestion = faq.question.trim().toLowerCase()
      if (seenQuestions.has(normalizedQuestion)) {
        duplicateCount++
      } else {
        seenQuestions.add(normalizedQuestion)
      }
    }
    
    return {
      total: allFaqs.length,
      unique: seenQuestions.size,
      duplicates: duplicateCount
    }
  } catch (error) {
    console.error('Error getting FAQ stats:', error)
    return null
  }
}