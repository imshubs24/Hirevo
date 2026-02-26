import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-sm border-b border-gray-100"
        : "bg-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            src='/hirevo-logo.webp'
            alt="Hirevo Logo"
            className="h-16 w-auto hover:cursor-pointer"
            width={40}
            height={40}
            loading="eager"
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-indigo-600 transition hover:cursor-pointer"
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("how-it-works")}
              className="hover:text-indigo-600 transition hover:cursor-pointer"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollToSection("recruiters")}
              className="hover:text-indigo-600 transition hover:cursor-pointer"
            >
              For Recruiters
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition hover:cursor-pointer"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm hover:cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-6 py-4 space-y-4 text-sm font-medium text-gray-700">

            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left hover:text-indigo-600"
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left hover:text-indigo-600"
            >
              How It Works
            </button>

            <button
              onClick={() => scrollToSection("recruiters")}
              className="block w-full text-left hover:text-indigo-600"
            >
              For Recruiters
            </button>

            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <Link
                to="/login"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;