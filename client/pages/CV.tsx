import { useState } from "react";
import Header from "../components/Header";

export default function Archivia() {
  // Stato per gestire la lingua attiva: "it" o "en"
  const [language, setLanguage] = useState("it");

  // Database dei link dei PDF
  const pdfUrls = {
    it: "https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2Fa6c2d056f1db4f8c9f9f2dd4f261bbed?alt=media&token=7284c0de-1d2b-47b9-b4f0-0c6e563a83be&apiKey=b117f80db1214c899c967fecfbdcaa25",
    en: "https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F3e28745827294807a934f037226de5ad?alt=media&token=a28b01f6-333b-4e52-8e49-694d3d5894c9&apiKey=b117f80db1214c899c967fecfbdcaa25"
  };

  // Costruisce l'URL per l'iframe applicando i parametri di visualizzazione pulita
  const currentIframeUrl = `${pdfUrls[language]}#toolbar=0&navpanes=0&view=FitH`;

  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0, position: "relative" }}>
      
      {/* Header senza pulsante indietro */}
      <Header showBackToDesigns={false} />

      {/* Selettore Lingua minimale (Posizionato sopra l'header con zIndex elevatissimo) */}
      <div style={{
        position: "absolute",
        top: "14px", 
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99999,
        display: "flex",
        backgroundColor: "#f3f4f6",
        padding: "3px",
        borderRadius: "9999px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <button
          onClick={() => setLanguage("it")}
          style={{
            padding: "4px 14px",
            borderRadius: "9999px",
            fontSize: "11px",
            letterSpacing: "0.05em",
            fontWeight: language === "it" ? "500" : "300",
            color: language === "it" ? "#000000" : "#9ca3af",
            backgroundColor: language === "it" ? "#ffffff" : "transparent",
            boxShadow: language === "it" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          IT
        </button>
        <button
          onClick={() => setLanguage("en")}
          style={{
            padding: "4px 14px",
            borderRadius: "9999px",
            fontSize: "11px",
            letterSpacing: "0.05em",
            fontWeight: language === "en" ? "500" : "300",
            color: language === "en" ? "#000000" : "#9ca3af",
            backgroundColor: language === "en" ? "#ffffff" : "transparent",
            boxShadow: language === "en" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          EN
        </button>
      </div>

      {/* Contenitore principale */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", width: "100%", margin: 0, padding: 0, position: "relative" }}>
        
        {/* Spazio dell'iframe (lascia 60px liberi sul fondo per la barra inferiore) */}
        <div style={{ 
          flex: 1, 
          width: "100%", 
          height: "100%", 
          paddingBottom: "60px", 
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden"
        }}>
          
          {/* Contenitore di ritaglio squadrato (senza bordi arrotondati) */}
          <div style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "transparent"
          }}>
            
            {/* Iframe scalato maggiormente per tagliare fuori i bordi neri e la scrollbar del browser */}
            <iframe 
              src={currentIframeUrl} 
              width="100%" 
              style={{ 
                position: "absolute",
                top: "-40px",
                left: "-40px",
                width: "calc(100% + 80px)",
                height: "calc(100% + 80px)",
                border: "none", 
                backgroundColor: "transparent" 
              }}
              title="Curriculum Vitae Matteo Finco"
            ></iframe>
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
          {/* Pulsante Contatto (Centrato) */}
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

          {/* Pulsante Download PDF dinamico (In basso a destra) */}
          <a 
            href={pdfUrls[language]} 
            download={`CV_Matteo_Finco_${language.toUpperCase()}.pdf`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-light text-gray-500 tracking-wide hover:text-black transition-colors duration-200"
            style={{
              position: "absolute",
              right: "32px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </main>
    </div>
  );
}