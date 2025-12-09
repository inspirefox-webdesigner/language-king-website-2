import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Textlogo from "../assets/text-logo.svg";
import Logo from "../assets/Logo.svg";
import LogoMenu from "../assets/logo-menu.svg";
import MenuIcon from "../assets/menu.svg"; // Custom menu icon
import CloseIcon from "../assets/close.svg"; // Custom close icon
const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1023) {
        setIsSticky(window.scrollY > 5);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Also handle resize

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      className={`text-white xl:py-[2.116em] py-[32px] z-50 active-header ${isSticky
        ? "lg:sticky lg:top-0 lg:bg-black lg:shadow-md"
        : "lg:bg-noise-pattern relative"
        }`}
    >
      <div className="custom-container mx-auto py-0 px-4 sm:px-[2.116em]">
        <div className="flex items-center justify-between relative">
          {/* Left Logo */}
          <Link to="/" className="xl:w-[40%] sm:w-[35%] lg:flex hidden">
            <img src={Textlogo} alt="Logo" className="w-40" />
          </Link>

          {/* Right Logo */}
          <Link
            to="/"
            className="xl:w-[20%] lg:w-[20%] w-[50%] relative logo-wrapper"
          >
            <img
              src={Logo}
              alt="Logo"
              className="xl:ml-0 ml-[-27%] desktop-logo"
            />
          </Link>

          <div className="xl:w-[40%] sm:w-[35%] flex justify-end items-center">
            {/* Hamburger Menu - Visible on Mobile */}
            <button
              className="lg:hidden flex items-center justify-center p-3 w-[11.71875vw] h-[11.71875vw] menu-icon bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={isOpen ? CloseIcon : MenuIcon}
                alt="Menu Toggle"
                className="w-7 h-7"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-end items-center ">
              <ul className="flex 2xl:gap-[77px] xl:gap-[62px] gap-[32px]">
                <li className="text-center inline-flex items-center">
                  <a
                    href="#courses"
                    className="text-white inline-flex items-center justify-center font-bold 2xl:text-[20px] text-[16px] border-b-2 border-transparent hover:border-white transition-all duration-300"
                  >
                    Courses
                  </a>
                </li>
                <li className="text-center inline-flex items-center">
                  <Link
                    to="/testimonials"
                    className="text-white inline-flex items-center justify-center font-bold 2xl:text-[20px] text-[16px] border-b-2 border-transparent hover:border-white transition-all duration-300"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="text-center inline-flex items-center">
                  <Link
                    to="/contact"
                    className={`px-4 py-2 text-base w-auto text-center focus:outline-none relative inline-flex items-center justify-center font-bold transition-all duration-300 header-btn z-10  min-w-[150px] ${isSticky
                      ? "primary-btn bg-gradient-primary text-black border-none "
                      : "text-white border border-white/25 hover:border-white bg-black"
                      } `}
                  >
                    Get-a Callback
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <nav className="lg:hidden bg-black fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-noise-pattern z-50 sm:py-[48px] py-[32px] px-4 sm:px-[32px]">
            <div className="flex items-center justify-end">
              <button
                className="lg:hidden flex items-center justify-center p-3 w-[11.71875vw] h-[11.71875vw] menu-icon bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer shadow-[0px_4px_0px_#000000]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src={isOpen ? CloseIcon : MenuIcon}
                  alt="CloseIcon"
                  className="w-7 h-7"
                />
              </button>
            </div>

            <ul className="flex flex-col justify-center items-center gap-[34px] relative">
              <div className="menu-ellipse"></div>
              <li className="text-center inline-flex items-center">
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-white inline-flex items-center justify-center font-bold text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300"
                >
                  Courses
                </a>
              </li>
              <li className="text-center inline-flex items-center">
                <Link
                  to="/testimonials"
                  onClick={() => setIsOpen(false)}
                  className="text-white inline-flex items-center justify-center font-bold text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300"
                >
                  Testimonials
                </Link>
              </li>
              <li className="text-center inline-flex items-center">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-white inline-flex items-center justify-center font-medium text-[32px] border-b-2 border-transparent hover:border-white transition-all duration-300 [text-shadow:0px_4px_0px_#000000]"
                >
                  Contact us
                </Link>
              </li>
            </ul>

            <div className="flex flex-col justify-center items-center py-[70px] gap-1">
              <a
                href="mailto:info@languageking.com.au"
                className="text-[#9D9B9B] font-medium text-base"
              >
                info@languageking.com.au
              </a>
              <span className="text-white font-medium text-[12px] [text-shadow:0_0_16px_rgba(255,255,255,0.77)]">
                Copyright @ 2025 Language King
              </span>
            </div>

            <img src={LogoMenu} alt="Logo" className="max-w-[130px] mx-auto" />
          </nav>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
