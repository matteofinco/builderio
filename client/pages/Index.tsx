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
          background: linear-gradient(-45deg, #ffffff, #f9f9fb, #ffffff, #fcfcfc);
          background-size: 400% 400%;
          animation: ambientGlow 12s ease infinite;
        }

        .fade-preview {
          transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1);
          opacity: 0;
        }

        .fade-preview.visible {
          transition: opacity 0.2s ease-out;
          opacity: 0.05;
        }
      `}</style>

      {lastActivePreview && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <img
            src={lastActivePreview}
            alt="Preview"
            className={`w-full h-full object-cover fade-preview ${hoveredItem ? "visible" : ""}`}
          />
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 relative z-10">
        <div className="text-center mb-24">
          <h1 className="font-serif text-6xl font-light tracking-tight mb-3">
            Matteo Finco
          </h1>
          <p className="text-lg font-light text-gray-600">
            Product Designer & Maker
          </p>
        </div>

        <nav className="space-y-8 max-w-2xl w-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={() => handleMouseEnter(item.label, item.preview)}
              onMouseLeave={handleMouseLeave}
              className="block group cursor-pointer"
            >
              <div className="relative text-center">
                <h2 className="text-4xl font-serif font-light transition-opacity duration-300 group-hover:opacity-50">
                  {item.label}
                </h2>
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-black transition-all duration-300 ${
                    hoveredItem === item.label ? "w-full" : "w-0"
                  }`}
                />
              </div>
              <p
                className={`text-sm text-gray-600 mt-3 transition-opacity duration-300 text-center ${
                  hoveredItem === item.label ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.description}
              </p>
            </Link>
          ))}
        </nav>
      </div>

      <div className="text-center pb-12 relative z-10">
        <Link
          to="/contact"
          className="text-sm font-light text-gray-600 hover:text-black transition-colors"
        >
          Get in touch
        </Link>
      </div>

    </div>
  );
}