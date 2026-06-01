import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const projects: ProjectItem[] = [
  {
    id: "marble-table",
    title: "Marble Dining Table",
    description: "Sculptural form in white Carrara marble",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop",
    category: "Product Design",
  },
  {
    id: "minimalist-chair",
    title: "Minimalist Chair",
    description: "Essential seating with refined proportions",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
    category: "Furniture",
  },
  {
    id: "loft-apartment",
    title: "Loft Apartment Renovation",
    description: "Industrial space transformed with editorial clarity",
    imageUrl: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1400&h=900&fit=crop",
    category: "Interior Design",
  },
  {
    id: "lamp-collection",
    title: "Lighting Collection",
    description: "Modular brass and glass elements",
    imageUrl: "https://images.unsplash.com/photo-1565636192335-14f94f75b13f?w=900&h=700&fit=crop",
    category: "Product Design",
  },
  {
    id: "gallery-space",
    title: "Gallery Space Design",
    description: "White cube reimagined with architectural precision",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=900&fit=crop",
    category: "Interior Design",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-8 px-8">
        <Link to="/" className="text-sm font-light text-gray-600 hover:text-black transition-colors">
          ← Back
        </Link>
      </header>

      {/* Grid */}
      <main className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {/* First row - Large left, small right */}
            <div className="grid grid-cols-3 gap-8 items-start">
              <div
                className="col-span-2 group cursor-pointer"
                onMouseEnter={() => setHoveredId(projects[0].id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/project/${projects[0].id}`}>
                  <div className="overflow-hidden bg-gray-100 aspect-[4/3]">
                    <img
                      src={projects[0].imageUrl}
                      alt={projects[0].title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredId === projects[0].id
                          ? "grayscale-0 scale-100"
                          : "grayscale scale-100"
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-6 transition-opacity duration-500 ${
                      hoveredId === projects[0].id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-2xl font-serif font-light mb-2">
                      {projects[0].title}
                    </h3>
                    <p className="text-sm text-gray-600">{projects[0].description}</p>
                  </div>
                </Link>
              </div>

              <div
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(projects[1].id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/project/${projects[1].id}`}>
                  <div className="overflow-hidden bg-gray-100 aspect-square">
                    <img
                      src={projects[1].imageUrl}
                      alt={projects[1].title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredId === projects[1].id
                          ? "grayscale-0 scale-100"
                          : "grayscale scale-100"
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-4 transition-opacity duration-500 ${
                      hoveredId === projects[1].id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-lg font-serif font-light mb-1">
                      {projects[1].title}
                    </h3>
                    <p className="text-xs text-gray-600">{projects[1].description}</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Second row - Full width */}
            <div
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(projects[2].id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/project/${projects[2].id}`}>
                <div className="overflow-hidden bg-gray-100 aspect-[16/6]">
                  <img
                    src={projects[2].imageUrl}
                    alt={projects[2].title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === projects[2].id
                        ? "grayscale-0 scale-100"
                        : "grayscale scale-100"
                    }`}
                  />
                </div>
                <div
                  className={`mt-6 transition-opacity duration-500 max-w-md ${
                    hoveredId === projects[2].id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-3xl font-serif font-light mb-2">
                    {projects[2].title}
                  </h3>
                  <p className="text-sm text-gray-600">{projects[2].description}</p>
                </div>
              </Link>
            </div>

            {/* Third row - Small left, large right */}
            <div className="grid grid-cols-3 gap-8 items-start">
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(projects[3].id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/project/${projects[3].id}`}>
                  <div className="overflow-hidden bg-gray-100 aspect-square">
                    <img
                      src={projects[3].imageUrl}
                      alt={projects[3].title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredId === projects[3].id
                          ? "grayscale-0 scale-100"
                          : "grayscale scale-100"
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-4 transition-opacity duration-500 ${
                      hoveredId === projects[3].id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-lg font-serif font-light mb-1">
                      {projects[3].title}
                    </h3>
                    <p className="text-xs text-gray-600">{projects[3].description}</p>
                  </div>
                </Link>
              </div>

              <div
                className="col-span-2 group cursor-pointer"
                onMouseEnter={() => setHoveredId(projects[4].id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/project/${projects[4].id}`}>
                  <div className="overflow-hidden bg-gray-100 aspect-[4/3]">
                    <img
                      src={projects[4].imageUrl}
                      alt={projects[4].title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredId === projects[4].id
                          ? "grayscale-0 scale-100"
                          : "grayscale scale-100"
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-6 transition-opacity duration-500 ${
                      hoveredId === projects[4].id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-2xl font-serif font-light mb-2">
                      {projects[4].title}
                    </h3>
                    <p className="text-sm text-gray-600">{projects[4].description}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
