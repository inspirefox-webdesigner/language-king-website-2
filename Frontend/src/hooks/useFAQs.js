import { useState, useEffect, useRef } from 'react'
import API_BASE_URL from "../config/api";

// Cache to prevent multiple API calls
let faqsCache = null
let cacheTimestamp = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

const useFAQs = () => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const hasFetched = useRef(false)

  useEffect(() => {
    const fetchFAQs = async () => {
      // Prevent multiple calls
      if (hasFetched.current) {
        return
      }
      
      // Check cache first
      const now = Date.now()
      if (faqsCache && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
        setFaqs(faqsCache)
        setLoading(false)
        hasFetched.current = true
        return
      }

      try {
        const response = await fetch(`${API_BASE_URL}/faqs?t=${now}`)
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs')
        }
        const data = await response.json()
        
        // Remove duplicates based on question text
        const uniqueFaqs = data.filter((faq, index, self) => 
          index === self.findIndex(f => f.question.trim().toLowerCase() === faq.question.trim().toLowerCase())
        )
        
        // Update cache
        faqsCache = uniqueFaqs
        cacheTimestamp = now
        
        setFaqs(uniqueFaqs)
        hasFetched.current = true
      } catch (err) {
        setError(err.message)
        console.error('Error fetching FAQs:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchFAQs()
  }, [])

  // Function to clear cache (useful for admin updates)
  const clearCache = () => {
    faqsCache = null
    cacheTimestamp = null
    hasFetched.current = false
  }

  return { faqs, loading, error, clearCache }
}

export default useFAQs