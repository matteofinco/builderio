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
    path: "/portfolio",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F17ef57a71cc44e878c29aeb37ddc3cce?width=2000",
    description: "Selected industrial products & functional concepts.",
  },
  {
    label: "About",
    path: "/about",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F1c5a2d8f3e4b4e0a8f5c3b2d1e0f9a8b?width=2000",
    description: "Design student & maker based in Italy",
  },
  {
    label: "Curriculum Vitae",
    path: "/cv",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c?width=2000",
    description: "Experience, tools, and background.",
  },
];

export default function Index() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      {/* Background preview - positioned absolutely */}
      {hoveredItem && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <img
            src={navItems.find((item) => item.label === hoveredItem)?.preview}
            alt={hoveredItem}
            className="w-full h-full object-cover opacity-5 transition-opacity duration-500"
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
          <p className="text-lg font-light text-gray-600">
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

      {/* Footer contact link */}
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
