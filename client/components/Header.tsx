import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

  // Classi comuni per i link della navigazione
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-light transition-colors duration-200 ${
      isActive
        ? "text-black font-normal border-b border-black pb-1 md:pb-0 md:border-none md:text-black"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        
        {/* Nome a sinistra (Logo) */}
        <Link 
          to="/" 
          className="font-serif text-xl font-light tracking-tight hover:opacity-70 transition-opacity"
        >
          Matteo Finco
        </Link>

        {/* Navigazione Desktop (Nascosta su mobile, visibile da md in su) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkStyles}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Lato destro: Bottone Indietro + Hamburger (solo mobile) */}
        <div className="flex items-center gap-4">
          {showBackToDesigns && (
            <Link
              to="/designs"
              className="text-xs uppercase tracking-wider font-light text-gray-400 hover:text-black transition-colors"
            >
              ← Back to Designs
            </Link>
          )}

          {/* Hamburger Menu - Visibile solo su mobile (hidden md:block) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-black transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown (Apertura fluida opzionale con classi CSS) */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 py-6 flex flex-col gap-5 shadow-sm absolute w-full left-0 animate-fade-in">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}