import { useState, useEffect } from "react";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [testimonialsOpen, setTestimonialsOpen] = useState(false);
  const [freeEbookOpen, setFreeEbookOpen] = useState(false);

  const menuItems = [
    { id: "formDetails", name: "Form Details" },
    { id: "pteStudents", name: "PTE Students" },
    { id: "naatiCclStudents", name: "NAATI-CCL Students" },
    { id: "videoLesson", name: "Video Lesson" },
  ];

  const testimonialsSubItems = [
    { id: "pteFame", name: "PTE Fame" },
    { id: "naatiCclResults", name: "NAATI CCL Results" },
    { id: "testimonialMainSection", name: "Main Section" },
  ];

  const freeEbookSubItems = [
    { id: "faqs", name: "FAQs" },
    { id: "freeEbook", name: "Book-Banner" },
    { id: "bookBox", name: "Book-Box" },
    { id: "dynamicEbookPages", name: "Dynamic Pages" },
  ];

  // Auto-open submenus if one of their items is active
  useEffect(() => {
    if (testimonialsSubItems.some(item => activeMenu === item.id)) {
      setTestimonialsOpen(true);
    }
    if (freeEbookSubItems.some(item => activeMenu === item.id)) {
      setFreeEbookOpen(true);
    }
  }, [activeMenu]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold">Language King</h1>
        </div>

        {/* Menu Items */}
        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id);
                setIsOpen(false); // Close mobile menu
              }}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                activeMenu === item.id
                  ? "bg-gray-700 border-r-4 border-blue-500"
                  : ""
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
          
          {/* Testimonials Menu with Submenu */}
          <div>
            <button
              onClick={() => setTestimonialsOpen(!testimonialsOpen)}
              className={`w-full flex items-center justify-between px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                testimonialsSubItems.some(item => activeMenu === item.id)
                  ? "bg-gray-700 border-r-4 border-blue-500"
                  : ""
              }`}
            >
              <span>Testimonials</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  testimonialsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Submenu Items */}
            {testimonialsOpen && (
              <div className="bg-gray-900">
                {testimonialsSubItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center px-12 py-2 text-left hover:bg-gray-700 transition-colors text-sm ${
                      activeMenu === item.id
                        ? "bg-gray-700 text-blue-400"
                        : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* FREE-E-BOOK Menu with Submenu */}
          <div>
            <button
              onClick={() => setFreeEbookOpen(!freeEbookOpen)}
              className={`w-full flex items-center justify-between px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                freeEbookSubItems.some(item => activeMenu === item.id)
                  ? "bg-gray-700 border-r-4 border-blue-500"
                  : ""
              }`}
            >
              <span>FREE-E-BOOK</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  freeEbookOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Submenu Items */}
            {freeEbookOpen && (
              <div className="bg-gray-900">
                {freeEbookSubItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center px-12 py-2 text-left hover:bg-gray-700 transition-colors text-sm ${
                      activeMenu === item.id
                        ? "bg-gray-700 text-blue-400"
                        : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
