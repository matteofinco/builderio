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

  return (
    <div className="bg-white flex flex-col homepage-container" style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      
      <style>{`
        @keyframes softBreathing {
          0% { background-color: #ffffff; }
          50% { background-color: #fcfcfd; }
          100% { background-color: #ffffff; }
        }

        .homepage-container {
          animation: softBreathing 8s ease-in-out infinite;
        }

        /* Gestione dello sfondo con le proporzioni corrette */
        .preview-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          /* CRITICO: contain garantisce che l'immagine mantenga le sue proporzioni senza essere deformata o croppata */
          object-fit: contain; 
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1);
          padding: 4rem; /* Un po' di padding evita che il render tocchi i bordi dello schermo */
          box-sizing: border-box;
        }

        .preview-bg.active {
          opacity: 0.05;
          transition: opacity 0.25s ease-out;
        }
      `}</style>

      {/* Background preview con proporzioni bloccate */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        {navItems.map((item) => (
          <img
            key={item.label}
            src={item.preview}
            alt={item.label}
            className={`preview-bg ${hoveredItem === item.label ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 relative z-10">
        {/* Designer info */}
        <div className="text-center mb-24">
          <h1 className="font-serif text-6xl font-light tracking-tight mb-3 text-gray-950">
            Matteo Finco
          </h1>
          <p className="text-lg font-light text-gray-500">
            Product Designer & Maker
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-8 max-w-2xl w-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className="block group cursor-pointer"
            >
              <div className="relative text-center">
                <h2 className="text-4xl font-serif font-light transition-opacity duration-300 group-hover:opacity-40 text-gray-900">
                  {item.label}
                </h2>
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-black transition-all duration-300 ${
                    hoveredItem === item.label ? "w-32" : "w-0"
                  }`}
                />
              </div>
              <p
                className={`text-sm text-gray-500 mt-3 transition-all duration-500 text-center ${
                  hoveredItem === item.label ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-1"
                }`}
              >
                {item.description}
              </p>
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer contact link */}
      <div className="text-center pb-12 relative z-10">
        <Link
          to="/contact"
          className="text-sm font-light text-gray-500 hover:text-black transition-colors"
        >
          Get in touch
        </Link>
      </div>

    </div>
  );
}