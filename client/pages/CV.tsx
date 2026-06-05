import Header from "../components/Header";

export default function CV() {
  return (
    <div className="bg-white flex flex-col h-screen w-full overflow-hidden">
      <Header />

      <main className="flex-1 w-full h-full relative">
        <iframe
          // Link pulito alla tua pagina 
          src="https://paginematteo.framer.website/archivia"
          title="Curriculum Vitae"
          // Aggiungiamo 'allow' per dare i permessi necessari al browser
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-0 left-0 w-full h-full border-none"
        />
      </main>
    </div>
  );
}