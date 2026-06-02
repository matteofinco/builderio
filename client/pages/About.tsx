import Header from "../components/Header";

export default function About() {
  return (
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}>
      <Header />

      {/* Main content with iframe - full width and height */}
      <main style={{ flex: 1, overflow: "hidden", width: "100%", height: "100%", margin: 0, padding: 0 }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSkHZXTWxDxnsK5l07-SpCoPsZRM-uFGvCX3TQUcn-4IXpoD6i5Bhs0aLpVQMqanm-d2OenkKx0hZf9/pub?embedded=true"
          style={{ width: "100%", height: "100%", border: "none", display: "block", margin: 0, padding: 0 }}
        />
      </main>
    </div>
  );
}
