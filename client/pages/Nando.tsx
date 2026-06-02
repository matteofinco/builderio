import Header from "../components/Header";

export default function Nando() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", overflowX: "hidden", margin: 0, padding: 0 }}>
      <Header showBackToDesigns={true} />

      <main style={{ flex: 1, overflow: "hidden", width: "100%", maxWidth: "100%", height: "100%", margin: 0, padding: 0, overflowX: "hidden" }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTnbdR4m3ttrAClYY3Wa0rIZc4ypwxLMnuYrh9_ItNr386jmKPB9sABCZNs5WzqZYj4eRkyCnAPJy4I/pub?embedded=true"
          style={{ position: "fixed", top: "60px", left: 0, width: "100vw", height: "calc(100vh - 60px)", border: "none", zIndex: 1, overflowX: "hidden" }}
        />
      </main>
    </div>
  );
}
