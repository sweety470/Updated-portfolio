import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript (ES5/ES6)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "React.js", level: 95 },
        { name: "HTML5 & CSS3", level: 95 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "Nest.js", level: 85 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 90 },
        // { name: "Git / GitHub", level: 95 },
        { name: "Full-Stack Development", level: 90 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
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
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on scalable, maintainable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                      {category.category}
                    </h3>
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-2">
                            <span className="text-foreground font-medium">
                              {skill.name}
                            </span>
                            <span className="text-primary font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-primary rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1, 
                                delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
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