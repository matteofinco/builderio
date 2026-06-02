import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      <Header showBackToDesigns={true} />

      {/* Aggiungiamo 'position: relative' qui per fare da ancora al rettangolo */}
      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0, position: "relative" }}>
        <iframe
          src="https://short-united-892728.framer.app/"
          title="Progetto Archivia"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Rettangolo di copertura */}
        <div 
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "160px",
            height: "40px",
            backgroundColor: "#ffffff", // Assicurati che corrisponda al colore di fondo del tuo sito Framer
            zIndex: 10
          }}
        />
      </main>
    </div>
  );
}