import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  path: string;
}

const projects: Project[] = [
  {
    id: "archivia",
    title: "Archivia",
    subtitle: "Pen holder",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F058f28df5b3a4bdebc4975d0cebef9db",
    path: "/archivia",
  },
  {
    id: "pizzamente",
    title: "Pizza Machine",
    subtitle: "Academic Workshop",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fe186b1b1b013459f94a05a22f6ea48e5",
    path: "/pizzamente",
  },
  {
    id: "nando",
    title: "Nando",
    subtitle: "Hyperplastic cutlery handle",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fa9e74a667878418daf9addb3fd5afc14",
    path: "/nando",
  },
  {
    id: "ttable",
    title: "T-Table",
    subtitle: "Interactive feeding friendly table",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ff232edcad30b47609d5e4f480c51e3e3",
    path: "/ttable",
  },
  {
    id: "wafflemaker",
    title: "Waffle Maker",
    subtitle: "Academic product basic design course",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F45f1f86b218c433c861c1d083909abfe",
    path: "/wafflemaker",
  },
  {
    id: "inlays",
    title: "Inlays",
    subtitle: "Academic inlays laboratory",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3d6dcda5704dadb2dbcd15072c729c",
    path: "/inlays",
  },
  {
    id: "snake",
    title: "Snake",
    subtitle: "Hockey stickhandling trainer",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fd1ecc3c7a4a944519dd5d81fb7bca591",
    path: "/snake",
  },
];

export default function Designs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ overflow: "hidden", height: "100vh", width: "100vw" }}>
      <Header />

      <main className="flex-1 overflow-y-auto px-8 py-16" style={{ overflowX: "hidden" }}>
        <div className="max-w-7xl mx-auto">
          {/* Grid layout with dynamic rectangles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.path}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image with dynamic aspect ratio */}
                <div
                  className="overflow-hidden bg-gray-100"
                  style={{
                    height: "auto",
                    filter: hoveredId === project.id ? "grayscale(0%)" : "grayscale(100%)",
                    transition: "filter 0.5s ease-in-out",
                  }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto object-cover block"
                    loading="eager"
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                </div>

                {/* Typography below image */}
                <div
                  className={`mt-4 transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-lg font-serif font-light text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-gray-600">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
