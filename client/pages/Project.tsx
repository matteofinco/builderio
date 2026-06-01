import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Project() {
  const { projectId } = useParams();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 py-6 px-6 sm:px-12">
        <div className="flex items-center justify-between">
          <Link
            to="/portfolio"
            className="text-sm text-gray-600 hover:text-black transition-colors tracking-wide"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal">Project</h1>
          <div className="w-24" />
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 sm:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <h2 className="font-serif text-5xl font-normal text-black mb-6">
              {projectId?.split("-").join(" ").charAt(0).toUpperCase() + projectId?.split("-").join(" ").slice(1)}
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              This project detail page is ready to be customized.
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-600 text-sm">
                  Hero image and project details coming soon.
                </p>
              </div>

              <p className="text-sm text-gray-500 tracking-wide">
                Continue the conversation to have this page generated with full project details, images,
                editorial layout, and specifications.
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
