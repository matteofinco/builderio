import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 py-6 px-6 sm:px-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-black transition-colors tracking-wide"
          >
            ← Back
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">About & CV</h1>
          <div className="w-12" />
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 sm:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center py-20">
            <h2 className="font-serif text-5xl font-normal text-black mb-6">
              About & Curriculum Vitae
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Your professional profile and experience are ready to be displayed.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
                <svg
                  className="w-16 h-16 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-gray-600 text-sm">
                  Two-column layout with biography, philosophy, education, and experience.
                </p>
              </div>

              <p className="text-sm text-gray-500 tracking-wide">
                Continue the conversation to generate the About page with a two-column editorial layout,
                biography, design philosophy, education, software and manufacturing skills, and professional
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-12 px-6 sm:px-12 mt-12">
        <div className="text-center text-xs text-gray-400 tracking-wide">
          <p>© 2024 Elena Marrone. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
