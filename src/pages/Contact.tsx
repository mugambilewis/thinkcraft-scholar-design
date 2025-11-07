import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      {/* Decorative floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-heading-1 sm:text-heading-1 lg:text-heading-1 font-bold text-foreground mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="text-primary">Great Together</span>
          </h1>
          <p className="text-body-large sm:text-body-large text-muted-foreground max-w-2xl mx-auto">
            Get in touch — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <Card className="p-8 sm:p-12 bg-card shadow-[var(--shadow-medium)] animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold text-lg">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 text-lg border-border bg-background/50 focus:border-primary focus:ring-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold text-lg">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 text-lg border-border bg-background/50 focus:border-primary focus:ring-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-semibold text-lg">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[180px] text-lg border-border bg-background/50 focus:border-primary focus:ring-primary rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary text-primary-foreground hover:shadow-[var(--glow-teal)] hover:scale-[1.02] transition-all duration-300 text-lg font-semibold rounded-xl"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Illustration */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Illustration Card */}
              <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20 rounded-3xl shadow-[var(--shadow-soft)]">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="w-32 h-32 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full animate-float" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                  </div>
                </div>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-heading-3 font-bold text-foreground mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email us",
                      value: "hello@company.com",
                      href: "mailto:hello@company.com"
                    },
                    {
                      icon: Phone,
                      label: "Call us",
                      value: "+1 (555) 123-4567",
                      href: "tel:+15551234567"
                    },
                    {
                      icon: MapPin,
                      label: "Visit us",
                      value: "123 Innovation Street, Tech City, TC 12345",
                      href: "#"
                    }
                  ].map((item, index) => (
                    <Card 
                      key={index}
                      className="p-6 bg-card hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1"
                    >
                      <a 
                        href={item.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-muted-foreground mb-1">
                            {item.label}
                          </div>
                          <div className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Card className="p-10 bg-gradient-to-r from-card to-secondary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Response Time
            </h3>
            <p className="text-lg text-muted-foreground">
              We typically respond to all inquiries within <span className="text-primary font-semibold">24 hours</span> during business days. 
              For urgent matters, please call us directly.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
