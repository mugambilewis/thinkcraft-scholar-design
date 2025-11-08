import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, BarChart, FileCheck, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AcademicAssistance = () => {
  useEffect(() => {
    document.title = "Academic & Project Assistance | ThinkCraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "We help students at all levels structure, research, and present academic projects that meet institutional standards.");
    }
  }, []);

  const features = [
    { icon: FileText, title: "Proposal Writing & Literature Review", description: "Comprehensive proposals and thorough literature reviews that meet academic standards." },
    { icon: BarChart, title: "Data Analysis & Interpretation", description: "Expert analysis and interpretation of research data with clear visualizations." },
    { icon: BookOpen, title: "Final Project Reports", description: "Complete project reports with proper structure, clarity, and academic rigor." },
    { icon: FileCheck, title: "PowerPoint Presentations", description: "Professional presentations that effectively communicate your research findings." },
    { icon: Shield, title: "Turnitin & Plagiarism Guidance", description: "Guidance to ensure your work is original and meets academic integrity standards." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Academic & Project Assistance" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-6" style={{ color: '#092c5d' }}>
              Transforming Research Ideas into Complete Academic Projects
            </h1>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="/images/Team collaborating, pointing.jpg" 
                alt="Academic and Project Assistance" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
              style={{ color: '#092c5d'}}>
              Complete academic project support from proposal to final report
            </h2>

            {/* Paragraph Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 max-w-3xl mx-auto"
            >
              <p className="text-body mb-4 leading-relaxed text-justify" style={{ color: '#092c5d' }}>
                We help students at all levels structure, research, and present academic projects that meet institutional standards. Our experts guide you from your proposal through to your final report, ensuring every chapter communicates clarity and depth.
              </p>
              <p className="text-body leading-relaxed text-justify" style={{ color: '#092c5d' }}>
                We bring academic accuracy and creativity together to help you submit work that is both original and outstanding.
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
              Ready to transform your research ideas into a complete academic project?
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

export default AcademicAssistance;

