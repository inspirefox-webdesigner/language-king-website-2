import { useState, useEffect } from 'react'
import Toast from './Toast'
import API_BASE_URL from "../config/api"

const FAQs = () => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingFaq, setEditingFaq] = useState(null)
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  })
  const [toast, setToast] = useState({ show: false, message: '', type: '' })
  const [isInitialized, setIsInitialized] = useState(false)
  const [isCleaningUp, setIsCleaningUp] = useState(false)

  useEffect(() => {
    if (!isInitialized) {
      fetchFAQs()
      setIsInitialized(true)
    }
  }, [])

  const fetchFAQs = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/faqs?t=${Date.now()}`)
      if (response.ok) {
        const data = await response.json()
        // Remove duplicates based on question text
        const uniqueFaqs = data.filter((faq, index, self) => 
          index === self.findIndex(f => f.question.trim().toLowerCase() === faq.question.trim().toLowerCase())
        )
        setFaqs(uniqueFaqs)
      } else {
        throw new Error('Failed to fetch FAQs')
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error)
      showToast('Error fetching FAQs', 'error')
    } finally {
      setLoading(false)
    }
  }

  const showToast = (message, type) => {
    setToast({ show: true, message, type })
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.question.trim() || !formData.answer.trim()) {
      showToast('Please fill in all fields', 'error')
      return
    }

    // Check for duplicate question (only for new FAQs)
    if (!editingFaq) {
      const isDuplicate = faqs.some(faq => 
        faq.question.trim().toLowerCase() === formData.question.trim().toLowerCase()
      )
      if (isDuplicate) {
        showToast('FAQ with this question already exists', 'error')
        return
      }
    } else {
      // For editing, check if question exists in other FAQs
      const isDuplicate = faqs.some(faq => 
        faq.id !== editingFaq.id && 
        faq.question.trim().toLowerCase() === formData.question.trim().toLowerCase()
      )
      if (isDuplicate) {
        showToast('FAQ with this question already exists', 'error')
        return
      }
    }

    try {
      const url = editingFaq 
        ? `${API_BASE_URL}/faqs/${editingFaq.id}`
        : `${API_BASE_URL}/faqs`
      
      const method = editingFaq ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        showToast(
          editingFaq ? 'FAQ updated successfully!' : 'FAQ created successfully!', 
          'success'
        )
        fetchFAQs()
        resetForm()
      } else {
        const errorData = await response.json()
        showToast(errorData.error || 'Failed to save FAQ', 'error')
      }
    } catch (error) {
      console.error('Error saving FAQ:', error)
      showToast('Error saving FAQ', 'error')
    }
  }

  const handleEdit = (faq) => {
    setEditingFaq(faq)
    setFormData({
      question: faq.question,
      answer: faq.answer
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return

    try {
      const response = await fetch(`${API_BASE_URL}/faqs/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        showToast('FAQ deleted successfully!', 'success')
        fetchFAQs()
      } else {
        throw new Error('Failed to delete FAQ')
      }
    } catch (error) {
      console.error('Error deleting FAQ:', error)
      showToast('Error deleting FAQ', 'error')
    }
  }

  const resetForm = () => {
    setFormData({ question: '', answer: '' })
    setEditingFaq(null)
    setShowForm(false)
  }

  const handleCleanupDuplicates = async () => {
    if (!confirm('Are you sure you want to remove all duplicate FAQs? This action cannot be undone.')) {
      return
    }

    setIsCleaningUp(true)
    try {
      const response = await fetch(`${API_BASE_URL}/faqs/cleanup`, {
        method: 'POST'
      })
      
      const result = await response.json()
      
      if (response.ok) {
        showToast(result.message, 'success')
        fetchFAQs() // Refresh the list
      } else {
        showToast(result.error || 'Failed to cleanup duplicates', 'error')
      }
    } catch (error) {
      console.error('Error cleaning up duplicates:', error)
      showToast('Error cleaning up duplicates', 'error')
    } finally {
      setIsCleaningUp(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">FAQs Management</h1>
        <div className="flex gap-3">
          <button
            onClick={handleCleanupDuplicates}
            disabled={isCleaningUp}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
          >
            {isCleaningUp ? 'Cleaning...' : 'Remove Duplicates'}
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New FAQ
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Question</label>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg resize-vertical"
                  rows="3"
                  placeholder="Enter FAQ question"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Answer</label>
                <textarea
                  name="answer"
                  value={formData.answer}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg resize-vertical"
                  rows="5"
                  placeholder="Enter FAQ answer"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                  {editingFaq ? 'Update FAQ' : 'Create FAQ'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FAQs Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Question
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Answer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <tr key={faq.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                    {faq.question}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500 max-w-md truncate">
                    {faq.answer}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(faq.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <button
                    onClick={() => handleEdit(faq)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(faq.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {faqs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No FAQs found. Add your first FAQ to get started.
          </div>
        )}
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: '' })}
        />
      )}
    </div>
  )
}

export default FAQs