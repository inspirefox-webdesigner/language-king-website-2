import { useState, useEffect } from "react";
import Toast from "./Toast";
import API_BASE_URL from "../config/api";
import { FILE_BASE_URL } from "../config/api";

const TrustedSection = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    heading: "",
    avatar_text: "",
    star_rating: "4.92",
    star_text: "",
    bottom_heading: "",
    bottom_text: "",
  });
  const [avatarFiles, setAvatarFiles] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    fetchTrustedSection();
  }, []);

  const fetchTrustedSection = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/trusted-section`);
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setFormData({
            heading: data.heading || "",
            avatar_text: data.avatar_text || "",
            star_rating: data.star_rating || "4.92",
            star_text: data.star_text || "",
            bottom_heading: data.bottom_heading || "",
            bottom_text: data.bottom_text || "",
          });
          setExistingImages(data.avatar_images || []);
        }
      }
    } catch (error) {
      console.error("Error fetching trusted section:", error);
      showToast("Error fetching trusted section", "error");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("heading", formData.heading);
      formDataToSend.append("avatar_text", formData.avatar_text);
      formDataToSend.append("star_rating", formData.star_rating);
      formDataToSend.append("star_text", formData.star_text);
      formDataToSend.append("bottom_heading", formData.bottom_heading);
      formDataToSend.append("bottom_text", formData.bottom_text);
      formDataToSend.append("existing_images", JSON.stringify(existingImages));

      avatarFiles.forEach((file) => {
        formDataToSend.append("avatars", file);
      });

      const response = await fetch(`${API_BASE_URL}/trusted-section`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        showToast("Trusted section saved successfully!", "success");
        fetchTrustedSection();
        setAvatarFiles([]);
      } else {
        showToast("Failed to save trusted section", "error");
      }
    } catch (error) {
      console.error("Error saving trusted section:", error);
      showToast("Error saving trusted section", "error");
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAvatarFiles([...avatarFiles, ...files]);
  };

  const removeExistingImage = (index) => {
    setExistingImages(existingImages.filter((_, i) => i !== index));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Trusted Section Management</h1>
        <p className="text-gray-600 mt-2">
          Manage the trusted section on the pricing page
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Main Heading</label>
          <input
            type="text"
            value={formData.heading}
            onChange={(e) =>
              setFormData({ ...formData, heading: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
            placeholder="Trusted by students in their TR, Nursing and PR Journey"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Avatar Images
          </label>
          
          {existingImages.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Existing Images:</p>
              <div className="flex flex-wrap gap-2">
                {existingImages.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      // src={`${API_BASE_URL}${img}`}
                      src={`${FILE_BASE_URL}${img}`}
                      alt={`Avatar ${index + 1}`}
                      className="w-16 h-16 rounded-full object-cover border-2"
                    />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {avatarFiles.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">New Images to Upload:</p>
              <div className="flex flex-wrap gap-2">
                {avatarFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`New ${index + 1}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                    />
                    <button
                      type="button"
                      onClick={() => setAvatarFiles(avatarFiles.filter((_, i) => i !== index))}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => document.getElementById('avatar-upload').click()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-medium"
          >
            + Add New Image
          </button>
          <input
            id="avatar-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="text-sm text-gray-500 mt-2">
            Upload student avatar images (max 10 total)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Avatar Text</label>
          <input
            type="text"
            value={formData.avatar_text}
            onChange={(e) =>
              setFormData({ ...formData, avatar_text: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
            placeholder="10,000+ students and counting..."
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Star Rating
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="5"
              value={formData.star_rating}
              onChange={(e) =>
                setFormData({ ...formData, star_rating: e.target.value })
              }
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Star Text</label>
            <input
              type="text"
              value={formData.star_text}
              onChange={(e) =>
                setFormData({ ...formData, star_text: e.target.value })
              }
              className="w-full p-3 border rounded-lg"
              placeholder="4.92/5 student satisfaction"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Bottom Heading (Quote)
          </label>
          <input
            type="text"
            value={formData.bottom_heading}
            onChange={(e) =>
              setFormData({ ...formData, bottom_heading: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
            placeholder="I cleared my PTE in just 15 days under their guidance"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Bottom Text (Author)
          </label>
          <input
            type="text"
            value={formData.bottom_text}
            onChange={(e) =>
              setFormData({ ...formData, bottom_text: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
            placeholder="— Nursing applicant, VIC"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-medium"
          >
            Save Trusted Section
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

export default TrustedSection;
