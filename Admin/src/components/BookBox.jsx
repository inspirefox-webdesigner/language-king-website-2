import { useState, useEffect } from "react";
import Toast from "./Toast";
import API_BASE_URL from "../config/api"

const BookBox = () => {
  const [formData, setFormData] = useState({
    ebook_title: "",
    ebook_subtitle: "",
    ebook_price: "",
    aiportal_title: "",
    aiportal_subtitle: "",
    aiportal_price: "",
    aiportal_original_price: "",
    aiportal_features: "",
    aiportal_image: "",
    prediction_file_title: "",
    prediction_file_subtitle: "",
    prediction_file_price: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    fetchBookBoxData();
  }, []);

  const fetchBookBoxData = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/book-box?t=${Date.now()}`
      );
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        console.error("Failed to fetch book box data");
        setToast({
          show: true,
          message: "Failed to load book box data",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error fetching book box data:", error);
      setToast({
        show: true,
        message: "Error loading book box data",
        type: "error",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      
      // Add all text fields
      Object.keys(formData).forEach(key => {
        if (key !== 'aiportal_image') {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Add image file if selected
      if (formData.aiportal_image instanceof File) {
        formDataToSend.append('aiportal_image', formData.aiportal_image);
      }

      const response = await fetch(`${API_BASE_URL}/book-box`, {
        method: "PUT",
        body: formDataToSend,
      });

      if (response.ok) {
        setToast({
          show: true,
          message:
            "Book-Box updated successfully! Changes will appear on the frontend shortly.",
          type: "success",
        });

        // Refresh the form data to show latest updates
        setTimeout(() => {
          fetchBookBoxData();
        }, 1000);
      } else {
        const errorData = await response.json();
        setToast({
          show: true,
          message: errorData.message || "Error updating book box",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error updating book box:", error);
      setToast({
        show: true,
        message: "Network error. Please check your connection and try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Book-Box Management
          </h2>
          <p className="text-gray-600 mt-2">
            Manage the E-Book and AI Portal box content for Free E-book page
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* E-Book Box Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              E-Book Box Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Book Title
                </label>
                <input
                  type="text"
                  name="ebook_title"
                  value={formData.ebook_title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="E-Book Only"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Get 7-days Free Trial"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="$0.99"
                />
              </div>
            </div>
          </div>

          {/* AI Portal Box Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 ">
              AI Portal Box Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Portal Title
                </label>
                <input
                  type="text"
                  name="aiportal_title"
                  value={formData.aiportal_title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="6 Month AI Portal"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Prediction File + 5 Books"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Portal Price
                </label>
                <input
                  type="text"
                  name="aiportal_price"
                  value={formData.aiportal_price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="$99"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AI Portal Original Price
                </label>
                <input
                  type="text"
                  name="aiportal_original_price"
                  value={formData.aiportal_original_price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="$129"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Portal Features
              </label>
              <textarea
                name="aiportal_features"
                value={formData.aiportal_features}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="- 10 Full Mock Tests&#10;- 20 Sectional Tests&#10;- 5000+ Exam Questions&#10;- 5 Books Included"
              />
              <p className="text-sm text-gray-500 mt-1">
                Each feature should be on a new line starting with "-"
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Portal Image
              </label>
              <input
                type="file"
                name="aiportal_image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFormData(prev => ({
                      ...prev,
                      aiportal_image: file
                    }));
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload image for AI Portal box (Rectangle image)
              </p>
            </div>
          </div>

          {/* Prediction File Section */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 ">
              Prediction File Content
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prediction File Title
                </label>
                <input
                  type="text"
                  name="prediction_file_title"
                  value={formData.prediction_file_title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Prediction File"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Get monthly updates for 6 months"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="$9"
                />
              </div>
            </div>  
          </div>

          {/* Submit Button */}
          <div className="border-t pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Book-Box"}
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
    </div>
  );
};

export default BookBox;
