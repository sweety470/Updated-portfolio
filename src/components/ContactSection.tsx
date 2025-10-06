import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "goelsweety73@gmail.com",
      href: "mailto:goelsweety73@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7015493211",
      href: "tel:+917015493211"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Panipat , India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sweety-goel-31aab91a7/",
      username: "@sweety-goel"
    },
    // {
    //   icon: Github,
    //   label: "GitHub", 
    //   href: "https://github.com/yourusername",
    //   username: "@yourgithub"
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-surface">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Sweety Goel"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="goelsweety73@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your project..."
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}