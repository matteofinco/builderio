import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Designs from "./pages/Designs";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Archivia from "./pages/Archivia";
import Pizzamente from "./pages/Pizzamente";
import Nando from "./pages/Nando";
import TTable from "./pages/TTable";
import WaffleMaker from "./pages/WaffleMaker";

import Snake from "./pages/Snake";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Prop from "./pages/prop";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/project/:projectId" element={<Project />} />
      <Route path="/archivia" element={<Archivia />} />
      <Route path="/pizzamente" element={<Pizzamente />} />
      <Route path="/nando" element={<Nando />} />
      <Route path="/ttable" element={<TTable />} />
      <Route path="/wafflemaker" element={<WaffleMaker />} />
  
      <Route path="/snake" element={<Snake />} />
      <Route path="/about" element={<About />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/prop" element={<Prop />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
