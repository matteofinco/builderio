import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  path: string;
  gridClass: string;
}

const projects: Project[] = [
  { id: "archivia", title: "Archivia", subtitle: "Pen holder", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F058f28df5b3a4bdebc4975d0cebef9db", path: "/archivia", gridClass: "card-wide" },
  { id: "pizzamente", title: "Pizza Machine", subtitle: "Academic Workshop", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fe186b1b1b013459f94a05a22f6ea48e5", path: "/pizzamente", gridClass: "card-tall" },
  { id: "nando", title: "Nando", subtitle: "Hyperplastic cutlery handle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fa9e74a667878418daf9addb3fd5afc14", path: "/nando", gridClass: "card-standard" },
  { id: "snake", title: "Snake", subtitle: "Hockey stickhandling trainer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fd1ecc3c7a4a944519dd5d81fb7bca591", path: "/snake", gridClass: "card-standard" },
  { id: "wafflemaker", title: "Waffle Maker", subtitle: "Academic product basic design course", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F45f1f86b218c433c861c1d083909abfe", path: "/wafflemaker", gridClass: "card-wide" },
  { id: "inlays", title: "Inlays", subtitle: "Academic inlays laboratory", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3d6dcda5704dadb2dbcd15072c729c", path: "/inlays", gridClass: "card-tall" },
  { id: "ttable", title: "T-Table", subtitle: "Interactive feeding friendly table", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ff232edcad30b47609d5e4f480c51e3e3", path: "/ttable", gridClass: "card-standard" },
];

export default function Designs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="bg-white" style={{ height: "100vh", width: "100vw", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <style>{`
        .collage-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 300px; /* Altezza ottimizzata */
          grid-auto-flow: dense;
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .collage-item {
          position: relative;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          overflow: visible;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
        }

        .card-standard { grid-column: span 1; grid-row: span 1; }
        .card-wide { grid-column: span 2; grid-row: span 1; }
        .card-tall { grid-column: span 1; grid-row: span 2; }

        /* L'effetto scala richiesto che muove i vicini */
        .collage-item:hover {
          transform: scale(1.03);
          z-index: 10;
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden;
          /* Sfondo grigio chiarissimo/neutro per accogliere le immagini intere senza tagli */
          background-color: #f6f6f6; 
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.4s ease;
        }

        .collage-item:hover .image-wrapper {
          background-color: #eaeaea; /* Scurisce leggermente lo sfondo in hover per dare stacco */
        }

        .collage-image {
          display: block;
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          /* LA SVOLTA: contain mostra l'immagine al 100% delle sue proporzioni native, zero tagli */
          object-fit: contain; 
          transition: filter 0.5s ease-in-out;
        }

        @media (max-width: 1024px) {
          .collage-container { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
          .card-wide { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .collage-container { grid-template-columns: 1fr; grid-auto-rows: 280px; gap: 16px; }
          .card-wide, .card-tall { grid-column: span 1; grid-row: span 1; }
        }
      `}</style>

      <Header />

      <main style={{ flex: 1, overflowY: "auto", overflowX: "hidden", width: "100%" }}>
        <div className="collage-container">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className={`collage-item ${project.gridClass}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="image-wrapper">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="collage-image"
                  style={{
                    filter: hoveredId === project.id ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  loading="eager"
                />
              </div>

              {/* Didascalia minimale */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  padding: "16px",
                  background: "linear-gradient(to top, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0))",
                  opacity: hoveredId === project.id ? 1 : 0,
                  transform: hoveredId === project.id ? "translateY(0)" : "translateY(8px)",
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
          ))}
        </div>
      </main>
    </div>
  );
}