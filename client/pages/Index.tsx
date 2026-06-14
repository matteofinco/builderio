import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
  preview: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    label: "Designs",
    path: "/designs",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F61cecd5c6bdd4a18bae9f79b93c48925?width=2000",
    description: "Selected industrial products & concepts.",
  },
  {
    label: "About",
    path: "/about",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F7a0ba68ea33247deae86bf521f6b414fwidth=2000",
    description: "Design student & maker based in Italy",
  },
  {
    label: "Curriculum Vitae",
    path: "/cv",
    preview: "https://cdn.builder.io/api/v1/image/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fa24ebec7a28b475aa86b685459ba9248?width=2000",
    description: "Experience, tools, and background.",
  },
];

export default function Index() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [lastActivePreview, setLastActivePreview] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleMouseEnter = (label: string, preview: string) => {
    setHoveredItem(label);
    setLastActivePreview(preview);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // Logica Canvas per il pulviscolo/vento
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speedY: number;
      speedX: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = 100;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          speedY: -(Math.random() * 0.4 + 0.1),
          speedX: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(180, 180, 185, ${p.opacity})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 10) {
          p.x = -10;
          p.y = Math.random() * canvas.height;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();
<link rel="icon" href="/favicon.ico" />
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-white flex flex-col justify-between w-screen h-screen overflow-hidden relative">
      
      {/* Canvas delle particelle */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 multiply"
        style={{
          opacity: hoveredItem ? 0 : 1,
          transition: hoveredItem ? "opacity 400ms ease-out" : "opacity 1000ms ease-in-out"
        }}
      />

      {/* Render di sfondo con transizione graduale simmetrica */}
      {lastActivePreview && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
          <img
            src={lastActivePreview}
            alt="Preview"
            className="w-full h-full object-cover"
            style={{
              opacity: hoveredItem ? 0.05 : 0,
              // Transizione identica e morbida sia in entrata (800ms) che in uscita (1000ms)
              transition: hoveredItem 
                ? "opacity 800ms cubic-bezier(0.25, 1, 0.5, 1)" 
                : "opacity 1000ms cubic-bezier(0.25, 1, 0.5, 1)"
            }}
          />
        </div>
      )}

      {/* Contenuto principale */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 my-auto relative z-20 w-full">
        
        {/* Intestazione */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight mb-3">
            Matteo Finco
          </h1>
          <p className="text-base md:text-lg font-light text-gray-600">
            Product Designer & Maker
          </p>
        </div>

        {/* Navigazione principale */}
        <nav className="space-y-6 md:space-y-8 max-w-2xl w-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={() => handleMouseEnter(item.label, item.preview)}
              onMouseLeave={handleMouseLeave}
              className="block group cursor-pointer"
            >
              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-light transition-opacity duration-300 group-hover:opacity-50">
                  {item.label}
                </h2>
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-black transition-all duration-300 ${
                    hoveredItem === item.label ? "w-full" : "w-0"
                  }`}
                />
              </div>
              <p
                className={`text-sm text-gray-600 mt-2 transition-opacity duration-300 text-center ${
                  hoveredItem === item.label ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.description}
              </p>
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer protetto e sempre visibile */}
      <div className="text-center pb-6 md:pb-12 relative z-20 mt-auto">
        <Link
          to="/contact"
          className="text-sm font-light text-gray-600 hover:text-black transition-colors"
        >
          Get in touch
        </Link>
      </div>

    </div>
  );
}