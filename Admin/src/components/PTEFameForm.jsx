import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "./Toast";
import API_BASE_URL from "../config/api"

const PTEFameForm = ({ entryId, onBack }) => {
  const [formData, setFormData] = useState({
    title: "",
    student_name: "",
    band: "",
    video_url: "",
    video_placeholder_img: "",
    student_img: "",
    flag_img: "",
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    if (entryId) {
      fetchEntry();
    }
  }, [entryId]);

  const fetchEntry = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/pte-fame/${entryId}`
      );
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching entry:", error);
      alert("Error loading entry data");
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

    if (!formData.title || !formData.student_name || !formData.band) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      if (entryId) {
        await axios.put(
          `${API_BASE_URL}/pte-fame/${entryId}`,
          formData
        );
        setToast({
          show: true,
          message: "Entry updated successfully!",
          type: "success",
        });
      } else {
        await axios.post(`${API_BASE_URL}/pte-fame`, formData);
        setToast({
          show: true,
          message: "Entry created successfully!",
          type: "success",
        });
      }
      setTimeout(() => onBack(), 1500);
    } catch (error) {
      console.error("Error saving entry:", error);
      setToast({
        show: true,
        message: "Error saving entry. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading && entryId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            Loading entry data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {entryId ? "Edit PTE Fame Entry" : "Add New PTE Fame Entry"}
          </h2>
          <p className="text-gray-600">
            Fill in the details for the PTE Hall of Fame entry
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <textarea
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Student Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="student_name"
                value={formData.student_name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter student name..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Band Score <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="band"
                value={formData.band}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g., 8 band, 9 overall..."
                required
              />
            </div>



            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Student Image
              </label>
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileUpload(e.target.files[0], "student_img")
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={uploading.student_img}
                />
                {uploading.student_img && (
                  <p className="text-blue-600 text-sm">Uploading image...</p>
                )}
                {formData.student_img && (
                  <div className="flex items-center gap-2">
                    <img
                      src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.student_img}`}
                      alt="Student"
                      className="w-12 h-12 object-cover rounded-full border"
                    />
                    <p className="text-green-600 text-sm">✓ Image uploaded</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Flag Image
              </label>
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleFileUpload(e.target.files[0], "flag_img")
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={uploading.flag_img}
                />
                {uploading.flag_img && (
                  <p className="text-blue-600 text-sm">Uploading image...</p>
                )}
                {formData.flag_img && (
                  <div className="flex items-center gap-2">
                    <img
                      src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.flag_img}`}
                      alt="Flag"
                      className="w-8 h-6 object-cover rounded border"
                    />
                    <p className="text-green-600 text-sm">✓ Flag uploaded</p>
                  </div>
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
              {entryId ? "Update Entry" : "Create Entry"}
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

export default PTEFameForm;
