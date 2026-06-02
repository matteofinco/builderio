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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5725216456804c8eaad35f51400a426f",
    path: "/archivia",
  },
  {
    id: "pizzamente",
    title: "Pizza Machine",
    subtitle: "Academic Workshop",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913",
    path: "/pizzamente",
  },
  {
    id: "nando",
    title: "Nando",
    subtitle: "Hyperplastic cutlery handle",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F10f14280000d46bba0cf01339a4b340b",
    path: "/nando",
  },
  {
    id: "ttable",
    title: "T-Table",
    subtitle: "Interactive feeding friendly table",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F5dd66d19c35f4146a3aadde21219edf5",
    path: "/ttable",
  },
  {
    id: "wafflemaker",
    title: "Waffle Maker",
    subtitle: "Academic product basic design course",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fedbb2046d3db4d549f4da864fca20382",
    path: "/wafflemaker",
  },
  {
    id: "inlays",
    title: "Inlays",
    subtitle: "Academic inlays laboratory",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ff06baaa8d7254b9fb1ccc91cc33a8538",
    path: "/inlays",
  },
  {
    id: "snake",
    title: "Snake",
    subtitle: "Hockey stickhandling trainer",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9366df60acf94b0bacc85252a2e3865e",
    path: "/snake",
  },
];

export default function Designs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="bg-white" style={{ height: "100vh", width: "100vw", overflow: "hidden", overflowX: "hidden", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1, overflowY: "auto", overflowX: "hidden", width: "100%", padding: "2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className="no-underline"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ flex: "1 1 30%", minWidth: "250px", cursor: "pointer" }}
            >
              {/* Image container - respects natural proportions */}
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

              {/* Typography below image */}
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
