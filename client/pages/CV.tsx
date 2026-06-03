import Header from "../components/Header";

export default function CV() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <Header />

      <main style={{ 
        flex: 1, 
        width: "100%", 
        height: "100%", 
        position: "relative" 
      }}>
        <iframe
          // URL estratto dal tuo codice di incorporamento OneDrive
          src="https://1drv.ms/w/c/0a5b7507f0345384/IQQxEGg--0PqR6j92FBmN5GRAZpDkGO4aPwx2RGe2jceX8U?wdStartOn=1&amp;wdEmbedCode=0"
          title="Documento Word"
          style={{ 
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%", 
            height: "100%", 
            border: "none" 
          }}
        />
      </main>
    </div>
  );
}