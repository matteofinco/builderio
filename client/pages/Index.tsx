import { useState } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
  preview: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    label: "Designs",
    path: "/designs",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F61cecd5c6bdd4a18bae9f79b93c48925?width=2000",
    description: "Selected industrial products & functional concepts.",
  },
  {
    label: "About",
    path: "/about",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F0dff9858120643d29f4c40e3092f5439?width=2000",
    description: "Design student & maker based in Italy",
  },
  {
    label: "Curriculum Vitae",
    path: "/cv",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fa24ebec7a28b475aa86b685459ba9248?width=2000",
    description: "Experience, tools, and background.",
  },
];

export default function Index() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // Teniamo traccia dell'ultima immagine attiva per permetterle di sfumare in uscita anche quando hoveredItem torna null
  const [lastActivePreview, setLastActivePreview] = useState<string | null>(null);

  const handleMouseEnter = (label: string, preview: string) => {
    setHoveredItem(label);
    setLastActivePreview(preview);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="bg-white flex flex-col homepage-container" style={{ height: "100vh", width: "100vw", overflow: "hidden", overflowX: "hidden" }}>
      
      <style>{`
        @keyframes ambientGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .homepage-container {
          /* Genera una mappa di luce morbida che si sposta fluidamente in diagonale */
          background: linear-gradient(-45deg, #ffffff, #f9f9fb, #ffffff, #fcfcfc);
          background-size: 400% 400%;
          animation: ambientGlow 12s ease infinite;
        }

        .fade-preview {
          /* Quando si esce dall'hover, l'immagine ci mette 1.2s a scomparire */
          transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1);
          opacity: 0;
        }

        .fade-preview.visible {
          /* Quando l'hover è attivo, appare in 200ms per ammorbidire l'ingresso */
          transition: opacity 0.2s ease-out;
          opacity: 0.05;
        }
      `}</style>

      {/* Background preview - Struttura originale con classi animate */}
      {lastActivePreview && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <img
            src={lastActivePreview}
            alt="Preview"
            className={`w-full h-full object-cover fade-preview ${hoveredItem ? "visible" : ""}`}
          />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 relative z-10">
        {/* Designer info */}
        <div className="text-center mb-24">
          <h1 className="font-serif text-6xl font-light tracking-tight mb-3">
            Matteo Finco
          </h1>