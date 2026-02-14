import { useState, useEffect } from "react";
import API_BASE_URL from "../config/api";

const PricingCourses = () => {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [cards, setCards] = useState([]);
  const [showAddTab, setShowAddTab] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [newTabName, setNewTabName] = useState("");

  // Card form state
  const [cardForm, setCardForm] = useState({
    title: "",
    price: "",
    badge: "",
    points: [""],
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

  const fetchTabs = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/pricing-tabs`);
      const data = await response.json();
      setTabs(data);
      if (data.length > 0 && !selectedTab) {
        setSelectedTab(data[0]);
      }
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

  const handleAddTab = async () => {
    if (!newTabName.trim()) return;

    try {
      const response = await fetch(`${API_BASE_URL}/pricing-tabs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tab_name: newTabName,
          display_order: tabs.length,
        }),
      });

      if (response.ok) {
        setNewTabName("");
        setShowAddTab(false);
        fetchTabs();
      }
    } catch (error) {
      console.error("Error adding tab:", error);
    }
  };

  const handleDeleteTab = async (tabId) => {
    if (!confirm("Delete this tab and all its cards?")) return;

    try {
      await fetch(`${API_BASE_URL}/pricing-tabs/${tabId}`, {
        method: "DELETE",
      });
      fetchTabs();
      setSelectedTab(null);
      setCards([]);
    } catch (error) {
      console.error("Error deleting tab:", error);
    }
  };

  const handleAddPoint = () => {
    setCardForm({ ...cardForm, points: [...cardForm.points, ""] });
  };

  const handlePointChange = (index, value) => {
    const newPoints = [...cardForm.points];
    newPoints[index] = value;
    setCardForm({ ...cardForm, points: newPoints });
  };

  const handleRemovePoint = (index) => {
    const newPoints = cardForm.points.filter((_, i) => i !== index);
    setCardForm({ ...cardForm, points: newPoints });
  };

  const handleSaveCard = async () => {
    if (!selectedTab || !cardForm.title || !cardForm.price) {
      alert("Please fill required fields");
      return;
    }

    const filteredPoints = cardForm.points.filter((p) => p.trim());

    const cardData = {
      tab_id: selectedTab.id,
      title: cardForm.title,
      price: parseFloat(cardForm.price),
      badge: cardForm.badge || null,
      points: filteredPoints,
      display_order: cards.length,
    };

    try {
      const url = editingCard
        ? `${API_BASE_URL}/pricing-cards/${editingCard.id}`
        : `${API_BASE_URL}/pricing-cards`;

      const method = editingCard ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        setShowCardForm(false);
        setEditingCard(null);
        setCardForm({ title: "", price: "", badge: "", points: [""] });
        fetchCards(selectedTab.id);
      }
    } catch (error) {
      console.error("Error saving card:", error);
    }
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setCardForm({
      title: card.title,
      price: card.price.toString(),
      badge: card.badge || "",
      points: card.points,
    });
    setShowCardForm(true);
  };

  const handleDeleteCard = async (cardId) => {
    if (!confirm("Delete this card?")) return;

    try {
      await fetch(`${API_BASE_URL}/pricing-cards/${cardId}`, {
        method: "DELETE",
      });
      fetchCards(selectedTab.id);
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Pricing Courses</h2>

      {/* Tab Selection */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <label className="font-semibold">Select Tab:</label>
          <select
            value={selectedTab?.id || ""}
            onChange={(e) => {
              const tab = tabs.find((t) => t.id === parseInt(e.target.value));
              setSelectedTab(tab);
            }}
            className="border rounded px-3 py-2"
          >
            <option value="">-- Select Tab --</option>
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.tab_name}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowAddTab(!showAddTab)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New Tab
          </button>

          {selectedTab && (
            <button
              onClick={() => handleDeleteTab(selectedTab.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete Tab
            </button>
          )}
        </div>

        {/* Add Tab Form */}
        {showAddTab && (
          <div className="bg-gray-100 p-4 rounded mb-4">
            <input
              type="text"
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
              placeholder="Enter tab name"
              className="border rounded px-3 py-2 mr-2"
            />
            <button
              onClick={handleAddTab}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Tab
            </button>
            <button
              onClick={() => setShowAddTab(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Add Card Button */}
      {selectedTab && (
        <button
          onClick={() => {
            setShowCardForm(true);
            setEditingCard(null);
            setCardForm({ title: "", price: "", badge: "", points: [""] });
          }}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
        >
          Add Card
        </button>
      )}

      {/* Card Form Modal */}
      {showCardForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              {editingCard ? "Edit Card" : "Add New Card"}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Title *</label>
                <input
                  type="text"
                  value={cardForm.title}
                  onChange={(e) =>
                    setCardForm({ ...cardForm, title: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Price *</label>
                <input
                  type="number"
                  value={cardForm.price}
                  onChange={(e) =>
                    setCardForm({ ...cardForm, price: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Badge (Optional)
                </label>
                <input
                  type="text"
                  value={cardForm.badge}
                  onChange={(e) =>
                    setCardForm({ ...cardForm, badge: e.target.value })
                  }
                  placeholder="e.g., BEST VALUE"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Points *</label>
                {cardForm.points.map((point, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => handlePointChange(index, e.target.value)}
                      className="flex-1 border rounded px-3 py-2"
                      placeholder="Enter point"
                    />
                    <button
                      onClick={() => handleRemovePoint(index)}
                      className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddPoint}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Point
                </button>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={handleSaveCard}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              >
                Save Card
              </button>
              <button
                onClick={() => {
                  setShowCardForm(false);
                  setEditingCard(null);
                }}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cards List */}
      {selectedTab && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border rounded-lg p-4 bg-white shadow"
            >
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">
                ${Math.floor(card.price)}
              </p>
              {card.badge && (
                <span className="bg-yellow-200 text-xs px-2 py-1 rounded">
                  {card.badge}
                </span>
              )}
              <ul className="list-disc list-inside mt-3 text-sm">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEditCard(card)}
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCard(card.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PricingCourses;
