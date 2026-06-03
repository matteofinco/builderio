import Header from "../components/Header";

export default function CV() {
  return (
    <div className="bg-white flex flex-col h-screen w-full overflow-hidden">
      <Header />

      <main className="flex-1 w-full h-full relative">
        <iframe
          // Assicurati che questo sia il link ottenuto da "Share to web"
          src="https://half-throat-ae1.notion.site/373c6476521580acabffe3aba9e221f1"
          title="Curriculum Vitae"
          className="absolute top-0 left-0 w-full h-full border-none"
        />
      </main>
    </div>
  );
}