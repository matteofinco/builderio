import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { X, Menu } from "lucide-react";

interface HeaderProps {
  showBackToDesigns?: boolean;
}

export default function Header({ showBackToDesigns = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Designs", path: "/designs" },
    { label: "About", path: "/about" },
    { label: "Curriculum Vitae", path: "/cv" },
    { label: "Contact", path: "/contact" },
  ];

  // Classi per lo stato attivo dei link
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-light tracking-wide transition-colors duration-300 py-2 block ${
      isActive ? "text-black font-normal" : "text-gray-400 hover:text-black"
    }`;

  return (
    <>
      {/* BARRA DI NAVIGAZIONE PRINCIPALE */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="px-8 py-6 flex items-center justify-between">
          
          {/* Nome a sinistra */}
          <Link to="/" className="font-serif text-xl font-light tracking-tight hover:opacity-75 transition-opacity">
            Matteo Finco
          </Link>

          {/* Lato destro: Back to Designs + Hamburger */}
          <div className="flex items-center gap-6">
            {showBackToDesigns && (
              <Link
                to="/designs"
                className="text-xs uppercase tracking-wider font-light text-gray-400 hover:text-black transition-colors"
              >
                ← Back to Designs
              </Link>
            )}

            {/* Pulsante Menu con micro-rotazione sull'icona */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 hover:opacity-60 transition-all duration-300 relative z-50 focus:outline-none"
              style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <Menu size={22} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* MENU A DISCESA ANIMATO CON TRANSIZIONE FLUIDA */}
        <nav 
          className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 px-8 py-8 flex flex-col gap-2 z-50 transition-all duration-500 pointer-events-none"
          style={{
            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.06)",
            // Usiamo opacity e translate per animare l'ingresso cinematica
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
            pointerEvents: isMenuOpen ? "auto" : "none",
            transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease",
          }}
        >
          {navLinks.map((link, index) => (
            <div
              key={link.path}
              style={{
                // Effetto cascata (stagger): ogni link aspetta un po' più del precedente
                transform: isMenuOpen ? "translateY(0)" : "translateY(8px)",
                opacity: isMenuOpen ? 1 : 0,
                transition: `transform 500ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms, opacity 400ms ease ${index * 40}ms`,
              }}
            >
              <NavLink
                to={link.path}
                className={linkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </div>
          ))}
        </nav>
      </header>

      {/* OVERLAY DI SFONDO ANIMATO */}
      <div 
        className="fixed inset-0 bg-black/5 backdrop-blur-[1px] z-40 transition-opacity duration-500"
        style={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none"
        }}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
}