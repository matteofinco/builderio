import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  path: string;
  gridClass: string; // Determina la forma del blocco nel collage
}

// Ho aggiunto la proprietà gridClass per definire la proporzione geometrica di ogni progetto nel collage
const projects: Project[] = [
  { id: "archivia", title: "Archivia", subtitle: "Pen holder", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F058f28df5b3a4bdebc4975d0cebef9db", path: "/archivia", gridClass: "card-wide" },
  { id: "pizzamente", title: "Pizza Machine", subtitle: "Academic Workshop", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fe186b1b1b013459f94a05a22f6ea48e5", path: "/pizzamente", gridClass: "card-tall" },
  { id: "nando", title: "Nando", subtitle: "Hyperplastic cutlery handle", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fa9e74a667878418daf9addb3fd5afc14", path: "/nando", gridClass: "card-standard" },
  { id: "ttable", title: "T-Table", subtitle: "Interactive feeding friendly table", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Ff232edcad30b47609d5e4f480c51e3e3", path: "/ttable", gridClass: "card-standard" },
  { id: "wafflemaker", title: "Waffle Maker", subtitle: "Academic product basic design course", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F45f1f86b218c433c861c1d083909abfe", path: "/wafflemaker", gridClass: "card-wide" },
  { id: "inlays", title: "Inlays", subtitle: "Academic inlays laboratory", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F2e3d6dcda5704dadb2dbcd15072c729c", path: "/inlays", gridClass: "card-tall" },
  { id: "snake", title: "Snake", subtitle: "Hockey stickhandling trainer", imageUrl: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fd1ecc3c7a4a944519dd5d81fb7bca591", path: "/snake", gridClass: "card-standard" },
];

export default function Designs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="bg-white" style={{ height: "100vh", width: "100vw", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <style>{`
        /* Il motore del collage */
        .collage-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 260px; /* Altezza base uniforme dei moduli dello scacchiere */
          grid-auto-flow: dense;  /* Spinge i blocchi a incastrarsi e tappare ogni buco vuoto */
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* Definizione delle tessere del mosaico */
        .collage-item {
          position: relative;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          overflow: visible; /* Permette allo zoom di uscire leggermente dai bordi dinamici */
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
        }

        /* Classi geometriche per rompere la monotonia (stile Moodboard) */
        .card-standard { grid-column: span 1; grid-row: span 1; }
        .card-wide { grid-column: span 2; grid-row: span 1; }
        .card-tall { grid-column: span 1; grid-row: span 2; }

        /* Effetto scala fisico che sposta visivamente i vicini */
        .collage-item:hover {
          transform: scale(1.04);
          z-index: 10;
        }

        /* Contenitore immagine responsivo integrato */
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
          object-fit: cover; /* Taglia l'immagine riempiendo geometricamente il blocco assegnato */
        }

        /* Responsività per schermi piccoli */
        @media (max-width: 900px) {
          .collage-container { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 220px; }
          .card-wide { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .collage-container { grid-template-columns: 1fr; grid-auto-rows: 250px; }
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
              <div
                className="image-wrapper"
                style={{
                  filter: hoveredId === project.id ? "grayscale(0%)" : "grayscale(100%)",
                  transition: "filter 0.5s ease-in-out",
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="collage-image"
                  loading="eager"
                />
              </div>

              {/* Didascalia sovrapposta o agganciata senza generare spazio bianco asimmetrico */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  padding: "15px",
                  background: "linear-gradient(to top, rgba(255,255,255,0.95) 70%, rgba(255,255,255,0))",
                  opacity: hoveredId === project.id ? 1 : 0,
                  transform: hoveredId === project.id ? "translateY(0)" : "translateY(10px)",
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