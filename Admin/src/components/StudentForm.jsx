import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "../components/Toast";
import API_BASE_URL from "../config/api"

const StudentForm = ({ type, studentId, onBack }) => {
  const isEdit = Boolean(studentId);
  const isPTE = type === "pte";
  // const isNAATI = type === "naati" || type === "naati-ccl";

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    flag: "",
    image: "",
    gradient: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Predefined gradient options
  const gradientOptions = [
    {
      name: "Blue to Purple",
      value: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Orange to Red",
      value: "linear-gradient(90deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      name: "Green to Blue",
      value: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      name: "Pink to Orange",
      value: "linear-gradient(90deg, #fa709a 0%, #fee140 100%)",
    },
    {
      name: "Purple to Pink",
      value: "linear-gradient(90deg, #a8edea 0%, #fed6e3 100%)",
    },
    {
      name: "Yellow to Orange",
      value: "linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)",
    },
    {
      name: "Custom",
      value: "custom",
    },
  ];

  const [selectedGradient, setSelectedGradient] = useState("");
  const [customGradient, setCustomGradient] = useState("");

  useEffect(() => {
    if (isEdit && studentId) {
      fetchStudent();
    } else if (!isEdit) {
      // Reset form for new student
      setFormData({
        name: "",
        country: "",
        flag: "",
        image: "",
        gradient: "",
      });
      setSelectedGradient("");
      setCustomGradient("");
    }
  }, [studentId, isEdit]);

  const fetchStudent = async () => {
    try {
      const endpoint = isPTE ? "pte-students" : "naati-ccl-students";
      const response = await axios.get(
        `${API_BASE_URL}/${endpoint}/${studentId}`
      );
      const student = response.data;
      
      setFormData({
        name: student.name || "",
        country: student.country || "",
        flag: student.flag || "",
        image: student.image || "",
        gradient: student.gradient || "",
      });

      // Handle gradient selection
      if (student.gradient) {
        const matchingGradient = gradientOptions.find(
          (option) => option.value === student.gradient && option.value !== "custom"
        );
        if (matchingGradient) {
          setSelectedGradient(matchingGradient.value);
          setCustomGradient("");
        } else {
          setSelectedGradient("custom");
          setCustomGradient(student.gradient);
        }
      } else {
        setSelectedGradient("");
        setCustomGradient("");
      }
    } catch (error) {
      console.error("Error fetching student:", error);
      setToast({ show: true, message: "Error loading student data", type: "error" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = async (file, field) => {
    if (!file) {
      setToast({ show: true, message: "Please select a file", type: "error" });
      return;
    }

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/upload`,
        formDataUpload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const filename = response.data.filename;
      setFormData((prev) => ({
        ...prev,
        [field]: filename,
      }));
      setToast({
        show: true,
        message: "File uploaded successfully!",
        type: "success",
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      const errorMessage =
        error.response?.data?.error ||
        "Error uploading file. Please try again.";
      setToast({ show: true, message: errorMessage, type: "error" });
    }
  };

  const handleGradientChange = (value) => {
    setSelectedGradient(value);
    if (value !== "custom") {
      setFormData((prev) => ({
        ...prev,
        gradient: value,
      }));
      setCustomGradient("");
    }
  };

  const handleCustomGradientChange = (value) => {
    setCustomGradient(value);
    setFormData((prev) => ({
      ...prev,
      gradient: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isPTE ? "pte-students" : "naati-ccl-students";

      if (isEdit) {
        await axios.put(
          `${API_BASE_URL}/${endpoint}/${studentId}`,
          formData
        );
      } else {
        await axios.post(`${API_BASE_URL}/${endpoint}`, formData);
      }

      setToast({
        show: true,
        message: isEdit
          ? "Student updated successfully!"
          : "Student added successfully!",
        type: "success",
      });

      setTimeout(() => {
        onBack();
      }, 1500);
    } catch (error) {
      console.error("Error saving student:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Error saving student. Please try again.";
      setToast({ show: true, message: errorMessage, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isEdit ? "Edit" : "Add New"} {isPTE ? "PTE" : "NAATI-CCL"}{" "}
              Student
            </h1>
            <p className="text-gray-600">
              {isEdit
                ? "Update student information and details"
                : "Create a new student profile with all required information"}
            </p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Students
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Student Name */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter student's full name"
                />
              </div>

              {/* Country Name */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Country Name *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter country name"
                />
              </div>

              {/* Country Flag */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Country Flag
                </label>
                <div className="space-y-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        handleFileUpload(file, "flag");
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {formData.flag && (
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Current flag:</p>
                      <img
                        src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.flag}`}
                        alt="Flag preview"
                        className="w-16 h-12 object-cover rounded border border-gray-200"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Student Profile Image */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Student Profile Image
                </label>
                <div className="space-y-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        handleFileUpload(file, "image");
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {formData.image && (
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">Current image:</p>
                      <img
                        src={`${API_BASE_URL.replace('/api','')}/uploads/${formData.image}`}
                        alt="Profile preview"
                        className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Theme Gradient */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Theme Gradient
                </label>
                <div className="space-y-4">
                  <select
                    value={selectedGradient}
                    onChange={(e) => handleGradientChange(e.target.value)}
                    className="w-[400px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  >
                    <option value="">Select a gradient theme</option>
                    {gradientOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>

                  {selectedGradient === "custom" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Custom CSS Gradient
                      </label>
                      <input
                        type="text"
                        value={customGradient}
                        onChange={(e) => handleCustomGradientChange(e.target.value)}
                        placeholder="e.g., linear-gradient(90deg, #ff0000 0%, #0000ff 100%)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  )}

                  {formData.gradient && (
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Preview:</p>
                      <div
                        className="w-[400px] h-12 rounded-lg border border-gray-200"
                        style={{ background: formData.gradient }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
              <button
                type="button"
                onClick={onBack}
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`w-full sm:w-auto px-8 py-3 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : isPTE
                    ? "bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    : "bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                }`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    {isEdit ? "Updating..." : "Adding..."}
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isEdit ? "M5 13l4 4L19 7" : "M12 4v16m8-8H4"}
                      />
                    </svg>
                    {isEdit ? "Update Student" : "Add Student"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
