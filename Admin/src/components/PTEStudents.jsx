import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api"

const PTEStudents = ({ onAddNew, onEdit }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/pte-students`
      );
      console.log("PTE Students data:", response.data);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching PTE students:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    console.log("Delete student called with ID:", id);
    if (!id) {
      console.error("Student ID is undefined or null");
      alert("Error: Student ID not found");
      return;
    }
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`${API_BASE_URL}/pte-students/${id}`);
        fetchStudents();
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Error deleting student. Please try again.");
      }
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            Loading PTE Students...
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              PTE Students
            </h1>
            <p className="text-gray-600">
              Manage your PTE student records and achievements
            </p>
          </div>
          <button
            onClick={onAddNew}
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
            Add New Student
          </button>
        </div>
      </div>

      {/* Search Bar */}
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
            placeholder="Search students by name or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Students Content */}
      {filteredStudents.length === 0 ? (
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
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {searchTerm ? "No Students Found" : "No PTE Students Found"}
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            {searchTerm
              ? "Try adjusting your search terms."
              : "Add your first PTE student to get started!"}
          </p>
          {!searchTerm && (
            <button
              onClick={onAddNew}
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
              Add First Student
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
                    Student
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Country
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Flag
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Profile
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Theme
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student, index) => (
                  <tr
                    key={student._id || student.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        {student.image ? (
                          <img
                            src={`${API_BASE_URL.replace('/api','')}/uploads/${student.image}`}
                            alt={student.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
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
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-900">
                            {student.name}
                          </p>
                          <p className="text-sm text-gray-500">PTE Student</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900 font-medium">
                      {student.country}
                    </td>
                    <td className="py-4 px-6">
                      {student.flag ? (
                        <img
                          src={`${API_BASE_URL.replace('/api','')}/uploads/${student.flag}`}
                          alt="Flag"
                          className="w-8 h-6 object-cover rounded border border-gray-200 shadow-sm"
                        />
                      ) : (
                        <div className="w-8 h-6 bg-gray-100 rounded border border-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-400">🏳️</span>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {student.image ? (
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                          <img
                            src={`${API_BASE_URL.replace('/api','')}/uploads/${student.image}`}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
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
                      <div
                        className="w-16 h-8 rounded-md border border-gray-200 shadow-sm"
                        style={{
                          background:
                            student.gradient ||
                            "linear-gradient(90deg, #e5e7eb, #9ca3af)",
                        }}
                        title="Student theme gradient"
                      />
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            console.log(
                              "Edit button clicked for student:",
                              student
                            );
                            onEdit(student._id || student.id);
                          }}
                          className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition-colors duration-200 group"
                          title="Edit Student"
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
                          onClick={() => {
                            console.log(
                              "Delete button clicked for student:",
                              student
                            );
                            deleteStudent(student._id || student.id);
                          }}
                          className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition-colors duration-200 group"
                          title="Delete Student"
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

          {/* Table Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {filteredStudents.length} of {students.length} students
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PTEStudents;
