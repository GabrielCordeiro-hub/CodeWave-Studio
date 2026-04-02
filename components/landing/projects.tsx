import Link from "next/link"
import { ExternalLink, Clock } from "lucide-react"

const projects = [
  {
    title: "La Tavola",
    category: "Fine Dining Website",
    description: "An elegant restaurant website with reservation system, menu showcase and immersive atmosphere.",
    href: "https://restaurant-site-main.vercel.app",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "/projects/restaurant.png",
    status: "live",
    gradient: "from-amber-500/20 to-amber-900/20",
  },
  {
    title: "CodeWave",
    category: "SaaS Landing Page",
    description: "Modern landing page for tech infrastructure with features showcase, automated scaling and sleek dark UI.",
    href: "https://sass-landing-page-three-eta.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/sass-landing.png",
    status: "live",
    gradient: "from-blue-500/20 to-indigo-900/20",
  },
  {
    title: "AURA Store",
    category: "Minimalist E-commerce",
    description: "A premium tech gadget store with clean product filtering, detailed search and minimalist aesthetic.",
    href: "https://mini-ecommerce-woad.vercel.app",
    tags: ["React", "State Management", "Tailwind"],
    image: "/projects/ecommerce.png",
    status: "live",
    gradient: "from-slate-500/20 to-slate-900/20",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-cw-purple/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cw-purple">
            MY WORK
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Explore my latest builds — each one crafted with precision, 
            optimized for performance and focused on delivering results.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden border-b border-border">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <ExternalLink className="h-3 w-3" />
                    VISIT SITE
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide text-cw-blue uppercase">
                    {project.category}
                  </span>
                  <div className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Live Project" />
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold text-foreground group-hover:text-cw-purple transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
