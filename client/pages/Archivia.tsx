import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      <Header showBackToDesigns={true} />

      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0 }}>
       <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/site/3GgDchBiszfexjgDBeedNB/Untitled?node-id=0-1&embed-host=share" allowfullscreen></iframe>
      </main>
    </div>
  );
}
