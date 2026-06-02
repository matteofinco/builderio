import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      <Header showBackToDesigns={true} />

      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0 }}>
      <iframe
          src="https://short-united-892728.framer.app/"
          title="Progetto Archivia"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </main>
    </div>
  );
}
