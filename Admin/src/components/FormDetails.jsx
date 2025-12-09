import { useState, useEffect } from "react";
import API_BASE_URL from "../config/api"

const FormDetails = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [contacts, setContacts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [bookTrails, setBookTrails] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { id: "contact", name: "Contact Details" },
    { id: "course", name: "Course Details" },
    { id: "booktrail", name: "BookTrail Details" },
  ];

  const fetchData = async () => {
    try {
      const [contactRes, courseRes, booktrailRes] = await Promise.all([
        fetch(`${API_BASE_URL}/forms/contact`),
        fetch(`${API_BASE_URL}/forms/course`),
        fetch(`${API_BASE_URL}/forms/booktrail`),
      ]);

      const [contactData, courseData, booktrailData] = await Promise.all([
        contactRes.json(),
        courseRes.json(),
        booktrailRes.json(),
      ]);

      if (contactData.success) setContacts(contactData.data);
      if (courseData.success) setCourses(courseData.data);
      if (booktrailData.success) setBookTrails(booktrailData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (type, id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await fetch(
          `${API_BASE_URL}/forms/${type}/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        if (data.success) {
          if (type === "contact")
            setContacts(contacts.filter((item) => item.id !== id));
          if (type === "course")
            setCourses(courses.filter((item) => item.id !== id));
          if (type === "booktrail")
            setBookTrails(bookTrails.filter((item) => item.id !== id));
        }
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTable = (data, type, colorClass) => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    if (data.length === 0) {
      return (
        <div className="p-8 text-center">
          <p className="text-gray-500">No submissions found.</p>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${colorClass}`}
                  >
                    {item.course}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.form_source}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(item.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => deleteItem(type, item.id)}
                    className="text-red-600 hover:text-red-900 transition-colors duration-200"
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
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "contact":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Contact Form Submissions
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Total: {contacts.length} submissions
                </p>
              </div>
              {renderTable(contacts, "contact", "bg-blue-100 text-blue-800")}
            </div>
          </div>
        );
      case "course":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Course Form Submissions
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Total: {courses.length} submissions
                </p>
              </div>
              {renderTable(courses, "course", "bg-green-100 text-green-800")}
            </div>
          </div>
        );
      case "booktrail":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  BookTrail Form Submissions
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Total: {bookTrails.length} submissions
                </p>
              </div>
              {renderTable(
                bookTrails,
                "booktrail",
                "bg-purple-100 text-purple-800"
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-96">{renderTabContent()}</div>
    </div>
  );
};

export default FormDetails;
