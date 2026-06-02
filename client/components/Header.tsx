import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";

interface HeaderProps {
  showBackToDesigns?: boolean;
}

export default function Header({ showBackToDesigns = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Designs", path: "/designs" },
    { label: "About", path: "/about" },
    { label: "Curriculum Vitae", path: "/cv" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="px-8 py-6 flex items-center justify-between">
        {/* Name on the left - links to homepage */}
        <Link to="/" className="font-serif text-xl font-light tracking-tight">
          Matteo Finco
        </Link>

        {/* Right side: Back to Designs + Hamburger */}
        <div className="flex items-center gap-4">
          {showBackToDesigns && (
            <Link
              to="/designs"
              className="text-sm font-light text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Designs
            </Link>
          )}

          {/* Hamburger menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="border-t border-gray-200 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-base font-light text-gray-800 hover:text-gray-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
