import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Settings from "./components/Settings";
import FormDetails from "./components/FormDetails";
import PTEStudents from "./components/PTEStudents";
import NAATICCLStudents from "./components/NAATICCLStudents";
import StudentForm from "./components/StudentForm";
import PTEFame from "./components/PTEFame";
import PTEFameForm from "./components/PTEFameForm";
import NAATICCLResults from "./components/NAATICCLResults";
import NAATICCLResultsForm from "./components/NAATICCLResultsForm";
import FreeEbookBanner from "./components/FreeEbookBanner";
import FAQs from "./components/FAQs";
import BookBox from "./components/BookBox";
import VideoLesson from "./components/VideoLesson";
import TestimonialVideoForm from "./components/TestimonialVideoForm";
import DynamicEbookPages from "./components/DynamicEbookPages";
import DynamicEbookForm from "./components/DynamicEbookForm";
import HomeTestimonial from "./components/HomeTestimonial";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState("formDetails");
  const [currentView, setCurrentView] = useState({
    type: "list",
    studentType: null,
    studentId: null,
  });

  // Reset form states when menu changes
  useEffect(() => {
    setCurrentView({ type: "list", studentType: null, studentId: null });
  }, [activeMenu]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    // Handle student form views
    if (currentView.type === "form") {
      return (
        <StudentForm
          type={currentView.studentType}
          studentId={currentView.studentId}
          onBack={() => {
            setCurrentView({
              type: "list",
              studentType: null,
              studentId: null,
            });
            setActiveMenu(
              currentView.studentType === "pte"
                ? "pteStudents"
                : "naatiCclStudents"
            );
          }}
        />
      );
    }

    // Handle PTE Fame form views
    if (currentView.type === "pte-fame-form") {
      return (
        <PTEFameForm
          entryId={currentView.entryId}
          onBack={() => {
            setCurrentView({
              type: "list",
              studentType: null,
              studentId: null,
            });
            setActiveMenu("pteFame");
          }}
        />
      );
    }

    // Handle NAATI CCL Results form views
    if (currentView.type === "naati-ccl-results-form") {
      return (
        <NAATICCLResultsForm
          entryId={currentView.entryId}
          onBack={() => {
            setCurrentView({
              type: "list",
              studentType: null,
              studentId: null,
            });
            setActiveMenu("naatiCclResults");
          }}
        />
      );
    }

    // Handle Dynamic Ebook form views
    if (currentView.type === "dynamic-ebook-form") {
      return (
        <DynamicEbookForm
          pageId={currentView.pageId}
          onBack={() => {
            setCurrentView({
              type: "list",
              studentType: null,
              studentId: null,
            });
            setActiveMenu("dynamicEbookPages");
          }}
        />
      );
    }

    switch (activeMenu) {
      case "formDetails":
        return <FormDetails />;
      case "pteStudents":
        return (
          <PTEStudents
            onAddNew={() =>
              setCurrentView({
                type: "form",
                studentType: "pte",
                studentId: null,
              })
            }
            onEdit={(id) =>
              setCurrentView({
                type: "form",
                studentType: "pte",
                studentId: id,
              })
            }
          />
        );
      case "naatiCclStudents":
        return (
          <NAATICCLStudents
            onAddNew={() =>
              setCurrentView({
                type: "form",
                studentType: "naati-ccl",
                studentId: null,
              })
            }
            onEdit={(id) =>
              setCurrentView({
                type: "form",
                studentType: "naati-ccl",
                studentId: id,
              })
            }
          />
        );
      case "pteFame":
        return (
          <PTEFame
            onAddNew={() =>
              setCurrentView({ type: "pte-fame-form", entryId: null })
            }
            onEdit={(id) =>
              setCurrentView({ type: "pte-fame-form", entryId: id })
            }
          />
        );
      case "naatiCclResults":
        return (
          <NAATICCLResults
            onAddNew={() =>
              setCurrentView({ type: "naati-ccl-results-form", entryId: null })
            }
            onEdit={(id) =>
              setCurrentView({ type: "naati-ccl-results-form", entryId: id })
            }
          />
        );
      case "freeEbook":
        return <FreeEbookBanner />;
      case "faqs":
        return <FAQs />;
      case "bookBox":
        return <BookBox />;
      case "videoLesson":
        return <VideoLesson />;
      case "homeTestimonial":
        return <HomeTestimonial />;
      case "testimonialMainSection":
        return (
          <TestimonialVideoForm
            onBack={() => setActiveMenu("testimonialMainSection")}
          />
        );
      case "dynamicEbookPages":
        return (
          <DynamicEbookPages
            onEdit={(id) =>
              setCurrentView({ type: "dynamic-ebook-form", pageId: id })
            }
          />
        );
      case "settings":
        return <Settings />;
      default:
        return (
          <div className="p-6">
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Welcome to Admin Panel
              </h3>
              <p className="text-gray-600">
                Select a menu item from the sidebar to get started.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
      {renderContent()}
    </Layout>
  );
}

export default App;










// new code
// import {
//   useState,
//   useEffect,
//   useCallback,
//   useMemo,
//   lazy,
//   Suspense,
// } from "react";

// import Layout from "./components/Layout";
// import Login from "./components/Login";

// // 🔹 Lazy loaded components
// const Settings = lazy(() => import("./components/Settings"));
// const FormDetails = lazy(() => import("./components/FormDetails"));
// const PTEStudents = lazy(() => import("./components/PTEStudents"));
// const NAATICCLStudents = lazy(() => import("./components/NAATICCLStudents"));
// const StudentForm = lazy(() => import("./components/StudentForm"));
// const PTEFame = lazy(() => import("./components/PTEFame"));
// const PTEFameForm = lazy(() => import("./components/PTEFameForm"));
// const NAATICCLResults = lazy(() => import("./components/NAATICCLResults"));
// const NAATICCLResultsForm = lazy(() =>
//   import("./components/NAATICCLResultsForm")
// );
// const FreeEbookBanner = lazy(() => import("./components/FreeEbookBanner"));
// const FAQs = lazy(() => import("./components/FAQs"));
// const BookBox = lazy(() => import("./components/BookBox"));
// const VideoLesson = lazy(() => import("./components/VideoLesson"));
// const TestimonialVideoForm = lazy(() =>
//   import("./components/TestimonialVideoForm")
// );
// const DynamicEbookPages = lazy(() =>
//   import("./components/DynamicEbookPages")
// );
// const DynamicEbookForm = lazy(() => import("./components/DynamicEbookForm"));

// function App() {
//   // 🔹 Login state (lazy init)
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     () => localStorage.getItem("adminLoggedIn") === "true"
//   );

//   const [activeMenu, setActiveMenu] = useState("formDetails");

//   const [currentView, setCurrentView] = useState({
//     type: "list",
//     studentType: null,
//     studentId: null,
//   });

//   // 🔹 Reset view only when needed
//   useEffect(() => {
//     if (currentView.type !== "list") {
//       setCurrentView({ type: "list", studentType: null, studentId: null });
//     }
//   }, [activeMenu]);

//   // 🔹 Stable handlers
//   const resetToList = useCallback(() => {
//     setCurrentView({ type: "list", studentType: null, studentId: null });
//   }, []);

//   const renderContent = useMemo(() => {
//     // 🔸 Student Form
//     if (currentView.type === "form") {
//       return (
//         <StudentForm
//           type={currentView.studentType}
//           studentId={currentView.studentId}
//           onBack={() => {
//             resetToList();
//             setActiveMenu(
//               currentView.studentType === "pte"
//                 ? "pteStudents"
//                 : "naatiCclStudents"
//             );
//           }}
//         />
//       );
//     }

//     // 🔸 PTE Fame Form
//     if (currentView.type === "pte-fame-form") {
//       return (
//         <PTEFameForm
//           entryId={currentView.entryId}
//           onBack={() => {
//             resetToList();
//             setActiveMenu("pteFame");
//           }}
//         />
//       );
//     }

//     // 🔸 NAATI CCL Results Form
//     if (currentView.type === "naati-ccl-results-form") {
//       return (
//         <NAATICCLResultsForm
//           entryId={currentView.entryId}
//           onBack={() => {
//             resetToList();
//             setActiveMenu("naatiCclResults");
//           }}
//         />
//       );
//     }

//     // 🔸 Dynamic Ebook Form
//     if (currentView.type === "dynamic-ebook-form") {
//       return (
//         <DynamicEbookForm
//           pageId={currentView.pageId}
//           onBack={() => {
//             resetToList();
//             setActiveMenu("dynamicEbookPages");
//           }}
//         />
//       );
//     }

//     switch (activeMenu) {
//       case "formDetails":
//         return <FormDetails />;

//       case "pteStudents":
//         return (
//           <PTEStudents
//             onAddNew={() =>
//               setCurrentView({
//                 type: "form",
//                 studentType: "pte",
//                 studentId: null,
//               })
//             }
//             onEdit={(id) =>
//               setCurrentView({
//                 type: "form",
//                 studentType: "pte",
//                 studentId: id,
//               })
//             }
//           />
//         );

//       case "naatiCclStudents":
//         return (
//           <NAATICCLStudents
//             onAddNew={() =>
//               setCurrentView({
//                 type: "form",
//                 studentType: "naati-ccl",
//                 studentId: null,
//               })
//             }
//             onEdit={(id) =>
//               setCurrentView({
//                 type: "form",
//                 studentType: "naati-ccl",
//                 studentId: id,
//               })
//             }
//           />
//         );

//       case "pteFame":
//         return (
//           <PTEFame
//             onAddNew={() =>
//               setCurrentView({ type: "pte-fame-form", entryId: null })
//             }
//             onEdit={(id) =>
//               setCurrentView({ type: "pte-fame-form", entryId: id })
//             }
//           />
//         );

//       case "naatiCclResults":
//         return (
//           <NAATICCLResults
//             onAddNew={() =>
//               setCurrentView({
//                 type: "naati-ccl-results-form",
//                 entryId: null,
//               })
//             }
//             onEdit={(id) =>
//               setCurrentView({
//                 type: "naati-ccl-results-form",
//                 entryId: id,
//               })
//             }
//           />
//         );

//       case "freeEbook":
//         return <FreeEbookBanner />;

//       case "faqs":
//         return <FAQs />;

//       case "bookBox":
//         return <BookBox />;

//       case "videoLesson":
//         return <VideoLesson />;

//       case "testimonialMainSection":
//         return <TestimonialVideoForm />;

//       case "dynamicEbookPages":
//         return (
//           <DynamicEbookPages
//             onEdit={(id) =>
//               setCurrentView({ type: "dynamic-ebook-form", pageId: id })
//             }
//           />
//         );

//       case "settings":
//         return <Settings />;

//       default:
//         return (
//           <div className="p-6">
//             <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 Welcome to Admin Panel
//               </h3>
//               <p className="text-gray-600">
//                 Select a menu item from the sidebar to get started.
//               </p>
//             </div>
//           </div>
//         );
//     }
//   }, [activeMenu, currentView, resetToList]);

//   // 🔹 Login screen
//   if (!isLoggedIn) {
//     return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
//   }

//   return (
//     <Layout activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
//       <Suspense fallback={<div className="p-6">Loading...</div>}>
//         {renderContent}
//       </Suspense>
//     </Layout>
//   );
// }

// export default App;
