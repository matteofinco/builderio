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
    { id: "matteo-finco", title: "Matteo Finco", subtitle: "Get in touch", path: "/Contact", areaClass: "area-profile", isProfile: true },
  ];

  return (
    <div className="bg-white" style={{ height: "100vh", width: "100vw", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <style>{`
        /* 1. GRIGLIA DESKTOP (Invariata) */
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
          object-fit: cover;
          transition: filter 0.5s ease-in-out;
        }

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

        .text-profile-card:hover {
          background-color: transparent;
          border-color: transparent;
          opacity: 0.7;
        }

        /* 2. GRIGLIA TABLET / SCHERMI MEDI */
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
        
        /* 3. NUOVA GRIGLIA GEOMETRICA PER SMARTPHONE (Sotto i 640px) */
        @media (max-width: 640px) {
          .collage-container { 
            grid-template-columns: repeat(2, 1fr); /* Due colonne strette per creare incastri */
            grid-template-rows: auto;
            grid-auto-rows: 180px; /* Altezza di base dei moduli piccoli */
            gap: 16px; 
            padding: 1.5rem 1rem; 
            grid-template-areas:
              "archivia    archivia"   /* Orizzontale largo */
              "nando       pizza"      /* Nando quadrato, Pizza si allunga in basso */
              "snake       pizza"      /* Snake sotto nando, affianca pizza */
              "waffle      waffle"     /* Waffle orizzontale largo a spezzare */
              "ttable      inlays"     /* Ttable quadrato, Inlays si allunga */
              "profile     inlays";    /* Tua scheda contatto di fianco a inlays */
          }

          /* Riapplichiamo le aree esplicite per forzare l'incastro mobile */
          .area-archivia { grid-area: archivia; }
          .area-pizza { grid-area: pizza; }
          .area-nando { grid-area: nando; }
          .area-snake { grid-area: snake; }
          .area-waffle { grid-area: waffle; }
          .area-inlays { grid-area: inlays; }
          .area-ttable { grid-area: ttable; }
          .area-profile { grid-area: profile; }

          /* Su mobile non essendoci l'hover del mouse, most