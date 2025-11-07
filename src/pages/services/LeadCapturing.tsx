import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Database, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LeadCapturing = () => {
  useEffect(() => {
    document.title = "Lead Capturing Services | ThinkCraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Turn visitors into loyal customers with powerful lead capture tools and conversion optimization from ThinkCraft.");
    }
  }, []);

  const features = [
    { icon: Users, title: "Optimized Forms & Landing Pages", description: "High-converting designs that encourage visitors to take action." },
    { icon: MessageSquare, title: "AI-Powered Chatbots", description: "Automated chatbots that engage visitors and collect crucial customer information." },
    { icon: Database, title: "CRM Integration for Seamless Lead Storage", description: "Seamlessly store and manage leads in your customer relationship management system." },
    { icon: Mail, title: "Automated Follow Ups", description: "Nurture leads with scheduled email sequences and personalized messaging." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Lead Capturing" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-6" style={{ color: '#092c5d' }}>
              Turn Visitors into Loyal Customers
            </h1>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" 
                alt="Lead capturing and conversion optimization" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

             <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
  style={{ color: '#092c5d'}}>
              Powerful tools to capture and nurture leads that convert.
            </h2>

            {/* Paragraph Section */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-justify"
  style={{ color: '#092c5d' }}

            >
             Attracting visitors to your site is just the beginning of the journey; the crucial part lies in transforming those site visitors into loyal customers. Our specialized lead capturing solutions are crafted with precision to assist businesses in reaching the pinnacle of their capabilities by leveraging innovative and effective strategies. We focus on the overarching goal of not only drawing attention to your brand but on nurturing visitor engagement in a way that leads to a concrete increase in sales conversions.
<br /><br />
Our system is fine-tuned to identify the most promising prospects for your business and guide them through a tailored conversion funnel. Employing the latest tools and techniques, our solutions are adept at securing the interest of potential clients and compelling them to take action that aligns with your business objectives. By doing so, we ensure that you're not merely gathering traffic, but you're building a solid foundation of customers who will contribute to the sustained growth and success of your enterprise.
            </motion.p>

            
            <Link to="/book-appointment">
              <Button size="lg" className="text-white hover:opacity-90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ backgroundColor: '#00B3A4' }}>
                Book Appointment
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
              Benefits:
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
                  <p style={{ color: '#092c5d', opacity: 0.9 }}>{feature.description}</p>
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
            <p className="text-2xl mb-8 font-medium" style={{ color: '#092c5d', opacity: 0.9 }}>
              Stop losing leads. Start capturing growth today.
            </p>
            <h3 className="text-heading-2 font-bold mb-6" style={{ color: '#092c5d' }}>Ready to grow faster?</h3>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-center items-center">
              <Link to="/pricing">
              <Button size="lg" className="text-white hover:opacity-90 text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ backgroundColor: '#00B3A4' }}>
                Choose Your Plan
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button size="lg" className="text-white hover:opacity-90 text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ backgroundColor: '#00B3A4' }}>
                CALL US +254 729 455 294
              </Button>
            </Link>
            
            <Link to="/book-appointment">
              <Button size="lg" className="text-white hover:opacity-90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105" style={{ backgroundColor: '#00B3A4' }}>
                Book Appointment
              </Button>
            </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LeadCapturing;