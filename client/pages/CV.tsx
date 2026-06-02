import Header from "../components/Header";

export default function CV() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      <Header />

      {/* Main content with iframe */}
      <main className="flex-1 overflow-hidden">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQ0UBAQs6GYgQBo387LBWB4FP7TRqKh5J4A0INrxOIUgjkfwcAwlANsKgZ1J4W-SmS1d0dRgaI4lj3r/pub?embedded=true"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </main>
    </div>
  );
}
