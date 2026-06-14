import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      {/* Impostato su false per togliere il pulsante dalla barra superiore */}
      <Header showBackToDesigns={false} />

      {/* Contenitore principale */}
      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0, position: "relative" }}>
        <iframe
          src="https://paginematteo.framer.website/comingsoon"
          title="Curriculum Vitae"
          className="absolute top-0 left-0 w-full h-full border-none"
        />
        
        {/* Barra inferiore minimale coordinata all'Header */}
        <div 
          style={{
            position: "absolute",
            bottom: "0px",
            right: "15px",
            width: "100%",
            height: "60px",
            backgroundColor: "rgba(255, 255, 255, 0.95)", 
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid #f3f4f6", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            boxShadow: "0 -15px 30px -10px rgba(0, 0, 0, 0.04), 0 -10px 15px -5px rgba(0, 0, 0, 0.02)"
          }}
        >
          <button 
            onClick={() => window.location.href = "/Contact"}
            className="text-sm font-light text-gray-500 tracking-wide hover:text-black transition-colors duration-200"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
          >
            Get in touch
          </button>
        </div>
      </main>
    </div>
  );
}