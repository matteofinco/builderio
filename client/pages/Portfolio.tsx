import { useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  imageUrl: string;
  colorImageUrl: string;
  order: number;
}

const projects: Project[] = [
  {
    id: "mycelium-chair",
    title: "Mycelium Chair",
    description: "Biomaterial seating integrating organic growth with precision engineering.",
    year: "2023",
    category: "Furniture Design",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&h=800&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&h=800&fit=crop",
    order: 1,
  },
  {
    id: "polymer-wall",
    title: "Recycled Polymer Wall System",
    description: "Interior partition system using upcycled polymers and modular CNC components.",
    year: "2023",
    category: "Interior Design",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&h=800&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&h=800&fit=crop",
    order: 2,
  },
  {
    id: "bio-vessel",
    title: "Bio-Vessel Collection",
    description: "Series of vessels combining biodegradable materials with industrial precision.",
    year: "2022",
    category: "Product Design",
    imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1000&h=800&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1000&h=800&fit=crop",
    order: 3,
  },
  {
    id: "modular-interior",
    title: "Modular Interior Installation",
    description: "Spatial design exploring the intersection of organic forms and geometric precision.",
    year: "2022",
    category: "Installation",
    imageUrl: "https://images.unsplash.com/photo-1535221228889-2fc003d647a1?w=1000&h=800&fit=crop&q=80",
    colorImageUrl: "https://images.unsplash.com/photo-1535221228889-2fc003d647a1?w=1000&h=800&fit=crop",
    order: 4,
  },
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 py-6 px-6 sm:px-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-black transition-colors tracking-wide"
          >
            ← Back
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">Portfolio</h1>
          <div className="w-12" />
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 sm:px-12 py-12 sm:py-20">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id}>
              {/* Grid layout - asymmetrical */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Main image - spans 2 columns on larger screens */}
                <div
                  className="md:col-span-2 relative overflow-hidden bg-gray-100 aspect-video md:aspect-square cursor-pointer group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Grayscale image */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProject === project.id ? "grayscale-0 opacity-100" : "grayscale opacity-100"
                    }`}
                  />

                  {/* Color overlay on hover */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={project.colorImageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover animate-fadeIn"
                      />
                    </div>
                  )}
                </div>

                {/* Text content - right column */}
                <div className="flex flex-col justify-start">
                  {/* Project info always visible */}
                  <div
                    className={`transition-all duration-500 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black mb-4">
                      {project.title}
                    </h2>

                    {/* Description - fades in on hover */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        hoveredProject === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-gray-700 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-2 text-xs text-gray-500 tracking-wide">
                      <p>
                        <span className="font-semibold">Year:</span> {project.year}
                      </p>
                      <p>
                        <span className="font-semibold">Category:</span> {project.category}
                      </p>
                    </div>

                    {/* View project link */}
                    <Link
                      to={`/project/${project.id}`}
                      className={`inline-block mt-8 text-xs tracking-widest text-black border-b border-black pb-1 transition-all duration-300 hover:translate-x-1 ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Spacing between projects */}
              {index < projects.length - 1 && <div className="border-b border-gray-200 pt-12" />}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-12 px-6 sm:px-12 mt-12">
        <div className="text-center text-xs text-gray-400 tracking-wide">
          <p>© 2024 Elena Marrone. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
