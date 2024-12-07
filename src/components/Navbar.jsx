import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white p-6 fixed w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">Ali Elsharqawy</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {[
              { label: "Home", link: "home" },
              { label: "Skills", link: "skills" },
              { label: "Projects", link: "projects" },
              { label: "About", link: "experience" }, // Updated to point to Experience & Education
              { label: "Contact", link: "contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.link}`}
                  className="text-lg font-medium hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 bg-gray-800 text-center p-4 rounded-md space-y-4">
            {[
              { label: "Home", link: "home" },
              { label: "Skills", link: "skills" },
              { label: "Projects", link: "projects" },
              { label: "About", link: "experience" }, // Updated to point to Experience & Education
              { label: "Contact", link: "contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.link}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/201095400370"
        target="_blank"
        rel="noopener noreferrer"
        className="z-50 fixed bottom-6 right-6 bg-green-500 text-white p-2 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={50} className="text-2xl" />
      </a>
    </>
  );
}

export default Navbar;
