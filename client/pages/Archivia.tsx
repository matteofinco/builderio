import Header from "../components/Header";

export default function Archivia() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      <Header showBackToDesigns={true} />

      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0 }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRwmhNXZTK66vMQ87Gf9seVQ9fEgTqhSm2Eh6vzCRJNyYiWQ3kYt85L_XMQySIVB1m4vJ4tNek8SlFH/pub?embedded=true"
          style={{ width: "100%", height: "100%", border: "none", display: "block", margin: 0, padding: 0 }}
        />
      </main>
    </div>
  );
}
