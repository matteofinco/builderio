import Header from "../components/Header";

export default function CV() {
  return (
    // 'overflow-hidden' su 'div' principale blocca qualsiasi scroll indesiderato della pagina
    <div className="bg-white flex flex-col" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <Header />

      <main style={{ 
        flex: 1, 
        width: "100%", 
        height: "100%", 
        position: "relative" 
      }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQ0UBAQs6GYgQBo387LBWB4FP7TRqKh5J4A0INrxOIUgjkfwcAwlANsKgZ1J4W-SmS1d0dRgaI4lj3r/pub?embedded=true"
          title="Curriculum Vitae"
          style={{ 
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%", 
            height: "100%", 
            border: "none" 
          }}
        />
      </main>
    </div>
  );
}