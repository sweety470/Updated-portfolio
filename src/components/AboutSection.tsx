import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb, Award } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "4 Years Experience",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively in agile development teams"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Passionate about solving real-world problems"
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Building high-performance, scalable applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                MERN Stack Developer with a Passion for Innovation
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With <strong className="text-foreground">4 years of experience</strong> in JavaScript (ES5/ES6), TypeScript, Node.js, Express.js, React.js, MongoDB, and Nest.js, I specialize in creating robust, scalable web applications.
                </p>
                <p>
                  My expertise spans backend APIs, full-stack applications, and scalable solutions. I've had the privilege of working with innovative companies including <strong className="text-primary">Infostride</strong>, <strong className="text-primary">Webcom</strong>, and <strong className="text-primary">Teq Mavens</strong>.
                </p>
                <p>
                  I'm passionate about building high-performance applications that solve real-world problems and deliver exceptional user experiences. I thrive in collaborative environments and enjoy staying at the forefront of modern web development technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}