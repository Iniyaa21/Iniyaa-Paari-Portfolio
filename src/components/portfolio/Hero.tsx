import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const roles = [
  "CS Student",
  "Frontend Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Tech Explorer",
];

export const Hero = () => {
  // Role index and typed text state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];

    // If finished typing full text, pause then start deleting
    if (!isDeleting && displayed === fullText) {
      const pause = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(pause);
    }

    // If finished deleting, move to next role and pause before typing
    if (isDeleting && displayed === "") {
      const pause = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
      return () => clearTimeout(pause);
    }

    // Normal typing / deleting speed
    const typingSpeed = isDeleting ? 40 : 100; // ms per character

    const timeout = setTimeout(() => {
      const next = isDeleting
        ? fullText.slice(0, Math.max(0, displayed.length - 1))
        : fullText.slice(0, displayed.length + 1);
      setDisplayed(next);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-muted-foreground terminal-text inline-block">
              Hello World
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              I'm{" "}
              <span className="glow-text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Iniyaa
              </span>
            </h1>
          </div>

          {/* Animated Role */}
          <div className="h-20 flex items-center justify-center">
            <div className="glass-card px-6 md:px-8 py-4 inline-block">
              <p className="text-xl md:text-3xl font-semibold text-secondary min-h-[2.5rem] flex items-center justify-center">
                <span className="whitespace-pre">{displayed}</span>
                <span
                  className="ml-1 w-0.5 h-7 md:h-9 bg-primary animate-blink"
                  aria-hidden="true"
                />
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powered by logic, curiosity, and a questionable sleep schedule.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass-card-hover px-8 py-4 text-lg font-semibold text-primary border-primary/50 hover:bg-primary/10 group"
            >
              View Projects
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass-card px-8 py-4 text-lg font-semibold hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};
