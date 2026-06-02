import Header from "../components/Header";

export default function Pizzamente() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      <Header showBackToDesigns={true} />

      <main className="flex-1 overflow-hidden w-full" style={{ maxWidth: "100vw", margin: 0, padding: 0 }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSo4iK4OhApPwXjOoNsXJE6ZB9bP8oY1uMHBFP0a0TUAN_MOSkCIuQ4fft6iYiZBB0xsEBS5F9x7T7x/pub?embedded=true"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
      </main>
    </div>
  );
}
