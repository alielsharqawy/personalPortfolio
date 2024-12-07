import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-6 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">Ali Elsharqawy</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
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
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
