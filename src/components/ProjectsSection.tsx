import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Web App",
      description: "Full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce-app",
      demoUrl: "https://your-ecommerce-demo.com",
      featured: true
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, user authentication, file sharing, and responsive design.",
      techStack: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT"],
      githubUrl: "https://github.com/yourusername/chat-app",
      demoUrl: "https://your-chat-demo.com",
      featured: true
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolios with admin dashboard, dynamic content updates, and SEO optimization.",
      techStack: ["React.js", "Nest.js", "MongoDB", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio-cms",
      demoUrl: "https://your-cms-demo.com",
      featured: false
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative task management tool with project tracking, team collaboration, and progress analytics.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/yourusername/task-manager",
      demoUrl: "https://your-task-demo.com",
      featured: false
    },
    {
      title: "Weather Analytics App",
      description: "Weather tracking application with historical data analysis, forecasting, and interactive charts.",
      techStack: ["React.js", "Node.js", "External APIs", "Chart.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/weather-app",
      demoUrl: "https://your-weather-demo.com",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with post scheduling, engagement tracking, and reporting.",
      techStack: ["React.js", "Nest.js", "TypeScript", "MongoDB", "Social APIs"],
      githubUrl: "https://github.com/yourusername/social-dashboard",
      demoUrl: "https://your-social-demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work demonstrating expertise in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className={`h-full border-0 shadow-card hover:shadow-glow transition-all duration-300 ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                }`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground flex items-center justify-between">
                      {project.title}
                      {project.featured && (
                        <span className="text-xs bg-gradient-primary text-white px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}