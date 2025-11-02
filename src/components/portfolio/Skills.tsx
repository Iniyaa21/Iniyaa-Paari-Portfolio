import { Code, Database, Palette, Server, Smartphone, Zap } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      skills: [
        { name: "React", level: 60 },
        { name: "Javascript", level: 70 },
        { name: "Tailwind CSS", level: 50 },
      ],
      color: "primary",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 50 },
        { name: "Python", level: 60 },
        { name: "REST APIs", level: 70 },
      ],
      color: "secondary",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database",
      skills: [
        { name: "PostgreSQL", level: 40 },
        { name: "MongoDB", level: 80 },
        
      ],
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="terminal-text inline-block text-primary">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 space-y-6 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                      category.color === "primary"
                        ? "from-primary/20 to-primary/5"
                        : "from-secondary/20 to-secondary/5"
                    } flex items-center justify-center ${
                      category.color === "primary" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            category.color === "primary"
                              ? "bg-gradient-to-r from-primary to-primary/50"
                              : "bg-gradient-to-r from-secondary to-secondary/50"
                          } ${category.color === "primary" ? "glow-border-primary" : "glow-border-secondary"}`}
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${(index * 100) + (skillIndex * 100)}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tech Stack */}
          <div className="mt-12 glass-card p-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-center">Additional Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Git",
                "CI/CD",
                "Linux",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
