import Sidebar from "./Sidebar";

const Layout = ({ children, activeMenu, setActiveMenu }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 ml-12 lg:ml-0">
              {activeMenu === "formDetails" && "Form Details Management"}
              {activeMenu === "pteStudents" && "PTE Students"}
              {activeMenu === "naatiCclStudents" && "NAATI CCL Students"}
              {activeMenu === "pteFame" && "PTE Fame"}
              {activeMenu === "naatiCclResults" && "NAATI CCL Results"}
              {activeMenu === "videoLesson" && "Video Lessons"}
              {!activeMenu && "Dashboard"}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
