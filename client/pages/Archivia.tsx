import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      {/* Impostato su false per togliere il pulsante dalla barra superiore */}
      <Header showBackToDesigns={false} />

      {/* Contenitore principale */}
      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0, position: "relative" }}>
        <iframe
          src="https://paginematteo.framer.website/archivia"
          title="Progetto Archivia"
          className="absolute top-0 left-0 w-full h-full border-none"
        />
        
        {/* Barra inferiore minimale coordinata all'Header */}
        <div 
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px", // Sistemato l'allineamento per coprire l'intera larghezza in modo pulito
            width: "100%",
            height: "60px",
            // Stesso effetto frosted glass dell'header (bianco/95)
            backgroundColor: "rgba(255, 255, 255, 0.95)", 
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)", // Supporto per Safari
            // Grigio più morbido coerente con border-gray-100
            borderTop: "1px solid #f3f4f6", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            // Ombra speculare rispetto a quella dell'header, proiettata verso l'alto
            boxShadow: "0 -15px 30px -10px rgba(0, 0, 0, 0.04), 0 -10px 15px -5px rgba(0, 0, 0, 0.02)"
          }}
        >
          <button 
            onClick={() => window.location.href = "/Designs"}
            className="text-sm font-light text-gray-500 tracking-widest hover:text-black transition-colors duration-200 uppercase"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit" // Mantiene la coerenza del font globale
            }}
          >
            ← Back to Designs
          </button>
        </div>
      </main>
    </div>
  );
}