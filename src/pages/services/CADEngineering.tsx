import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { DraftingCompass, Box, Building2, FileCode, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CADEngineering = () => {
  useEffect(() => {
    document.title = "CAD & Engineering Design | ThinkCraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "High-quality CAD drawings, 3D models, and simulations for students and professionals in mechanical, civil, and architectural fields.");
    }
  }, []);

  const features = [
    { icon: DraftingCompass, title: "2D Drafting and 3D Modeling", description: "Precision drawings and detailed 3D models for mechanical and architectural projects." },
    { icon: Building2, title: "Mechanical and Civil Design Projects", description: "Complete design solutions for engineering and construction projects." },
    { icon: FileCode, title: "Revit, AutoCAD, SolidWorks, Fusion 360 Support", description: "Expert support across all major CAD platforms and software." },
    { icon: ImageIcon, title: "Rendering & Visualization", description: "Professional renderings and visualizations that bring your designs to life." },
    { icon: Box, title: "Report Diagrams and Model Integration", description: "Seamless integration of CAD models into technical reports and documentation." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "CAD & Engineering Design" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-6" style={{ color: '#092c5d' }}>
              From Sketch to Model — Precision that Speaks Design
            </h1>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="/images/web development.jpg" 
                alt="CAD and Engineering Design" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
              style={{ color: '#092c5d'}}>
              Precision CAD solutions for students and professionals
            </h2>

            {/* Paragraph Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 max-w-3xl mx-auto"
            >
              <p className="text-body mb-4 leading-relaxed text-justify" style={{ color: '#092c5d' }}>
                We provide high-quality CAD drawings, 3D models, and simulations for students and professionals in mechanical, civil, and architectural fields. Our CAD experts ensure every design is both technically accurate and visually compelling.
              </p>
              <p className="text-body leading-relaxed text-justify" style={{ color: '#092c5d' }}>
                Our approach focuses on delivering engineering clarity and professional presentation — helping students impress their examiners and professionals deliver with confidence.
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
              We assist with:
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
              Ready to bring your engineering ideas to life?
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

export default CADEngineering;

