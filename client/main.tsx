import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { StrictMode, useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

// 1. COMPONENTE CURSORE CUSTOM CON INERZIA (LERP)
function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const ringElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      if (!isVisible) setIsVisible(true);

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
      const speed = 0.12; // Coefficiente di elasticità dell'anello
      
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * speed;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * speed;

      if (ringElementRef.current) {
        ringElementRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={ringElementRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        width: isHovering ? "48px" : "24px",
        height: isHovering ? "48px" : "24px",
        border: "1px solid rgba(0, 0, 0, 0.25)",
        backgroundColor: isHovering ? "rgba(0, 0, 0, 0.02)" : "transparent",
        transition: "width 300ms cubic-bezier(0.25, 1, 0.5, 1), height 300ms cubic-bezier(0.25, 1, 0.5, 1), background-color 300ms ease, border-color 300ms ease",
        borderColor: isHovering ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.3)",
        willChange: "transform, width, height",
      }}
    />
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
          {/* Inserito qui per l'esecuzione globale */}
          <CustomCursor /> 
          <App />
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}