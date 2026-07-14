import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      {/* Impostato su false per togliere il pulsante dalla barra superiore */}
      <Header showBackToDesigns={false} />

      {/* Contenitore principale */}
      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0, position: "relative" }}>
        <iframe
          src="https://paginematteo.framer.website/prop"
          title="Prop"
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
            onClick={() => window.location.href = "/Designs"}
            // Sincronizzato con lo stile dell'Header: font-light, senza uppercase, colori gray-500 -> black
            className="text-sm font-light text-gray-500 tracking-wide hover:text-black transition-colors duration-200 flex items-center gap-2"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
          >
            {/* Freccia vettoriale geometrica, matematicamente centrata sull'asse mediano del testo */}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" // Alleggerito a 1.5 per sposarsi con il font-light
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ display: "block" }}
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Designs</span>
          </button>
        </div>
      </main>
    </div>
  );
}