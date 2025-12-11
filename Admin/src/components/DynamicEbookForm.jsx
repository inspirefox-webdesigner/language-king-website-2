import { useState, useEffect } from 'react';
import API_BASE_URL from '../config/api';
import Toast from './Toast';

const DynamicEbookForm = ({ pageId, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    page_slug: '',
    page_title: '',
    is_active: true,
    // Banner fields
    banner_bg_image: '',
    new_tips_image: '',
    main_heading: '',
    main_description: '',
    expert_name: '',
    expert_title: '',
    expert_text: '',
    expert_avatar: '',
    cta_button_text: '',
    cta_button_text_mobile: '',
    save_text: '',
    save_text_mobile: '',
    other_books_heading: '',
    other_books_subheading: '',
    book_1_image: '',
    book_2_image: '',
    book_3_image: '',
    book_4_image: '',
    learning_points: [],
    // Book Box fields
    ebook_title: '',
    ebook_subtitle: '',
    ebook_price: '',
    aiportal_title: '',
    aiportal_subtitle: '',
    aiportal_image: '',
    aiportal_features: '',
    aiportal_original_price: '',
    aiportal_price: '',
    prediction_file_title: '',
    prediction_file_subtitle: '',
    prediction_file_price: '',
    // FAQs
    faqs: [],
  });

  const [imageFiles, setImageFiles] = useState({});

  useEffect(() => {
    if (pageId) {
      fetchPageData();
    }
  }, [pageId]);

  const fetchPageData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/dynamic-ebook/${pageId}`);
      const data = await response.json();
      
      // Parse JSON fields
      if (data.learning_points && typeof data.learning_points === 'string') {
        data.learning_points = JSON.parse(data.learning_points);
      }
      if (data.faqs && typeof data.faqs === 'string') {
        data.faqs = JSON.parse(data.faqs);
      }
      
      setFormData(data);
    } catch (error) {
      console.error('Error fetching page:', error);
      showToast('Failed to fetch page data', 'error');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLearningPointChange = (index, value) => {
    const newPoints = [...formData.learning_points];
    newPoints[index] = value;
    setFormData(prev => ({ ...prev, learning_points: newPoints }));
  };

  const addLearningPoint = () => {
    setFormData(prev => ({
      ...prev,
      learning_points: [...prev.learning_points, '']
    }));
  };

  const removeLearningPoint = (index) => {
    setFormData(prev => ({
      ...prev,
      learning_points: prev.learning_points.filter((_, i) => i !== index)
    }));
  };

  const handleFAQChange = (index, field, value) => {
    const newFaqs = [...formData.faqs];
    newFaqs[index][field] = value;
    setFormData(prev => ({ ...prev, faqs: newFaqs }));
  };

  const addFAQ = () => {
    setFormData(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: '', answer: '' }]
    }));
  };

  const removeFAQ = (index) => {
    setFormData(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  const handleImageChange = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formDataUpload,
      });

      const data = await response.json();
      if (data.filename) {
        setFormData(prev => ({ ...prev, [fieldName]: data.filename }));
        showToast('Image uploaded successfully', 'success');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      showToast('Failed to upload image', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = pageId 
        ? `${API_BASE_URL}/dynamic-ebook/${pageId}`
        : `${API_BASE_URL}/dynamic-ebook`;
      
      const method = pageId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast(`Page ${pageId ? 'updated' : 'created'} successfully`, 'success');
        setTimeout(() => onBack(), 1500);
      } else {
        const error = await response.json();
        showToast(error.error || 'Failed to save page', 'error');
      }
    } catch (error) {
      console.error('Error saving page:', error);
      showToast('Failed to save page', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className="p-6">
      {toast.show && <Toast message={toast.message} type={toast.type} />}
      
      <div className="mb-6">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          ← Back to Pages
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {pageId ? 'Edit' : 'Create'} Dynamic E-Book Page
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Page Title *
                </label>
                <input
                  type="text"
                  name="page_title"
                  value={formData.page_title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Page Slug (URL) *
                </label>
                <input
                  type="text"
                  name="page_slug"
                  value={formData.page_slug}
                  onChange={handleInputChange}
                  required
                  disabled={!!pageId}
                  placeholder="e.g., speaking-tips"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Active</span>
              </label>
            </div>
          </div>

          {/* Banner Section */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold mb-4">Banner Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Heading
                </label>
                <input
                  type="text"
                  name="main_heading"
                  value={formData.main_heading}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Description
                </label>
                <textarea
                  name="main_description"
                  value={formData.main_description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expert Name
                  </label>
                  <input
                    type="text"
                    name="expert_name"
                    value={formData.expert_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expert Title
                  </label>
                  <input
                    type="text"
                    name="expert_title"
                    value={formData.expert_title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expert Text
                </label>
                <textarea
                  name="expert_text"
                  value={formData.expert_text}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expert Avatar
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, 'expert_avatar')}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {formData.expert_avatar && <p className="text-xs text-gray-500 mt-1">{formData.expert_avatar}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Tips Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, 'new_tips_image')}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {formData.new_tips_image && <p className="text-xs text-gray-500 mt-1">{formData.new_tips_image}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banner Background Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'banner_bg_image')}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {formData.banner_bg_image && <p className="text-xs text-gray-500 mt-1">{formData.banner_bg_image}</p>}
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Learning Points
                  </label>
                  <button
                    type="button"
                    onClick={addLearningPoint}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                  >
                    + Add Point
                  </button>
                </div>
                {formData.learning_points.map((point, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => handleLearningPointChange(index, e.target.value)}
                      placeholder={`Point ${index + 1}`}
                      className="flex-1 px-3 py-2 border rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeLearningPoint(index)}
                      className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold mb-4">Call to Action Section</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CTA Button Text (Desktop)
                </label>
                <input
                  type="text"
                  name="cta_button_text"
                  value={formData.cta_button_text}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CTA Button Text (Mobile)
                </label>
                <input
                  type="text"
                  name="cta_button_text_mobile"
                  value={formData.cta_button_text_mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Save Text (Desktop)
                </label>
                <input
                  type="text"
                  name="save_text"
                  value={formData.save_text}
                  onChange={handleInputChange}
                  placeholder="e.g., Save $50"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Save Text (Mobile)
                </label>
                <input
                  type="text"
                  name="save_text_mobile"
                  value={formData.save_text_mobile}
                  onChange={handleInputChange}
                  placeholder="e.g., Save $50"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Other Books Section */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold mb-4">Other Books Section</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Other Books Heading
                </label>
                <input
                  type="text"
                  name="other_books_heading"
                  value={formData.other_books_heading}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Other Books Subheading
                </label>
                <input
                  type="text"
                  name="other_books_subheading"
                  value={formData.other_books_subheading}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Book 1 Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'book_1_image')}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {formData.book_1_image && <p className="text-xs text-gray-500 mt-1">{formData.book_1_image}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Book 2 Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'book_2_image')}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {formData.book_2_image && <p className="text-xs text-gray-500 mt-1">{formData.book_2_image}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Book 3 Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'book_3_image')}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {formData.book_3_image && <p className="text-xs text-gray-500 mt-1">{formData.book_3_image}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Book 4 Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'book_4_image')}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {formData.book_4_image && <p className="text-xs text-gray-500 mt-1">{formData.book_4_image}</p>}
              </div>
            </div>
          </div>

          {/* Book Box Section */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold mb-4">Book Box Section</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Book Title
                </label>
                <input
                  type="text"
                  name="ebook_title"
                  value={formData.ebook_title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Book Subtitle
                </label>
                <input
                  type="text"
                  name="ebook_subtitle"
                  value={formData.ebook_subtitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Book Price
                </label>
                <input
                  type="text"
                  name="ebook_price"
                  value={formData.ebook_price}
                  onChange={handleInputChange}
                  placeholder="e.g., $0.99"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Portal Title
                </label>
                <input
                  type="text"
                  name="aiportal_title"
                  value={formData.aiportal_title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Portal Subtitle
                </label>
                <input
                  type="text"
                  name="aiportal_subtitle"
                  value={formData.aiportal_subtitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Portal Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, 'aiportal_image')}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {formData.aiportal_image && <p className="text-xs text-gray-500 mt-1">{formData.aiportal_image}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Portal Features
              </label>
              <textarea
                name="aiportal_features"
                value={formData.aiportal_features}
                onChange={handleInputChange}
                rows="3"
                placeholder="Enter features separated by new lines"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Portal Original Price
                </label>
                <input
                  type="text"
                  name="aiportal_original_price"
                  value={formData.aiportal_original_price}
                  onChange={handleInputChange}
                  placeholder="e.g., $169"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Portal Price
                </label>
                <input
                  type="text"
                  name="aiportal_price"
                  value={formData.aiportal_price}
                  onChange={handleInputChange}
                  placeholder="e.g., $119"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prediction File Title
                </label>
                <input
                  type="text"
                  name="prediction_file_title"
                  value={formData.prediction_file_title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prediction File Subtitle
                </label>
                <input
                  type="text"
                  name="prediction_file_subtitle"
                  value={formData.prediction_file_subtitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prediction File Price
                </label>
                <input
                  type="text"
                  name="prediction_file_price"
                  value={formData.prediction_file_price}
                  onChange={handleInputChange}
                  placeholder="e.g., $20"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="border-b pb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">FAQs</h3>
              <button
                type="button"
                onClick={addFAQ}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm"
              >
                + Add FAQ
              </button>
            </div>
            {formData.faqs.map((faq, index) => (
              <div key={index} className="border p-4 rounded-lg mb-3">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">FAQ {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeFAQ(index)}
                    className="text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => handleFAQChange(index, 'question', e.target.value)}
                  placeholder="Question"
                  className="w-full px-3 py-2 border rounded-lg mb-2"
                />
                <textarea
                  value={faq.answer}
                  onChange={(e) => handleFAQChange(index, 'answer', e.target.value)}
                  placeholder="Answer"
                  rows="2"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Saving...' : pageId ? 'Update Page' : 'Create Page'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicEbookForm;
