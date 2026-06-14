import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { StrictMode, useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

// 1. COMPONENTE CURSORE REALE CON EFFETTO RITARDO (LAG)
function LaggingCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const cursorElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Nascondiamo il cursore nativo su tutto il body quando il componente è attivo
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      if (!isVisible) setIsVisible(true);

      // Rileva se siamo sopra un elemento interattivo
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;
    
    const updatePosition = () => {
      // REGOLA IL LAG QUI: 
      // Più abbassi questo valore (es. 0.06), più il puntatore sarà "pesante" e lento.
      // Più lo alzi (es. 0.20), più sarà reattivo.
      const speed = 0.09; 
      
      cursorRef.current.x += (mouseRef.current.x - cursorRef.current.x) * speed;
      cursorRef.current.y += (mouseRef.current.y - cursorRef.current.y) * speed;

      if (cursorElementRef.current) {
        // Usiamo translate3d per attivare l'accelerazione hardware della GPU
        cursorElementRef.current.style.transform = `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorElementRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block select-none"
      style={{
        // Mantiene l'origine della freccia nell'angolo in alto a sinistra esatto del pixel puntato
        width: "20px",
        height: "20px",
        willChange: "transform",
        // Se sei in hover su un link, incliniamo o cambiamo leggermente lo stile (opzionale)
        transition: "transform 0.1s ease, opacity 0.2s ease",
        opacity: isHovering ? 0.7 : 1,
      }}
    >
      {/* SVG di una freccia puntatore minimale e geometrica */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          // Se stai facendo hover su un link, possiamo far ruotare la freccia o lasciarla standard
          transform: isHovering ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s ease",
        }}
      >
        <path
          d="M4.5 3V19.5L9.75 14.25H18.75L4.5 3Z"
          fill="black"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// 2. INIZIALIZZAZIONE DELL'APPLICAZIONE
const queryClient = new QueryClient();
const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {/* Il cursore con il lag ora gestisce l'intero puntatore */}
          <LaggingCursor /> 
          <App />
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}