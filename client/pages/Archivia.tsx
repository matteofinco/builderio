import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      <Header showBackToDesigns={true} />

      {/* Contenitore principale */}
      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0, position: "relative" }}>
        <iframe
          src="https://paginematteo.framer.website/archivia"
          title="Progetto Archivia"
          className="absolute top-0 left-0 w-full h-full border-none"
        />
        
        {/* Barra inferiore di copertura e navigazione */}
        <div 
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "100%",
            height: "60px",
            backgroundColor: "#ffffff", 
            borderTop: "1px solid #efefef", // Sottile linea di separazione
            boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.03)", // Ombra leggera verso l'alto per dare profondità
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10
          }}
        >
          <button 
            onClick={() => window.history.back()} // Torna alla pagina precedente, personalizzabile con il tuo router (es. useNavigate)
            className="px-6 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-sm"
          >
            ← Torna ai Progetti
          </button>
        </div>
      </main>
    </div>
  );
}