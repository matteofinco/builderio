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
  { id: "archivia", title: "Archivia", subtitle: "Pen holder", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F058f28df5b3a4bdebc4975d0cebef9db", path: "/archivia" },
  { id: "pizzamente", title: "Pizza Machine", subtitle: "Academic Workshop", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fe186b1b1b013459f94a05a22f6ea48e5", path: "/pizzamente" },
  { id: "nando", title: "Nando", subtitle: "Hyperplastic cutlery handle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fa9e74a667878418daf9addb3fd5afc14", path: "/nando" },
  { id: "ttable", title: "T-Table", subtitle: "Interactive feeding friendly table", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ff232edcad30b47609d5e4f480c51e3e3", path: "/ttable" },
  { id: "wafflemaker", title: "Waffle Maker", subtitle: "Academic product basic design course", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F45f1f86b218c433c861c1d083909abfe", path: "/wafflemaker" },
  { id: "inlays", title: "Inlays", subtitle: "Academic inlays laboratory", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3d6dcda5704dadb2dbcd15072c729c", path: "/inlays" },
  { id: "snake", title: "Snake", subtitle: "Hockey stickhandling trainer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fd1ecc3c7a4a944519dd5d81fb7bca591", path: "/snake" },
];

export default function Designs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="bg-white" style={{ height: "100vh", width: "100vw", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Inseriamo lo stile qui per gestire la griglia masonry senza librerie esterne */}
      <style>{`
        .masonry-grid {
          column-count: 3;
          column-gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        .masonry-item {
          display: block;
          break-inside: avoid;
          margin-bottom: 20px;
          cursor: pointer;
        }
        @media (max-width: 900px) { .masonry-grid { column-count: 2; } }
        @media (max-width: 600px) { .masonry-grid { column-count: 1; } }
      `}</style>

      <Header />

      <main style={{ flex: 1, overflowY: "auto", overflowX: "hidden", width: "100%" }}>
        <div className="masonry-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className="masonry-item no-underline"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                style={{
                  width: "100%",
                  overflow: "hidden",
                  backgroundColor: "#f3f4f6",
                  filter: hoveredId === project.id ? "grayscale(0%)" : "grayscale(100%)",
                  transition: "filter 0.5s ease-in-out",
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  loading="eager"
                />
              </div>

              <div
                style={{
                  marginTop: "16px",
                  opacity: hoveredId === project.id ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <h3 style={{ fontSize: "18px", fontFamily: "Crimson Text, serif", fontWeight: 300, color: "#1f2937", marginBottom: "4px", marginTop: 0 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "14px", fontFamily: "Lato, sans-serif", fontWeight: 300, color: "#4b5563", marginTop: 0 }}>
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
