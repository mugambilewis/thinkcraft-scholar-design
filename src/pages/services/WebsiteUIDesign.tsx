import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Code, Palette, Globe, Search, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const WebsiteUIDesign = () => {
  useEffect(() => {
    document.title = "Website & UI Design | ThinkCraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Modern, responsive websites that elevate your online identity. From portfolios to business websites, we craft digital experiences that connect.");
    }
  }, []);

  const features = [
    { icon: Code, title: "Frontend Development (React, Tailwind, Next.js)", description: "Modern, responsive websites built with cutting-edge technologies." },
    { icon: Palette, title: "UI/UX Design & Prototyping", description: "User-centered designs that combine aesthetics with functionality." },
    { icon: Globe, title: "Portfolio & Business Websites", description: "Professional websites tailored to showcase your work and brand." },
    { icon: Search, title: "SEO Optimization", description: "Built-in SEO to ensure your site ranks well and gets found." },
    { icon: Cloud, title: "Full Deployment & Hosting Support", description: "Complete hosting and deployment solutions for your website." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Website & UI Design" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-6" style={{ color: '#092c5d' }}>
              Designs that Speak, Websites that Work
            </h1>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="/images/modern website design.jpg" 
                alt="Website and UI Design" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
              style={{ color: '#092c5d'}}>
              Modern websites that elevate your online identity
            </h2>

            {/* Paragraph Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 max-w-3xl mx-auto"
            >
              <p className="text-body mb-4 leading-relaxed text-justify" style={{ color: '#092c5d' }}>
                We create modern, responsive websites that elevate your online identity. Whether you need a portfolio, a business website, or an academic project site, our team ensures every detail reflects excellence and usability.
              </p>
              <p className="text-body leading-relaxed text-justify" style={{ color: '#092c5d' }}>
                We combine clean design, strong visuals, and performance optimization to help you stand out online and connect with your audience effortlessly.
              </p>
            </motion.div>

            
            <Link to="/contact">
              <Button size="lg" className="text-white hover:opacity-90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ backgroundColor: '#00B3A4' }}>
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-heading-2 md:text-heading-2 font-bold text-center mb-12" style={{ color: '#092c5d' }}>
              Our services include:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <feature.icon className="w-12 h-12 mb-4" style={{ color: '#00B3A4' }} />
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#092c5d' }}>{feature.title}</h3>
                  <p className="text-body" style={{ color: '#092c5d', opacity: 0.9 }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-12 rounded-3xl text-center"
            style={{ background: 'linear-gradient(to bottom right, rgba(0, 179, 164, 0.1), rgba(9, 44, 93, 0.05))' }}
          >
            <p className="text-body mb-8 font-medium" style={{ color: '#092c5d', opacity: 0.9 }}>
              Ready to create a website that stands out?
            </p>
            <h3 className="text-heading-2 font-bold mb-6" style={{ color: '#092c5d' }}>Let's Get Started</h3>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="text-white hover:opacity-90 text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ backgroundColor: '#00B3A4' }}>
                  Contact Us
                </Button>
              </Link>
              <a href="https://wa.me/14154185227" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-white hover:opacity-90 text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ backgroundColor: '#00B3A4' }}>
                  WhatsApp: +1 (415) 418-5227
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WebsiteUIDesign;

