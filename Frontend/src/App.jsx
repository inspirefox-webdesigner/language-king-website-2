import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeHeader from "./components/Homeheader";
import MainHeader from "./components/MainHeader";
import Footer from "./components/footer";
import Home from "./pages/index";
import PteMasterClass from "./pages/PTE-MasterClass";
import NAATICCL from "./pages/NAATI-CCL";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import FreeEBook from "./pages/Free-E-book";
import DynamicEbookPage from "./pages/DynamicEbookPage";
import Home2 from "./pages/thankyou";
import FreeEBooksubmit from "./pages/e-book-submit";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfUse from './pages/Terms-of-Use';
import Faq from "./pages/faq";
import Transparent_Pricing from "./pages/Transparent_Pricing";
import Transparent_Pricing2 from "./pages/Transparent_Pricing(MobileApi)";
import PaymentSuccessMessage from "./pages/PaymentSuccessMessage";
import PaymentCancelMessage from "./pages/PaymentCancelMessage";

function App() {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/language-king-website-2/" ||
    location.pathname === "/language-king-website-new/";

  return (
    <>
      {isHomePage ? <HomeHeader /> : <MainHeader />}

      <main className="relative h-full">
        <div className="bg-noise-pattern absolute inset-0"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pte-masterclass" element={<PteMasterClass />} />
          <Route path="/naaticcl" element={<NAATICCL />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-e-book" element={<FreeEBook />} />
          <Route path="/ebook/:slug" element={<DynamicEbookPage />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/ebook-submit" element={<FreeEBooksubmit />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Terms-of-Use" element={<TermsOfUse />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/transparent-pricing" element={<Transparent_Pricing />} />
          <Route path="/transparent-pricing-mobile" element={<Transparent_Pricing2 />} />
          <Route path="/payment-success" element={<PaymentSuccessMessage />} />
          <Route path="/payment-cancel" element={<PaymentCancelMessage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
