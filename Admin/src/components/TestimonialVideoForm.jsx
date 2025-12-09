import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "./Toast";
import API_BASE_URL from "../config/api"

const TestimonialVideoForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    video_url: "",
    video_placeholder_img: "",
    heading: "",
    description: "",
    student_name: "",
    student_tag: "",
    student_avatar: ""
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    fetchTestimonialVideo();
  }, []);

  const fetchTestimonialVideo = async () => {
    try {
      setLoading(true);
      const [videoRes, heroRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/testimonial-video`),
        axios.get(`${API_BASE_URL}/testimonial-hero-section`)
      ]);
      
      setFormData({
        video_url: videoRes.data?.video_url || '',
        video_placeholder_img: videoRes.data?.video_placeholder_img || '',
        heading: heroRes.data?.heading || '',
        description: heroRes.data?.description || '',
        student_name: heroRes.data?.student_name || '',
        student_tag: heroRes.data?.student_tag || '',
        student_avatar: heroRes.data?.student_avatar || ''
      });
    } catch (error) {
      console.error("Error fetching testimonial data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file, fieldName) => {
    if (!file) return;

    setUploading(prev => ({ ...prev, [fieldName]: true }));
    
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    try {
      const response = await axios.post(`${API_BASE_URL}/upload`, uploadFormData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      setFormData(prev => ({
        ...prev,
        [fieldName]: response.data.filename
      }));
    } catch (error) {
      console.error('Upload error:', error);
      setToast({ show: true, message: 'Error uploading file. Please try again.', type: 'error' });
    } finally {
      setUploading(prev => ({ ...prev, [fieldName]: false }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.video_url || !formData.heading) {
      setToast({ show: true, message: "Please fill required fields", type: "error" });
      return;
    }

    setLoading(true);

    try {
      await Promise.all([
        axios.post(`${API_BASE_URL}/testimonial-video`, {
          video_url: formData.video_url,
          video_placeholder_img: formData.video_placeholder_img
        }),
        axios.post(`${API_BASE_URL}/testimonial-hero-section`, {
          heading: formData.heading,
          description: formData.description,
          student_name: formData.student_name,
          student_tag: formData.student_tag,
          student_avatar: formData.student_avatar
        })
      ]);
      
      setToast({ show: true, message: "Testimonial section updated successfully!", type: "success" });
      setTimeout(() => {
        fetchTestimonialVideo();
      }, 1500);
    } catch (error) {
      console.error("Error saving testimonial:", error);
      setToast({ show: true, message: "Error saving testimonial section. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Testimonial Main Video</h2>
        <p className="text-gray-600">Upload the main video for "Why Students Love Learning With Us" section</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Heading <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Why Students Love Learning With Us"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="When I started my journey..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Student Name</label>
            <input
              type="text"
              name="student_name"
              value={formData.student_name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="NATALIA"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Student Tag</label>
            <input
              type="text"
              name="student_tag"
              value={formData.student_tag}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="PTE & NAATI CCL"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Student Avatar Image</label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e.target.files[0], 'student_avatar')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              disabled={uploading.student_avatar}
            />
            {uploading.student_avatar && <p className="text-blue-600 text-sm">Uploading image...</p>}
            {formData.student_avatar && (
              <div className="flex items-center gap-2">
                <img
                  src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.student_avatar}`}
                  alt="Student avatar"
                  className="w-12 h-12 object-cover rounded-full border"
                />
                <p className="text-green-600 text-sm">✓ Avatar uploaded</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Video File <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleFileUpload(e.target.files[0], 'video_url')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              disabled={uploading.video_url}
            />
            {uploading.video_url && <p className="text-blue-600 text-sm">Uploading video...</p>}
            {formData.video_url && <p className="text-green-600 text-sm">✓ Video uploaded: {formData.video_url}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Video Placeholder Image</label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e.target.files[0], 'video_placeholder_img')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              disabled={uploading.video_placeholder_img}
            />
            {uploading.video_placeholder_img && <p className="text-blue-600 text-sm">Uploading image...</p>}
            {formData.video_placeholder_img && (
              <div className="flex items-center gap-2">
                <img
                  src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.video_placeholder_img}`}
                  alt="Video thumbnail"
                  className="w-16 h-12 object-cover rounded border"
                />
                <p className="text-green-600 text-sm">✓ Thumbnail uploaded</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            )}
            Update Video
          </button>
        </div>
      </form>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}
    </div>
  );
};

export default TestimonialVideoForm;