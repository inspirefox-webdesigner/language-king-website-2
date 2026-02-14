import { useState, useEffect } from "react";
import API_BASE_URL from "../config/api";

const CoursePopup = () => {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [popupData, setPopupData] = useState(null);

  // Popup form state
  const [popupForm, setPopupForm] = useState({
    heading: "",
    fields: [
      {
        label: "What's Included (Content)",
        key: "content",
        type: "array",
        values: [""],
      },
      { label: "Validity", key: "validity", type: "text", value: "" },
      {
        label: "Who This Course For?",
        key: "who_this_for",
        type: "text",
        value: "",
      },
      {
        label: "How to Access This Course?",
        key: "how_to_access",
        type: "text",
        value: "",
      },
      {
        label: "Number of Devices",
        key: "number_of_devices",
        type: "array",
        values: [""],
      },
      {
        label: "Class Timing",
        key: "class_timing",
        type: "array",
        values: [""],
      },
      {
        label: "Is Exam Fee Covered?",
        key: "exam_fee_covered",
        type: "text",
        value: "",
      },
    ],
    contact_info: "",
    footer_text: "",
  });

  // Fetch tabs
  useEffect(() => {
    fetchTabs();
  }, []);

  // Fetch cards when tab is selected
  useEffect(() => {
    if (selectedTab) {
      fetchCards(selectedTab.id);
    }
  }, [selectedTab]);

  // Fetch popup when card is selected
  useEffect(() => {
    if (selectedCard) {
      fetchPopup(selectedCard.id);
    }
  }, [selectedCard]);

  const fetchTabs = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/pricing-tabs`);
      const data = await response.json();
      setTabs(data);
    } catch (error) {
      console.error("Error fetching tabs:", error);
    }
  };

  const fetchCards = async (tabId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/pricing-cards/tab/${tabId}`,
      );
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const fetchPopup = async (cardId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/pricing-popups/card/${cardId}`,
      );
      const data = await response.json();

      if (data) {
        setPopupData(data);

        // Convert backend data to dynamic fields format
        const fields = [
          {
            label: "What's Included (Content)",
            key: "content",
            type: "array",
            values: data.content || [""],
          },
          {
            label: "Validity",
            key: "validity",
            type: "text",
            value: data.validity || "",
          },
          {
            label: "Who This Course For?",
            key: "who_this_for",
            type: "text",
            value: data.who_this_for || "",
          },
          {
            label: "How to Access This Course?",
            key: "how_to_access",
            type: "text",
            value: data.how_to_access || "",
          },
          {
            label: "Number of Devices",
            key: "number_of_devices",
            type: "array",
            values: data.number_of_devices || [""],
          },
          {
            label: "Class Timing",
            key: "class_timing",
            type: "array",
            values: data.class_timing || [""],
          },
          {
            label: "Is Exam Fee Covered?",
            key: "exam_fee_covered",
            type: "text",
            value: data.exam_fee_covered || "",
          },
        ];

        setPopupForm({
          heading: data.heading || "",
          fields: fields,
          contact_info: data.contact_info || "",
          footer_text: data.footer_text || "",
        });
      } else {
        // No popup exists, set default with card title
        setPopupData(null);
        setPopupForm({
          heading: selectedCard.title,
          fields: [
            {
              label: "What's Included (Content)",
              key: "content",
              type: "array",
              values: [""],
            },
            { label: "Validity", key: "validity", type: "text", value: "" },
            {
              label: "Who This Course For?",
              key: "who_this_for",
              type: "text",
              value: "",
            },
            {
              label: "How to Access This Course?",
              key: "how_to_access",
              type: "text",
              value: "",
            },
            {
              label: "Number of Devices",
              key: "number_of_devices",
              type: "array",
              values: [""],
            },
            {
              label: "Class Timing",
              key: "class_timing",
              type: "array",
              values: [""],
            },
            {
              label: "Is Exam Fee Covered?",
              key: "exam_fee_covered",
              type: "text",
              value: "",
            },
          ],
          contact_info: "",
          footer_text: "",
        });
      }
      setShowPopupForm(true);
    } catch (error) {
      console.error("Error fetching popup:", error);
    }
  };

  const handleAddField = () => {
    setPopupForm({
      ...popupForm,
      fields: [
        ...popupForm.fields,
        { label: "", key: "", type: "text", value: "" },
      ],
    });
  };

  const handleRemoveField = (index) => {
    const newFields = popupForm.fields.filter((_, i) => i !== index);
    setPopupForm({ ...popupForm, fields: newFields });
  };

  const handleFieldLabelChange = (index, label) => {
    const newFields = [...popupForm.fields];
    newFields[index].label = label;
    newFields[index].key = label.toLowerCase().replace(/[^a-z0-9]+/g, "_");
    setPopupForm({ ...popupForm, fields: newFields });
  };

  const handleFieldTypeChange = (index, type) => {
    const newFields = [...popupForm.fields];
    newFields[index].type = type;
    if (type === "array") {
      newFields[index].values = [""];
      delete newFields[index].value;
    } else {
      newFields[index].value = "";
      delete newFields[index].values;
    }
    setPopupForm({ ...popupForm, fields: newFields });
  };

  const handleFieldValueChange = (fieldIndex, value) => {
    const newFields = [...popupForm.fields];
    newFields[fieldIndex].value = value;
    setPopupForm({ ...popupForm, fields: newFields });
  };

  const handleAddArrayItem = (fieldIndex) => {
    const newFields = [...popupForm.fields];
    newFields[fieldIndex].values.push("");
    setPopupForm({ ...popupForm, fields: newFields });
  };

  const handleArrayItemChange = (fieldIndex, itemIndex, value) => {
    const newFields = [...popupForm.fields];
    newFields[fieldIndex].values[itemIndex] = value;
    setPopupForm({ ...popupForm, fields: newFields });
  };

  const handleRemoveArrayItem = (fieldIndex, itemIndex) => {
    const newFields = [...popupForm.fields];
    newFields[fieldIndex].values = newFields[fieldIndex].values.filter(
      (_, i) => i !== itemIndex,
    );
    setPopupForm({ ...popupForm, fields: newFields });
  };

  const handleSavePopup = async () => {
    if (!selectedCard || !popupForm.heading) {
      alert("Please fill required fields");
      return;
    }

    // Convert dynamic fields back to backend format
    const popupPayload = {
      card_id: selectedCard.id,
      heading: popupForm.heading,
      contact_info: popupForm.contact_info,
      footer_text: popupForm.footer_text,
    };

    // Add each field to payload
    popupForm.fields.forEach((field) => {
      if (field.type === "array") {
        popupPayload[field.key] = field.values.filter((v) => v.trim());
      } else {
        popupPayload[field.key] = field.value;
      }
    });

    try {
      const response = await fetch(`${API_BASE_URL}/pricing-popups`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(popupPayload),
      });

      if (response.ok) {
        alert("Popup saved successfully!");
        setShowPopupForm(false);
        fetchPopup(selectedCard.id);
      }
    } catch (error) {
      console.error("Error saving popup:", error);
    }
  };

  const handleDeletePopup = async () => {
    if (!popupData || !confirm("Delete this popup?")) return;

    try {
      await fetch(`${API_BASE_URL}/pricing-popups/${popupData.id}`, {
        method: "DELETE",
      });
      alert("Popup deleted successfully!");
      setShowPopupForm(false);
      setPopupData(null);
    } catch (error) {
      console.error("Error deleting popup:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Course Popup</h2>

      {/* Tab Selection */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Select Tab:</label>
        <select
          value={selectedTab?.id || ""}
          onChange={(e) => {
            const tab = tabs.find((t) => t.id === parseInt(e.target.value));
            setSelectedTab(tab);
            setSelectedCard(null);
            setShowPopupForm(false);
          }}
          className="border rounded px-3 py-2 w-full max-w-md"
        >
          <option value="">-- Select Tab --</option>
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.tab_name}
            </option>
          ))}
        </select>
      </div>

      {/* Card Selection */}
      {selectedTab && (
        <div className="mb-4">
          <label className="block font-semibold mb-2">Select Card:</label>
          <select
            value={selectedCard?.id || ""}
            onChange={(e) => {
              const card = cards.find((c) => c.id === parseInt(e.target.value));
              setSelectedCard(card);
            }}
            className="border rounded px-3 py-2 w-full max-w-md"
          >
            <option value="">-- Select Card --</option>
            {cards.map((card) => (
              <option key={card.id} value={card.id}>
                {card.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Popup Form */}
      {showPopupForm && (
        <div className="bg-white border rounded-lg p-6 max-w-4xl">
          <h3 className="text-xl font-bold mb-4">
            {popupData ? "Edit Popup" : "Add Popup"} - {selectedCard?.title}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Heading *</label>
              <input
                type="text"
                value={popupForm.heading}
                onChange={(e) =>
                  setPopupForm({ ...popupForm, heading: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Dynamic Fields */}
            {popupForm.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="border p-4 rounded bg-gray-50">
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) =>
                      handleFieldLabelChange(fieldIndex, e.target.value)
                    }
                    placeholder="Field Label"
                    className="flex-1 border rounded px-3 py-2"
                  />
                  <select
                    value={field.type}
                    onChange={(e) =>
                      handleFieldTypeChange(fieldIndex, e.target.value)
                    }
                    className="border rounded px-3 py-2"
                  >
                    <option value="text">Single Text</option>
                    <option value="array">Multiple Items</option>
                  </select>
                  <button
                    onClick={() => handleRemoveField(fieldIndex)}
                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                  >
                    Remove Field
                  </button>
                </div>

                {field.type === "array" ? (
                  <div>
                    {field.values.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) =>
                            handleArrayItemChange(
                              fieldIndex,
                              itemIndex,
                              e.target.value,
                            )
                          }
                          className="flex-1 border rounded px-3 py-2"
                          placeholder="Enter item"
                        />
                        <button
                          onClick={() =>
                            handleRemoveArrayItem(fieldIndex, itemIndex)
                          }
                          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => handleAddArrayItem(fieldIndex)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Add Item
                    </button>
                  </div>
                ) : (
                  <textarea
                    value={field.value}
                    onChange={(e) =>
                      handleFieldValueChange(fieldIndex, e.target.value)
                    }
                    className="w-full border rounded px-3 py-2"
                    rows="2"
                  />
                )}
              </div>
            ))}

            <button
              onClick={handleAddField}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              + Add New Field
            </button>

            <div>
              <label className="block font-semibold mb-1">
                Contact Info (HTML allowed)
              </label>
              <textarea
                value={popupForm.contact_info}
                onChange={(e) =>
                  setPopupForm({ ...popupForm, contact_info: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
                rows="2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Footer Text (HTML allowed)
              </label>
              <textarea
                value={popupForm.footer_text}
                onChange={(e) =>
                  setPopupForm({ ...popupForm, footer_text: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
                rows="2"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={handleSavePopup}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Save Popup
            </button>
            {popupData && (
              <button
                onClick={handleDeletePopup}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              >
                Delete Popup
              </button>
            )}
            <button
              onClick={() => setShowPopupForm(false)}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePopup;
