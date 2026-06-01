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
    preview: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "A carefully curated selection of products and spaces.",
  },
  {
    label: "About",
    path: "/about",
    preview: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description: "Philosophy, background, and approach to design.",
  },
  {
    label: "Curriculum Vitae",
    path: "/cv",
    preview: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    description: "Education, experience, and professional achievements.",
  },
];

export default function Index() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
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

    </div>
  );
}
