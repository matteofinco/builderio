import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div 
      className="bg-white flex flex-col" 
      style={{ height: "100vh", width: "100vw", overflow: "hidden", margin: 0, padding: 0 }}
    >
      <Header />

      <main className="flex-1 px-8 flex flex-col justify-center overflow-hidden" style={{ width: "100%", height: "100%" }}>
        <div className="max-w-3xl w-full mx-auto h-full flex flex-col justify-between py-8">
          
          <div className="my-auto space-y-8">
            
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-4">
                Get in touch
              </h1>
              <p className="text-base md:text-lg font-light text-gray-600 leading-relaxed max-w-2xl">
                Open to collaborations, new product ideas, and projects.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:matteofinco05@gmail.com"
                  className="text-xl md:text-2xl font-serif font-light text-gray-800 hover:text-gray-600 transition-colors break-all"
                >
                  matteofinco05@gmail.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Location</p>
                <p className="text-xl md:text-2xl font-serif font-light text-gray-800">
                  Vicenza, Italy
                </p>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Social</p>
                <a
                  href="https://www.linkedin.com/in/finco-matteo-2k05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm md:text-base font-light text-gray-800 hover:text-gray-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 mt-auto">
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