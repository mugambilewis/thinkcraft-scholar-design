import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Target, Users, Lightbulb, Rocket, Award, TrendingUp } from "lucide-react";

const MoreAboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Decorative floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-heading-1 sm:text-heading-1 lg:text-heading-1 font-bold text-foreground mb-6 leading-tight">
            Who We Are — The Team Behind ThinkCraft
          </h1>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ThinkCraft Scholar & Design Solutions is a creative and academic hub built to support learners and innovators globally. Our mission is to bridge the gap between <strong>knowledge and creation</strong>, providing design and documentation solutions that inspire confidence and success.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-heading-2 sm:text-heading-2 font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              We understand that excellence is built on clarity, precision, and creativity. Our multidisciplinary team includes CAD experts, academic writers, developers, and designers who share one goal: to help you deliver your best work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {[
              {
                icon: Target,
                title: "Integrity",
                description: "Every project is handled with authenticity and care."
              },
              {
                icon: Lightbulb,
                title: "Creativity",
                description: "We believe every problem deserves a unique solution."
              },
              {
                icon: TrendingUp,
                title: "Precision",
                description: "Accuracy defines everything we do."
              },
              {
                icon: Award,
                title: "Collaboration",
                description: "We work with you, not for you."
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-heading-3 font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-heading-2 sm:text-heading-2 font-bold text-foreground mb-6">
                Our Promise
              </h2>
              <div className="space-y-6 text-body text-muted-foreground leading-relaxed">
                <p>
                  We aim to make every client experience simple, supportive, and successful. Whether you need help with a report, a 3D design, or a website concept, ThinkCraft is your partner in excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {[
                { label: "Projects Completed", value: "500+" },
                { label: "Happy Clients", value: "200+" },
                { label: "Team Members", value: "50+" },
                { label: "Countries Served", value: "25+" }
              ].map((stat, index) => (
                <Card 
                  key={index}
                  className="p-8 text-center bg-gradient-to-br from-card to-secondary/20 hover:shadow-[var(--glow-teal)] transition-all duration-300"
                >
                  <div className="text-heading-2 font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <h2 className="text-heading-2 sm:text-heading-2 font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us via WhatsApp: +1 (415) 418-5227 or reach out through our contact form. We'll guide you through every step.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-primary text-primary-foreground hover:shadow-[var(--glow-teal)] hover:scale-105 transition-all duration-300 text-lg px-10 py-6 rounded-xl font-semibold"
            >
              Contact Us
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MoreAboutUs;
