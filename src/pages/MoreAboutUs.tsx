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
            Driven by Innovation,
            <br />
            <span className="text-primary">Defined by Results</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We harness the power of AI and automation to transform businesses, 
            delivering measurable impact through cutting-edge technology and strategic thinking.
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering businesses to thrive in the digital age through intelligent automation and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {[
              {
                icon: Target,
                title: "Purpose-Driven",
                description: "Every solution we build is designed with your business goals at the forefront, ensuring measurable outcomes."
              },
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "We stay ahead of the curve, leveraging the latest AI and automation technologies to give you a competitive edge."
              },
              {
                icon: TrendingUp,
                title: "Growth Focused",
                description: "Our strategies are built to scale, helping you expand operations while maintaining efficiency and quality."
              },
              {
                icon: Award,
                title: "Excellence Guaranteed",
                description: "We're committed to delivering premium quality in every project, backed by rigorous testing and optimization."
              },
              {
                icon: Users,
                title: "Client Partnership",
                description: "Your success is our success. We work closely with you to understand and exceed your expectations."
              },
              {
                icon: Rocket,
                title: "Future Ready",
                description: "Building solutions that don't just meet today's needs but anticipate tomorrow's challenges."
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
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Born from a vision to democratize access to cutting-edge technology, 
                  we've built a company that bridges the gap between innovation and practical business solutions.
                </p>
                <p>
                  What started as a small team of passionate technologists has grown into 
                  a dynamic organization serving clients across industries, always maintaining 
                  our core commitment to excellence and innovation.
                </p>
                <p>
                  Today, we're proud to be at the forefront of the AI revolution, helping 
                  businesses of all sizes harness the transformative power of automation 
                  and intelligent systems.
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your goals.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-primary text-primary-foreground hover:shadow-[var(--glow-teal)] hover:scale-105 transition-all duration-300 text-lg px-10 py-6 rounded-xl font-semibold"
            >
              Get in Touch
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MoreAboutUs;
