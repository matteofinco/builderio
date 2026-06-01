import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-serif font-light tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-lg font-light text-gray-600 leading-relaxed">
              I'm always interested in discussing new projects, creative ideas, or opportunities to create something remarkable together.
            </p>
          </div>

          <div className="space-y-12">
            {/* Email */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Email</p>
              <a
                href="mailto:hello@matteofinco.com"
                className="text-2xl font-serif font-light text-gray-800 hover:text-gray-600 transition-colors break-all"
              >
                hello@matteofinco.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Phone</p>
              <a
                href="tel:+39-123-456-7890"
                className="text-2xl font-serif font-light text-gray-800 hover:text-gray-600 transition-colors"
              >
                +39 (123) 456 7890
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Location</p>
              <p className="text-2xl font-serif font-light text-gray-800">
                Milan, Italy
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Social</p>
              <div className="space-y-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-light text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-light text-gray-800 hover:text-gray-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-light text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-24 pt-12 border-t border-gray-200">
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
