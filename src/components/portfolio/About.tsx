import { Code2, Lightbulb, Rocket } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing code so clean, even future me might understand it",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Exploring new tech just to see how far I can break it",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth",
      description: "Learning, unlearning, and occasionally relearning the same thing better",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="terminal-text inline-block text-primary">About</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Story Card */}
            <div className="glass-card p-8 space-y-6 animate-slide-in-left">
              <h3 className="text-2xl md:text-3xl font-bold glow-text-secondary">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a CS student driven by curiosity and a passion for creating
                  technology that makes a difference.
                </p>
                <p>
                  My interests span from web dev to AI, always
                  seeking to bridge the gap between complex systems and user-friendly experiences, preferably without breaking either in the process.
                </p>
                <p>
                  When I'm not coding, you'll find me reading thrillers, playing cozy games, or watching documentaries.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-4 animate-slide-in-right">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-card-hover p-6 flex gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
