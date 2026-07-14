import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      {/* Header senza pulsante indietro */}
      <Header showBackToDesigns={false} />

      {/* Contenitore principale */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", width: "100%", margin: 0, padding: 0, position: "relative" }}>
        
        {/* Spazio del corpo principale (lascia 60px liberi sul fondo per la barra inferiore) */}
        <div style={{ 
          flex: 1, 
          width: "100%", 
          height: "100%", 
          paddingBottom: "60px", 
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden"
        }}>
          
          {/* Contenitore con bordi arrotondati e ritaglio attivo */}
          <div style={{
            width: "100%",
            height: "100%",
            borderRadius: "0px",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "transparent"
          }}>
            
            {/* Iframe leggermente più grande del contenitore per nascondere i bordi neri nativi del browser */}
            <iframe 
              src="https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fae57c8f749b942419e5ef5f1a41aabdd?alt=media&token=4600a34a-7bb4-4445-8ba4-8dbf89c53842&apiKey=b117f80db1214c899c967fecfbdcaa25#toolbar=0&navpanes=0&view=FitH" 
              width="100%" 
              style={{ 
                position: "absolute",
                top: "-8px",
                left: "-8px",
                width: "calc(100% + 16px)",
                height: "calc(100% + 16px)",
                border: "none", 
                backgroundColor: "transparent" 
              }}
              title="Curriculum Vitae Matteo Finco"
            ></iframe>

            {/* Rettangolo bianco che copre e nasconde la scrollbar del PDF a destra */}
            <div 
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "17px", // Larghezza standard per coprire la barra di scorrimento
                height: "100%",
                backgroundColor: "#ffffff",
                zIndex: 5
              }}
            />
          </div>
        </div>
        
        {/* Barra inferiore minimale coordinata */}
        <div 
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px", 
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