import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Teq Mavens",
      position: "Full-Stack Developer",
      duration: "2024 - Present",
      location: "On-site",
      description: "Leading full-stack development projects using MERN stack, TypeScript, and Nest.js. Architecting scalable solutions and mentoring junior developers.",
      technologies: ["React.js", "Nest.js", "TypeScript", "MongoDB", "Node.js"],
      achievements: [
        "Architected and developed 3 major client applications",
        "Improved application performance by 40% through optimization",
        "Led a team of 3 developers on critical projects"
      ]
    },
    {
      company: "Webcom",
      position: "Full-Stack Developer", 
      duration: "2023 - 2024",
      location: "On-site",
      description: "Developed and maintained full-stack applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "JavaScript"],
      achievements: [
        "Delivered 5+ client projects on time and within budget",
        "Implemented responsive designs that improved user engagement by 35%",
        "Established CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      company: "Infostride",
      position: "Backend Developer",
      duration: "2021 - 2023", 
      location: "On-site",
      description: "Specialized in backend development using Node.js, Express.js, and MongoDB. Built robust APIs and database architectures for various client projects.",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript"],
      achievements: [
        "Developed 10+ REST APIs serving 1000+ daily active users",
        "Reduced database query time by 50% through optimization",
        "Maintained 99.9% uptime for production applications"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
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
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 years of experience building scalable applications across different industries
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-semibold text-foreground">
                            {experience.company}
                          </h3>
                        </div>
                        <h4 className="text-lg text-primary font-medium mb-3">
                          {experience.position}
                        </h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-foreground mb-2">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-primary mt-1.5">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-foreground mb-2">
                            Technologies:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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