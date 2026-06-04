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
    `text-lg font-light tracking-wide transition-colors duration-200 py-2 block ${
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

          {/* Lato destro: Back to Designs + Hamburger sempre visibile */}
          <div className="flex items-center gap-6">
            {showBackToDesigns && (
              <Link
                to="/designs"
                className="text-xs uppercase tracking-wider font-light text-gray-400 hover:text-black transition-colors"
              >
                ← Back to Designs
              </Link>
            )}

            {/* Pulsante Menu - Rimane sempre visibile (rimosso hidden md) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 hover:opacity-60 transition-opacity relative z-50"
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

        {/* MENU A DISCESA CON EFFETTO DI RILIEVO E OMBRA */}
        {isMenuOpen && (
          <nav 
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 px-8 py-8 flex flex-col gap-2 z-50"
            style={{
              // Ombra morbida e profonda studiata per staccare nettamente sulla pagina
              boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 15px 25px -10px rgba(0, 0, 0, 0.04)"
            }}
          >
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

      {/* OVERLAY DI SFONDO (Oscura delicatamente la pagina sottostante quando il menu è aperto) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/5 backdrop-blur-[1px] z-40 transition-opacity duration-300 pointer-events-auto"
          onClick={() => setIsMenuOpen(false)} // Chiude il menu se clicchi fuori
        />
      )}
    </>
  );
}