import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, Workflow, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom"; // ← Keep this
import { useEffect } from "react";

const AutomationAI = () => {
  useEffect(() => {
    document.title = "Automation & AI Services | ThinkCraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Scale your business with AI-powered automation. Save time and boost efficiency with intelligent solutions from ThinkCraft.");
    }
  }, []);

  const features = [
    { icon: Bot, title: "Smart AI Chatbots", description: " Provide instant customer support and guide visitors through their journey." },
    { icon: Sparkles, title: "Personalized User Experiences", description: " Tailored website experiences based on user behavior and preferences." },
    { icon: Workflow, title: "Email & Workflow Automation", description: "Automatically follow up with leads and nurture relationships." },
    { icon: TrendingUp, title: "CRM Automations Including Lead Scoring", description: " Automate tasks such as lead scoring, customer segmentation, and sales follow-ups." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Automation & AI" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-8" style={{ color: '#092c5d' }}>
              Work Smarter with AI-Powered Automation
            </h1>
            
            {/* Image Below Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" 
                alt="AI and Automation Technology"
                className="w-full h-auto object-cover"
              />
            </motion.div>

             <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
  style={{ color: '#092c5d'}}>
              AI-Driven Solutions to Save Time & Boost Efficiency
            </h2>

            {/* Paragraph After Image */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-justify"
  style={{ color: '#092c5d' }}

            >
              Automation and artificial intelligence (AI) are rapidly transforming the business landscape, revolutionizing the operational methodologies across various industries. In this era of digital advancement, it’s imperative for companies to stay ahead of the curve. Our expertise lies in facilitating the seamless integration of cutting-edge smart automation technologies into your business framework, thereby significantly enhancing efficiency and optimizing workflows.
<br /><br />
We are dedicated to empowering your business with intelligent automation solutions that not only accelerate process execution but also augment customer interactions. By employing the latest AI-driven tools, we assist in meticulously streamlining complex processes, resulting in increased productivity and superior customer satisfaction. Our comprehensive range of services is meticulously designed to ensure that automation is harnessed to its full potential, enabling you to achieve exceptional business outcomes.
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
             Service includes:
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
                  <p style={{ color: '#092c5d', opacity: 0.8 }}>{feature.description}</p>
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
              Scale your business with intelligent automation.
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

export default AutomationAI;