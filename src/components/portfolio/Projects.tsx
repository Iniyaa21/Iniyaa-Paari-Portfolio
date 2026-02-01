import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Vyntrix",
      description:
        "A lightweight backend API for tracking and managing user subscriptions",
      tags: ["Javascript", "Node.js", "MongoDB Atlas", "Arcjet", "QStash", "Nodemailer"],
      gradient: "from-primary/20 to-secondary/20",
      repo: "https://github.com/Iniyaa21/Vyntrix",
      demo: "",
    },
    {
      title: "Velora",
      description:
        "A sleek, minimalistic e-commerce web app built with React and Vite. Features product listings, checkout, order tracking, and reusable UI components",
      tags: ["React", "Vite", "Node.js"],
      gradient: "from-secondary/20 to-secondary/5",
      repo: "https://github.com/Iniyaa21/Velora",
      demo: "",
    },
    {
      title: "Codey",
      description:
        "An AI command-line assistant for Python that can read, write, and analyze your code, run scripts, and chat with you — all from your terminal",
      tags: ["Python", "Gemini"],
      gradient: "from-primary/20 to-primary/5",
      repo: "https://github.com/Iniyaa21/Codey",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="terminal-text inline-block text-primary">
                Projects
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card-hover p-8 group relative overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      ) : (
                        <span />
                      )}

                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      ) : (
                        <span />
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-foreground/80 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code-style corner decoration */}
                <div className="absolute top-4 right-4 text-xs text-primary/30 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {"</project>"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
