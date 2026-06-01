import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  preview: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    label: "Designs",
    href: "/portfolio",
    preview: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description: "A selection of completed projects bridging materials and precision.",
  },
  {
    label: "About",
    href: "/about",
    preview: "https://images.unsplash.com/photo-1535221228889-2fc003d647a1?w=800&h=600&fit=crop",
    description: "Design philosophy and experience in industrial and sustainable materials.",
  },
  {
    label: "Curriculum Vitae",
    href: "/cv",
    preview: "https://images.unsplash.com/photo-1507842072343-583f20270319?w=800&h=600&fit=crop",
    description: "Education, skills, and professional background.",
  },
];

export default function Index() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [hoveredItem]);

  const currentHover = navItems.find((item) => item.label === hoveredItem);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Background image container - appears on hover */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {currentHover && (
          <div className="absolute inset-0 bg-black bg-opacity-5">
            <img
              src={currentHover.preview}
              alt={currentHover.label}
              className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 0.08 : 0 }}
            />
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-2xl">
          <h1 className="font-serif text-6xl sm:text-7xl font-normal leading-tight mb-6 text-black">
            Matteo Finco
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-600 font-light tracking-wide">
            Product Designer & Maker
          </p>
        </div>

        {/* Navigation Section */}
        <div className="w-full max-w-2xl space-y-12">
          {navItems.map((item) => (
            <div key={item.label} className="group cursor-pointer">
              <Link
                to={item.href}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className="block"
              >
                <div className="border-b border-black py-4 transition-all duration-300 hover:pb-6">
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black transition-transform duration-300 group-hover:translate-x-2 text-center">
                    {item.label}
                  </h2>
                </div>

                {/* Description appears on hover */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: hoveredItem === item.label ? "100px" : "0",
                  }}
                >
                  <p className="text-sm text-gray-600 mt-3 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-24 text-center text-xs text-gray-400 tracking-widest">
          <p>Scroll to explore</p>
        </div>
      </div>

      {/* Subtle footer */}
      <div className="text-center pb-8 px-6 border-t border-gray-200 text-xs text-gray-400 tracking-wide">
        <p>© 2024 Matteo Finco. All rights reserved.</p>
      </div>
    </div>
  );
}
