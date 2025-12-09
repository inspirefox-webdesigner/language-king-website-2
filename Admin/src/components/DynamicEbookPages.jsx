import { useState, useEffect } from 'react';
import API_BASE_URL, { FRONTEND_URL } from '../config/api';
import Toast from './Toast';

const DynamicEbookPages = ({ onEdit }) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/dynamic-ebook`);
      const data = await response.json();
      setPages(data);
    } catch (error) {
      console.error('Error fetching pages:', error);
      showToast('Failed to fetch pages', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this page?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/dynamic-ebook/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        showToast('Page deleted successfully', 'success');
        fetchPages();
      } else {
        showToast('Failed to delete page', 'error');
      }
    } catch (error) {
      console.error('Error deleting page:', error);
      showToast('Failed to delete page', 'error');
    }
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const copyLink = (slug) => {
    const link = `${FRONTEND_URL}/ebook/${slug}`;
    navigator.clipboard.writeText(link);
    showToast('Link copied to clipboard!', 'success');
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      {toast.show && <Toast message={toast.message} type={toast.type} />}
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dynamic E-Book Pages</h2>
        <button
          onClick={() => onEdit(null)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Create New Page
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Page Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Slug
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Created
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pages.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No pages found. Create your first dynamic e-book page!
                </td>
              </tr>
            ) : (
              pages.map((page) => (
                <tr key={page.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {page.page_title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{page.page_slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        page.is_active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {page.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(page.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => copyLink(page.page_slug)}
                      className="text-green-600 hover:text-green-900 mr-3"
                      title="Copy Link"
                    >
                      🔗
                    </button>
                    <button
                      onClick={() => onEdit(page.id)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(page.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicEbookPages;
