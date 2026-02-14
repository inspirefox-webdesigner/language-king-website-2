import { useState, useEffect } from "react";
import axios from "axios";
import HomeTestimonialForm from "./HomeTestimonialForm";
import API_BASE_URL from "../config/api";
import { FILE_BASE_URL } from "../config/api";

const HomeTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/home-testimonials`, {
        timeout: 5000,
      });
      setTestimonials(response.data || []);
    } catch (error) {
      console.error("Error fetching home testimonials:", error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteTestimonial = async (id) => {
    if (!id) {
      alert("Error: Testimonial ID not found");
      return;
    }
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await axios.delete(`${API_BASE_URL}/home-testimonials/${id}`);
        fetchTestimonials();
      } catch (error) {
        console.error("Error deleting testimonial:", error);
        alert("Error deleting testimonial. Please try again.");
      }
    }
  };

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (testimonial.text &&
        testimonial.text.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddNew = () => {
    setShowForm(true);
    setEditingId(null);
  };

  const handleEdit = (id) => {
    setShowForm(true);
    setEditingId(id);
  };

  const handleBack = () => {
    setShowForm(false);
    setEditingId(null);
    fetchTestimonials();
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            Loading Testimonials...
          </p>
        </div>
      </div>
    );

  if (showForm) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mb-6">
          <button
            onClick={handleBack}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              className="w-6 h-6"
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
            Back to Testimonials List
          </button>
        </div>
        <HomeTestimonialForm testimonialId={editingId} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Home Testimonials
            </h1>
            <p className="text-gray-600">Manage testimonials for homepage</p>
          </div>
          <button
            onClick={handleAddNew}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-sm"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Testimonial
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by name or text..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {filteredTestimonials.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {searchTerm ? "No Testimonials Found" : "No Testimonials Found"}
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            {searchTerm
              ? "Try adjusting your search terms."
              : "Add your first testimonial to get started!"}
          </p>
          {!searchTerm && (
            <button
              onClick={handleAddNew}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add First Testimonial
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    No.
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Thumbnail
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Video
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTestimonials.map((testimonial, index) => (
                  <tr
                    key={testimonial.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900 max-w-xs">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        {testimonial.subtitle && (
                          <p className="text-gray-500 text-xs mt-1">
                            {testimonial.subtitle}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {testimonial.thumbnail ? (
                        <div className="w-20 h-14 rounded overflow-hidden border border-gray-200">
                          <img
                            src={`${FILE_BASE_URL}/uploads/${testimonial.thumbnail}`}
                            alt="Thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-14 bg-gray-100 rounded border border-gray-200 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {testimonial.video_url ? (
                        <span className="text-green-600 text-sm">
                          ✓ Uploaded
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm">No video</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(testimonial.id)}
                          className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition-colors duration-200 group"
                          title="Edit Testimonial"
                        >
                          <svg
                            className="w-6 h-6 group-hover:scale-110 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteTestimonial(testimonial.id)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition-colors duration-200 group"
                          title="Delete Testimonial"
                        >
                          <svg
                            className="w-6 h-6 group-hover:scale-110 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {filteredTestimonials.length} of {testimonials.length} testimonials
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeTestimonial;
