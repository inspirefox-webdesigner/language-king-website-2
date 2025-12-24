import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "./Toast";
import API_BASE_URL from "../config/api";

const HomeTestimonialForm = ({ testimonialId, onBack }) => {
  const [formData, setFormData] = useState({
    video_url: "",
    thumbnail: "",
    text: "",
    avatar: "",
    name: "",
    subtitle: "",
    time: "",
    rating: 5,
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    if (testimonialId) {
      fetchTestimonial();
    }
  }, [testimonialId]);

  const fetchTestimonial = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/home-testimonials/${testimonialId}`
      );
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching testimonial:", error);
      alert("Error loading testimonial data");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = async (file, fieldName) => {
    if (!file) return;

    setUploading((prev) => ({ ...prev, [fieldName]: true }));

    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/upload`,
        uploadFormData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setFormData((prev) => ({
        ...prev,
        [fieldName]: response.data.filename,
      }));
    } catch (error) {
      console.error("Upload error:", error);
      setToast({
        show: true,
        message: "Error uploading file. Please try again.",
        type: "error",
      });
    } finally {
      setUploading((prev) => ({ ...prev, [fieldName]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.text) {
      setToast({
        show: true,
        message: "Please fill in name and text fields",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      if (testimonialId) {
        await axios.put(
          `${API_BASE_URL}/home-testimonials/${testimonialId}`,
          formData
        );
        setToast({
          show: true,
          message: "Testimonial updated successfully!",
          type: "success",
        });
      } else {
        await axios.post(`${API_BASE_URL}/home-testimonials`, formData);
        setToast({
          show: true,
          message: "Testimonial created successfully!",
          type: "success",
        });
      }
      setTimeout(() => onBack(), 1500);
    } catch (error) {
      console.error("Error saving testimonial:", error);
      const errorMsg =
        error.response?.data?.details ||
        error.response?.data?.error ||
        "Error saving testimonial. Please check backend connection.";
      setToast({ show: true, message: errorMsg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  if (loading && testimonialId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            Loading testimonial data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {testimonialId ? "Edit Testimonial" : "Add New Testimonial"}
          </h2>
          <p className="text-gray-600">
            Fill in the details for the testimonial
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter name..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subtitle
              </label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g., PTE - 8 Each"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Text <span className="text-red-500">*</span>
              </label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter testimonial text..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Time
              </label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g., 10 Hours ago"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                min="1"
                max="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Thumbnail Image
              </label>
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileUpload(e.target.files[0], "thumbnail")
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={uploading.thumbnail}
                />
                {uploading.thumbnail && (
                  <p className="text-blue-600 text-sm">Uploading image...</p>
                )}
                {formData.thumbnail && (
                  <div className="flex items-center gap-2">
                    <img
                      src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.thumbnail}`}
                      alt="Thumbnail"
                      className="w-24 h-16 object-cover rounded border"
                    />
                    <p className="text-green-600 text-sm">✓ Image uploaded</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Avatar Image
              </label>
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileUpload(e.target.files[0], "avatar")
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={uploading.avatar}
                />
                {uploading.avatar && (
                  <p className="text-blue-600 text-sm">Uploading image...</p>
                )}
                {formData.avatar && (
                  <div className="flex items-center gap-2">
                    <img
                      src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.avatar}`}
                      alt="Avatar"
                      className="w-16 h-16 object-cover rounded-full border"
                    />
                    <p className="text-green-600 text-sm">✓ Avatar uploaded</p>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Video File
              </label>
              <div className="space-y-2">
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) =>
                    handleFileUpload(e.target.files[0], "video_url")
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={uploading.video_url}
                />
                {uploading.video_url && (
                  <p className="text-blue-600 text-sm">Uploading video...</p>
                )}
                {formData.video_url && (
                  <p className="text-green-600 text-sm">
                    ✓ Video uploaded: {formData.video_url}
                  </p>
                )}
              </div>
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
              {testimonialId ? "Update Testimonial" : "Create Testimonial"}
            </button>
          </div>
        </form>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}
    </>
  );
};

export default HomeTestimonialForm;
