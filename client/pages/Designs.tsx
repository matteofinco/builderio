import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  path: string;
  areaClass: string;
  isProfile?: boolean;
}

export default function Designs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects: Project[] = [
    { id: "archivia", title: "Archivia", subtitle: "Pen holder", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F65c9f3670b2a484ba3d71220897004f0", path: "/archivia", areaClass: "area-archivia" },
    { id: "pizzamente", title: "Pizza Machine", subtitle: "Academic Workshop", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3383ac1e3348f0bc9a80ad0e830913", path: "/pizzamente", areaClass: "area-pizza" },
    { id: "nando", title: "Nando", subtitle: "Hyperplastic cutlery handle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F10f14280000d46bba0cf01339a4b340b", path: "/nando", areaClass: "area-nando" },
    { id: "snake", title: "Snake", subtitle: "Hockey stickhandling trainer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F9c5d63a7eabc43d7884582ca0db21ec9", path: "/snake", areaClass: "area-snake" },
    { id: "wafflemaker", title: "Waffle Maker", subtitle: "Academic product basic design course", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F87847bb01fa04b8e8d65af4f273612bc", path: "/wafflemaker", areaClass: "area-waffle" },
    { id: "inlays", title: "Inlays", subtitle: "Academic inlays laboratory", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ff06baaa8d7254b9fb1ccc91cc33a8538", path: "/inlays", areaClass: "area-inlays" },
    { id: "ttable", title: "T-Table", subtitle: "Interactive feeding friendly table", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F0af25cd3686f4a74863491dfeb75ca6d", path: "/ttable", areaClass: "area-ttable" },
    { id: "matteo-finco", title: "Matteo Finco", subtitle: "Industrial Design Portfolio", path: "/about", areaClass: "area-profile", isProfile: true },
  ];

  return (
    <div className="bg-white" style={{ height: "100vh", width: "100vw", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <style>{`
        /* Mappa del collage geometrico */
        .collage-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 300px);
          grid-template-areas:
            "archivia archivia pizza"
            "nando    snake    pizza"
            "waffle   waffle   inlays"
            "ttable   profile  inlays";
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .area-archivia { grid-area: archivia; }
        .area-pizza { grid-area: pizza; }
        .area-nando { grid-area: nando; }
        .area-snake { grid-area: snake; }
        .area-waffle { grid-area: waffle; }
        .area-inlays { grid-area: inlays; }
        .area-ttable { grid-area: ttable; }
        .area-profile { grid-area: profile; }

        .collage-item {
          position: relative;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          overflow: visible;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
        }

        .collage-item:hover {
          transform: scale(1.04);
          z-index: 10;
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #f3f4f6;
          position: relative;
          flex: 1;
        }

        .collage-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: fill;
          transition: filter 0.5s ease-in-out;
        }

        /* Card tipografica minimale - Tolto box, bordi e background invasivi */
        .text-profile-card {
          background-color: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          box-sizing: border-box;
          transition: opacity 0.4s ease;
        }

        /* All'hover non cambia lo sfondo, ma diamo un feedback visivo soft (opacità leggera) */
        .text-profile-card:hover {
          background-color: transparent;
          border-color: transparent;
          opacity: 0.7;
        }

        @media (max-width: 1024px) {
          .collage-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-template-areas: none;
            grid-auto-rows: 250px;
          }
          .area-archivia, .area-waffle { grid-column: span 2; grid-row: span 1; }
          .area-pizza, .area-inlays { grid-column: span 1; grid-row: span 2; }
          .area-nando, .area-snake, .area-ttable, .area-profile { grid-column: span 1; grid-row: span 1; }
        }
        
        @media (max-width: 640px) {
          .collage-container { grid-template-columns: 1fr; grid-auto-rows: 280px; gap: 16px; }
          .area-archivia, .area-waffle, .area-pizza, .area-inlays, .area-nando, .area-snake, .area-ttable, .area-profile {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>

      <Header />

      <main style={{ flex: 1, overflowY: "auto", overflowX: "hidden", width: "100%" }}>
        <div className="collage-container">
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;

            if (project.isProfile) {
              return (
                <Link
                  key={project.id}
                  to={project.path}
                  className={`collage-item ${project.areaClass} text-profile-card`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <h2 style={{
                    fontSize: "24px",
                    fontFamily: "Crimson Text, serif",
                    fontWeight: 400,
                    color: "#1f2937", // Mantenuto il colore scuro della toolbar coerente
                    margin: 0,
                    transition: "color 0.4s ease"
                  }}>
                    {project.title}
                  </h2>
                  <p style={{
                    fontSize: "13px",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 300,
                    color: "#6b7280", // Grigio leggero neutro fisso
                    margin: "8px 0 0 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    transition: "color 0.4s ease"
                  }}>
                    {project.subtitle}
                  </p>
                </Link>
              );
            }

            return (
              <Link
                key={project.id}
                to={project.path}
                className={`collage-item ${project.areaClass}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="image-wrapper">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="collage-image"
                    style={{
                      filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                    loading="eager"
                  />
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "16px",
                    background: "linear-gradient(to top, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0))",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    pointerEvents: "none",
                  }}
                >
                  <h3 style={{ fontSize: "15px", fontFamily: "Crimson Text, serif", fontWeight: 400, color: "#1f2937", margin: 0 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "12px", fontFamily: "Lato, sans-serif", fontWeight: 300, color: "#4b5563", margin: "2px 0 0 0" }}>
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}