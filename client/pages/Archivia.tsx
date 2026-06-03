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
            left: "0px",
            width: "100%",
            height: "60px",
            backgroundColor: "#ffffff", 
            borderTop: "1px solid #e5e5e5", // Sottile linea grigia pulita stile nav-bar
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10
          }}
        >
          <button 
            onClick={() => window.history.back()} 
            className="text-sm font-medium text-neutral-800 tracking-wider hover:text-neutral-500 transition-colors duration-200 uppercase"
          >
            ← Back to Designs
          </button>
        </div>
      </main>
    </div>
  );
}