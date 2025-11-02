import { useState } from "react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/Iniyaa21" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/iniyaa-paari/" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:iniyaapaari@gmail.com" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="terminal-text inline-block text-primary">Contact</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
            <p className="mt-6 text-lg text-muted-foreground">
              Let's build something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form - Terminal Style */}
            <div className="glass-card p-8 animate-slide-in-left">
              <div className="space-y-6">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">contact.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm text-primary terminal-text">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-primary terminal-text">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-primary terminal-text">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] resize-none"
                      placeholder="Your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full glass-card-hover py-3 font-semibold text-primary border-primary/50 hover:bg-primary/10 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Social Links & Info */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Quick Info */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 glow-text-secondary">Let's Connect</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities
                    to be part of your vision.
                  </p>
                  <p className="leading-relaxed">
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">Find me on</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="glass-card p-6 border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <span className="text-sm font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
            <p>
              Designed & Built by Iniyaa • {new Date().getFullYear()}
            </p>
            <p className="mt-2 font-mono text-xs text-primary/50">
              {"<Code with passion, design with purpose />"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
