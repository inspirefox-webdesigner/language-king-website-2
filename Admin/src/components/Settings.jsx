import { useState, useEffect } from "react";
import API_BASE_URL from "../config/api";

const Settings = () => {
  const [emailForm, setEmailForm] = useState({
    currentEmail: "",
    newEmail: "",
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState({ email: false, password: false });

  useEffect(() => {
    fetchCurrentCredentials();
  }, []);

  const fetchCurrentCredentials = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/credentials`);
      const data = await response.json();
      if (data.success) {
        setEmailForm((prev) => ({ ...prev, currentEmail: data.data.email }));
      }
    } catch (error) {
      console.error("Error fetching credentials:", error);
    }
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, email: true });
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/auth/update-email`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailForm),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: "success", text: "Email updated successfully!" });
        setEmailForm({ currentEmail: emailForm.newEmail, newEmail: "" });
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Connection error. Please try again.",
      });
    } finally {
      setLoading({ ...loading, email: false });
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, password: true });
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/auth/update-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(passwordForm),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: "success", text: "Password updated successfully!" });
        setPasswordForm({ currentPassword: "", newPassword: "" });
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Connection error. Please try again.",
      });
    } finally {
      setLoading({ ...loading, password: false });
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {message.text && (
          <div
            className={`px-4 py-3 rounded-lg ${
              message.type === "success"
                ? "bg-green-50 border border-green-200 text-green-700"
                : "bg-red-50 border border-red-200 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Email Update Form */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Update Email
          </h3>
          <form onSubmit={handleEmailUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Email
              </label>
              <input
                type="text"
                value={emailForm.currentEmail}
                onChange={(e) =>
                  setEmailForm({ ...emailForm, currentEmail: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Email
              </label>
              <input
                type="text"
                value={emailForm.newEmail}
                onChange={(e) =>
                  setEmailForm({ ...emailForm, newEmail: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter new email"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading.email}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {loading.email ? "Updating..." : "Update Email"}
            </button>
          </form>
        </div>

        {/* Password Update Form */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Update Password
          </h3>
          <form onSubmit={handlePasswordUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <input
                type="password"
                value={passwordForm.currentPassword}
                onChange={(e) =>
                  setPasswordForm({
                    ...passwordForm,
                    currentPassword: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter current password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                value={passwordForm.newPassword}
                onChange={(e) =>
                  setPasswordForm({
                    ...passwordForm,
                    newPassword: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter new password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading.password}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {loading.password ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
