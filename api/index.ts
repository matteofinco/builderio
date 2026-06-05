// api/index.ts
import { createServer } from "../server"; // Importa la funzione che crea il tuo server

const app = createServer();

// Esporta l'app per Vercel
export default app;