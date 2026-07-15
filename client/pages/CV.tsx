import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";

export default function Archivia() {
  const [language, setLanguage] = useState("en");
  const [isChanging, setIsChanging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pdfUrls = {
    it: "https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F08ecfc6bb6a146d893a50c48392afa07?alt=media&token=c9ec7475-0f05-4279-aa29-438efd6c9518&apiKey=b117f80db1214c899c967fecfbdcaa25",
    en: "https://cdn.builder.io/o/assets%2Fb117f80db1214c899c967fecfbdcaa25%2F3a612813bdd6434786b6d47a48781500?alt=media&token=2199cf05-8753-4383-b7be-a90505480b59&apiKey=b117f80db1214c899c967fecfbdcaa25"
  };

  // Decoppiamo l'URL dell'iframe dallo stato della lingua per controllare il timing
  const [iframeUrl, setIframeUrl] = useState(`${pdfUrls["en"]}#toolbar=0&navpanes=0&view=FitH`);

  // Ref per tenere traccia del timer di sicurezza ed evitare memory leak
  const safetyTimerRef = useRef(null);

  // Rileva se lo schermo è mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, []);

  // Gestione del cambio lingua con sequenza temporizzata
  const handleLanguageChange = (lang) => {
    if (lang !== language) {
      setLanguage(lang); // Cambia subito il pulsante per dare feedback visivo
      setIsChanging(true); // Avvia la dissolvenza in uscita (l'iframe diventa trasparente)

      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);

      // Aspettiamo 500ms (il tempo della dissolvenza) prima di caricare il nuovo URL
      setTimeout(() => {
        setIframeUrl(`${pdfUrls[lang]}#toolbar=0&navpanes=0&view=FitH`);

        // Timer di sicurezza: se l'onLoad non risponde entro 2.5s, mostra comunque il PDF
        safetyTimerRef.current = setTimeout(() => {
          setIsChanging(false);
        }, 2500);
      }, 500); // Coincide con la durata del fade-out CSS
    }
  };

  // Triggerato quando il nuovo PDF è pronto dentro l'iframe
  const handleIframeLoad = () => {
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    setIsChanging(false); // Avvia la dissolvenza in entrata (l'iframe torna visibile)
  };

  const handleDownload = async () => {
    const fileName = `CV_Matteo_Finco_${language.toUpperCase()}.pdf`;
    try {
      const response = await fetch(pdfUrls[language]);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      window.open(pdfUrls[language], "_blank");
    }
  };

  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0, position: "relative" }}>
      
      <Header showBackToDesigns={false} />

      {/* Selettore Lingua */}
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
          onClick={() => handleLanguageChange("it")}
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
          onClick={() => handleLanguageChange("en")}
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
        
        <div style={{ 
          flex: 1, 
          width: "100%", 
          height: "100%", 
          paddingBottom: "60px", 
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden"
        }}>
          
          {isMobile ? (
            /* Vista Mobile */
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              padding: "24px",
              textAlign: "center",
              backgroundColor: "#ffffff"
            }}>
              <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Curriculum Vitae</span>
              <h2 className="text-xl font-light text-black tracking-wide mb-6">Matteo Finco</h2>
              <p className="text-sm font-light text-gray-500 max-w-xs leading-relaxed mb-8">
                {language === "it" 
                  ? "Per una lettura ottimale su dispositivi mobili, apri il curriculum a tutto schermo o scarica il file direttamente."
                  : "For the best reading experience on mobile, view the resume in full screen or download the file directly."}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "240px" }}>
                <a 
                  href={pdfUrls[language]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "12px",
                    border: "1px solid #000",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "#fff",
                    backgroundColor: "#000",
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.05em"
                  }}
                >
                  {language === "it" ? "Leggi a tutto schermo" : "View Full Screen"}
                </a>
                <button 
                  onClick={handleDownload}
                  style={{
                    padding: "12px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    color: "#374151",
                    backgroundColor: "#f9fafb",
                    fontSize: "13px",
                    fontWeight: "400",
                    letterSpacing: "0.05em",
                    cursor: "pointer"
                  }}
                >
                  {language === "it" ? "Scarica PDF" : "Download PDF"}
                </button>
              </div>
            </div>
          ) : (
            /* Vista Desktop */
            <div style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#ffffff"
            }}>
              <iframe 
                src={iframeUrl} 
                onLoad={handleIframeLoad}
                width="100%" 
                style={{ 
                  position: "absolute",
                  top: "-56px",
                  left: "0px",
                  width: "calc(100% + 24px)", 
                  height: "calc(100% + 60px)", // Il tuo calc modificato
                  border: "none", 
                  backgroundColor: "transparent",
                  opacity: isChanging ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out" // 0.5s di transizione super morbida
                }}
                title="Curriculum Vitae Matteo Finco"
              ></iframe>
            </div>
          )}
        </div>
        
        {/* Barra inferiore */}
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
          {/* Pulsante Contatto */}
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

          {/* Pulsante Download PDF */}
          <button 
            onClick={handleDownload}
            className="text-sm font-light text-gray-500 tracking-wide hover:text-black transition-colors duration-200"
            style={{
              position: "absolute",
              right: "32px",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: 0
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
            <span className="hidden sm:inline">Download PDF</span>
          </button>
        </div>
      </main>
    </div>
  );
}