import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "./Toast";
import API_BASE_URL from "../config/api"

const VideoLessonForm = ({ lessonId, onBack }) => {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail_img: "",
    video_url: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    if (lessonId) {
      fetchLesson();
    }
  }, [lessonId]);

  const fetchLesson = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/video-lessons/${lessonId}`
      );
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching lesson:", error);
      alert("Error loading lesson data");
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

    if (!formData.title) {
      setToast({
        show: true,
        message: "Please fill in the title field",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      if (lessonId) {
        await axios.put(
          `${API_BASE_URL}/video-lessons/${lessonId}`,
          formData
        );
        setToast({
          show: true,
          message: "Video lesson updated successfully!",
          type: "success",
        });
      } else {
        await axios.post(`${API_BASE_URL}/video-lessons`, formData);
        setToast({
          show: true,
          message: "Video lesson created successfully!",
          type: "success",
        });
      }
      setTimeout(() => onBack(), 1500);
    } catch (error) {
      console.error("Error saving lesson:", error);
      const errorMsg =
        error.response?.data?.details ||
        error.response?.data?.error ||
        "Error saving lesson. Please check backend connection.";
      setToast({ show: true, message: errorMsg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  if (loading && lessonId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            Loading lesson data...
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
            {lessonId ? "Edit Video Lesson" : "Add New Video Lesson"}
          </h2>
          <p className="text-gray-600">
            Fill in the details for the video lesson
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter video title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter description (optional)..."
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
                    handleFileUpload(e.target.files[0], "thumbnail_img")
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={uploading.thumbnail_img}
                />
                {uploading.thumbnail_img && (
                  <p className="text-blue-600 text-sm">Uploading image...</p>
                )}
                {formData.thumbnail_img && (
                  <div className="flex items-center gap-2">
                    <img
                      src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.thumbnail_img}`}
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
              {lessonId ? "Update Lesson" : "Create Lesson"}
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

export default VideoLessonForm;
