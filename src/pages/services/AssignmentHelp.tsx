import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Book, FileEdit, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AssignmentHelp = () => {
  useEffect(() => {
    document.title = "Assignment Help & Tutoring | ThinkCraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Personalized academic assistance for international students, helping you complete coursework, essays, and technical assignments on time.");
    }
  }, []);

  const features = [
    { icon: Book, title: "Essays & Coursework Help", description: "Comprehensive support for essays and coursework across all subjects." },
    { icon: FileEdit, title: "Research Summaries & Reflections", description: "Well-structured summaries and thoughtful reflections on research topics." },
    { icon: CheckCircle, title: "Proofreading & Grammar Checks", description: "Thorough proofreading to ensure error-free, polished submissions." },
    { icon: Users, title: "One-on-One Tutoring Sessions", description: "Personalized tutoring to help you understand concepts and improve your work." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Assignment Help & Tutoring" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-6" style={{ color: '#092c5d' }}>
              Guided Learning. Reliable Results.
            </h1>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="/images/Close-up of someone.jpg" 
                alt="Assignment Help and Tutoring" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
              style={{ color: '#092c5d'}}>
              Personalized academic support for international students
            </h2>

            {/* Paragraph Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 max-w-3xl mx-auto"
            >
              <p className="text-body mb-4 leading-relaxed text-justify" style={{ color: '#092c5d' }}>
                We provide personalized academic assistance for international students, helping you complete coursework, essays, and technical assignments on time — while ensuring you understand every concept behind it.
              </p>
              <p className="text-body leading-relaxed text-justify" style={{ color: '#092c5d' }}>
                We promote understanding over shortcuts, ensuring your work reflects your voice and academic integrity.
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
              Ready to get the academic support you need?
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

export default AssignmentHelp;

