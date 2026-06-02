import Header from "../components/Header";

export default function About() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      <Header />

      {/* Main content with iframe - full width, no constraints */}
      <main className="flex-1 overflow-hidden w-full" style={{ maxWidth: "100vw", margin: 0, padding: 0 }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSkHZXTWxDxnsK5l07-SpCoPsZRM-uFGvCX3TQUcn-4IXpoD6i5Bhs0aLpVQMqanm-d2OenkKx0hZf9/pub?embedded=true"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
      </main>
    </div>
  );
}
