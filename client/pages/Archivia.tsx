import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      <Header showBackToDesigns={true} />

      {/* Aggiungiamo 'position: relative' qui per fare da ancora al rettangolo */}
      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0, position: "relative" }}>
       <iframe
          src="https://paginematteo.framer.website/archivia"
          title="Progetto Archivia"
          className="absolute top-0 left-0 w-full h-full border-none"
        />
        
        {/* Rettangolo di copertura */}
        <div 
          style={{
            position: "absolute",
            bottom: "0px",
            right: "13px",
            width: "200px",
            height: "50px",
            backgroundColor: "#ffffff", // Assicurati che corrisponda al colore di fondo del tuo sito Framer
            zIndex: 10
          }}
        />
      </main>
    </div>
  );
}