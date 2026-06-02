import Header from "../components/Header";

export default function Snake() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      <Header showBackToDesigns={true} />

      <main className="flex-1 overflow-hidden w-full" style={{ maxWidth: "100vw", margin: 0, padding: 0 }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSUJvWbPWeICkg4MsNzq3mMPcXMeBmxA40UDo18N7goUipRsaVQyerwpsRGCmT7G8j9qlxBN6GgrdhX/pub?embedded=true"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
      </main>
    </div>
  );
}
