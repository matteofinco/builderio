import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

interface ProjectDetails {
  id: string;
  title: string;
  year: string;
  category: string;
  role: string;
  description: string;
  heroImage: string;
  images: Array<{
    url: string;
    caption?: string;
    width: "full" | "half";
  }>;
}

const projectsData: Record<string, ProjectDetails> = {
  "marble-table": {
    id: "marble-table",
    title: "Marble Dining Table",
    year: "2023",
    category: "Product Design",
    role: "Lead Designer",
    description:
      "A sculptural dining table that explores the intersection of materiality and form. Carved from a single block of white Carrara marble, the piece balances monumental weight with refined elegance.",
    heroImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop",
        caption: "The table in its completed form, photographed in natural light",
        width: "full",
      },
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=600&fit=crop",
        caption: "Detail of the edge treatment",
        width: "half",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop",
        caption: "Underside structure",
        width: "half",
      },
      {
        url: "https://images.unsplash.com/photo-1574880655260-b5e9b3ad4f5e?w=1200&h=800&fit=crop",
        caption:
          "The piece invites contemplation through its monumental presence and subtle surface variations",
        width: "full",
      },
    ],
  },
  "minimalist-chair": {
    id: "minimalist-chair",
    title: "Minimalist Chair",
    year: "2023",
    category: "Furniture",
    role: "Product Designer",
    description:
      "Essential seating distilled to its purest form. This chair embodies the philosophy that true elegance comes from the elimination of the unnecessary.",
    heroImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop",
        caption: "Front view",
        width: "full",
      },
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=600&fit=crop",
        caption: "Side profile",
        width: "half",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop",
        caption: "Back detail",
        width: "half",
      },
    ],
  },
};

export default function Project() {
  const { projectId } = useParams();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Link to="/portfolio" className="text-sm font-light text-gray-600 hover:text-black">
          ← Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <div className="w-full h-[60vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <main className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Title and metadata */}
          <div className="mb-16">
            <h1 className="text-6xl font-serif font-light mb-8 tracking-tight">
              {project.title}
            </h1>
            <div className="flex gap-12 text-sm text-gray-600">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Year</p>
                <p className="font-light">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Category
                </p>
                <p className="font-light">{project.category}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Role</p>
                <p className="font-light">{project.role}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-20 max-w-2xl">
            <p className="text-lg font-light leading-relaxed text-gray-800">
              {project.description}
            </p>
          </div>

          {/* Editorial grid */}
          <div className="space-y-12">
            {project.images.map((image, index) => (
              <div key={index}>
                <div
                  className={`overflow-hidden bg-gray-100 mb-4 ${
                    image.width === "full"
                      ? "w-full aspect-[3/2]"
                      : "w-1/2 aspect-square"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                {image.caption && (
                  <p className="text-sm text-gray-600 font-light leading-relaxed max-w-2xl">
                    {image.caption}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Navigation to next project */}
          <div className="mt-24 pt-16 border-t border-gray-200">
            <Link
              to="/portfolio"
              className="text-sm font-light text-gray-600 hover:text-black transition-colors"
            >
              ← Back to portfolio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
