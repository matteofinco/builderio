import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main content */}
      <main className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Left column - Section titles */}
            <div className="space-y-24">
              <h2 className="text-4xl font-serif font-light">Biography</h2>
              <h2 className="text-4xl font-serif font-light">Philosophy</h2>
              <h2 className="text-4xl font-serif font-light">Education</h2>
              <h2 className="text-4xl font-serif font-light">Software</h2>
              <h2 className="text-4xl font-serif font-light">Manufacturing</h2>
              <h2 className="text-4xl font-serif font-light">Experience</h2>
            </div>

            {/* Right column - Content */}
            <div className="col-span-2 space-y-24">
              {/* Biography */}
              <section>
                <p className="text-base font-light leading-relaxed text-gray-800 mb-6 max-w-2xl">
                  Alessia Rossi is a Product and Interior Designer based in Milan, Italy. With a
                  focus on the intersection of form and function, her work explores how thoughtful
                  design can transform everyday objects and spaces into moments of quiet elegance.
                </p>
                <p className="text-base font-light leading-relaxed text-gray-600 max-w-2xl">
                  Her design practice is rooted in the belief that complexity achieved through
                  clarity is the mark of true sophistication. Every project begins with a deep
                  understanding of context, materiality, and the human experience.
                </p>
              </section>

              {/* Design Philosophy */}
              <section>
                <p className="text-base font-light leading-relaxed text-gray-800 mb-6 max-w-2xl">
                  Design is a discipline of subtraction. Rather than adding layers of decoration
                  or unnecessary features, the goal is to distill each project to its essential
                  truth—the balance between what is necessary and what is beautiful.
                </p>
                <p className="text-base font-light leading-relaxed text-gray-600 max-w-2xl">
                  This philosophy is informed by the minimalist tradition in design, the
                  precision of Swiss typography, and the timeless elegance of Scandinavian
                  craftsmanship. Every material choice, every proportion, every edge is
                  considered with intention.
                </p>
              </section>

              {/* Education */}
              <section>
                <div className="space-y-6">
                  <div>
                    <p className="font-light text-sm uppercase tracking-widest text-gray-500 mb-1">
                      2020–2022
                    </p>
                    <p className="text-base font-light text-gray-800 mb-2">
                      Master's in Product Design
                    </p>
                    <p className="text-base font-light text-gray-600">
                      Politecnico di Milano, Milan
                    </p>
                  </div>
                  <div>
                    <p className="font-light text-sm uppercase tracking-widest text-gray-500 mb-1">
                      2017–2020
                    </p>
                    <p className="text-base font-light text-gray-800 mb-2">
                      Bachelor's in Design
                    </p>
                    <p className="text-base font-light text-gray-600">
                      Università IUAV di Venezia, Venice
                    </p>
                  </div>
                </div>
              </section>

              {/* Software Skills */}
              <section>
                <div className="space-y-3">
                  <p className="text-base font-light text-gray-800">Rhino 3D</p>
                  <p className="text-base font-light text-gray-800">Grasshopper</p>
                  <p className="text-base font-light text-gray-800">Adobe Creative Suite</p>
                  <p className="text-base font-light text-gray-800">Figma</p>
                  <p className="text-base font-light text-gray-800">KeyShot</p>
                  <p className="text-base font-light text-gray-800">Cinema 4D</p>
                </div>
              </section>

              {/* Manufacturing Skills */}
              <section>
                <div className="space-y-3">
                  <p className="text-base font-light text-gray-800">Woodworking</p>
                  <p className="text-base font-light text-gray-800">Stone and marble working</p>
                  <p className="text-base font-light text-gray-800">Metal fabrication</p>
                  <p className="text-base font-light text-gray-800">Ceramics and glazing</p>
                  <p className="text-base font-light text-gray-800">Textile design and weaving</p>
                </div>
              </section>

              {/* Professional Experience */}
              <section>
                <div className="space-y-8">
                  <div>
                    <p className="font-light text-sm uppercase tracking-widest text-gray-500 mb-1">
                      2022 – Present
                    </p>
                    <p className="text-base font-light text-gray-800 mb-2">
                      Senior Product Designer
                    </p>
                    <p className="text-base font-light text-gray-600 mb-3">
                      Studio Architetture, Milan
                    </p>
                    <p className="text-sm font-light text-gray-600 leading-relaxed max-w-xl">
                      Leading the product design division with focus on furniture and interior
                      collections. Collaborating with international manufacturers and design
                      studios.
                    </p>
                  </div>
                  <div>
                    <p className="font-light text-sm uppercase tracking-widest text-gray-500 mb-1">
                      2021 – 2022
                    </p>
                    <p className="text-base font-light text-gray-800 mb-2">
                      Interior Design Associate
                    </p>
                    <p className="text-base font-light text-gray-600 mb-3">
                      Minimalist Spaces Studio, Venice
                    </p>
                    <p className="text-sm font-light text-gray-600 leading-relaxed max-w-xl">
                      Designed residential and commercial interiors with emphasis on spatial
                      clarity and material authenticity. Project management and client coordination.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-8 text-center text-xs text-gray-400 tracking-wide">
        <p>© 2024 Alessia Rossi. All rights reserved.</p>
      </footer>
    </div>
  );
}
