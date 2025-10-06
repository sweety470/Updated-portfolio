import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={professionalHeadshot}
              alt="Sweety Goel - Professional Headshot"
              className="w-48 h-48 rounded-full mx-auto mb-8 shadow-hero border-4 border-white/20"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Sweety Goel
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl text-white/90 mb-6 font-medium"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable, modern, and user-friendly web applications with 4 years of experience in full-stack development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToProjects}
              variant="hero"
              size="lg"
              className="min-w-[180px]"
            >
              View Projects
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline-hero"
              size="lg"
              className="min-w-[180px]"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://www.linkedin.com/in/sweety-goel-31aab91a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a> */}
            <a
              href="mailto:goelsweety73@gmail.com"
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-white/60 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}