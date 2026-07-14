import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      {/* Header senza pulsante indietro */}
      <Header showBackToDesigns={false} />

      {/* Contenitore principale */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", width: "100%", margin: 0, padding: 0, position: "relative" }}>
        
        {/* Wrapper dell'iframe con spazio sul fondo per la barra absolute */}
        <div style={{ flex: 1, width: "100%", height: "100%", paddingBottom: "60px", boxSizing: "border-box" }}>
          <iframe 
            src="https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fae57c8f749b942419e5ef5f1a41aabdd?alt=media&token=4600a34a-7bb4-4445-8ba4-8dbf89c53842&apiKey=b117f80db1214c899c967fecfbdcaa25#toolbar=0&navpanes=0&view=FitH" 
            width="100%" 
            style={{ height: "100%", border: "none", borderRadius: "16px", backgroundColor: "transparent" }}
            title="Curriculum Vitae Matteo Finco"
          ></iframe>
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