import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div 
      className="bg-white flex flex-col" 
      style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}
    >
      <Header />

      {/* Cambiato in overflow-hidden per bloccare tassativamente ogni tipo di scroll */}
      <main className="flex-1 px-8 py-20 overflow-hidden" style={{ width: "100%", height: "100%" }}>
        <div className="max-w-3xl mx-auto h-full flex flex-col justify-between">
          
          {/* Blocco testi principale */}
          <div>
            <div className="mb-16">
              <h1 className="text-5xl font-serif font-light tracking-tight mb-6">
                Get in touch
              </h1>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Open to collaborations, new product ideas, and projects that value thoughtful design and making.
              </p>
            </div>

            <div className="space-y-12">
              {/* Email */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Email</p>
                <a
                  href="mailto:matteofinco05@gmail.com"
                  className="text-2xl font-serif font-light text-gray-800 hover:text-gray-600 transition-colors break-all"
                >
                  matteofinco05@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Phone</p>
                <a
                  href="tel:+39-320-053-7133"
                  className="text-2xl font-serif font-light text-gray-800 hover:text-gray-600 transition-colors"
                >
                  +39 320 053 7133
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Location</p>
                <p className="text-2xl font-serif font-light text-gray-800">
                  Vicenza, Italy
                </p>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Social</p>
                <div className="space-y-2">
                  <a
                    href="https://www.linkedin.com/in/finco-matteo-2k05/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base font-light text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back to home - Spinto elegantemente in fondo dal flexbox senza bisogno di scrollare */}
          <div className="pt-6 border-t border-gray-200">
            <Link
              to="/"
              className="text-sm font-light text-gray-600 hover:text-black transition-colors"
            >
              ← Back to home
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}