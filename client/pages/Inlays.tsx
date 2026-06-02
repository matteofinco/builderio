import Header from "../components/Header";

export default function Inlays() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      <Header showBackToDesigns={true} />

      <main className="flex-1 overflow-hidden w-full" style={{ maxWidth: "100vw", margin: 0, padding: 0 }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vS5Cb4Egjm1IhhinAX2zlvD7DFZSXtheWzndKU0TLPvaXg0IomM4KwyEX9-haRpruC6Qk1FSgMEa2Bc/pub?embedded=true"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
      </main>
    </div>
  );
}
