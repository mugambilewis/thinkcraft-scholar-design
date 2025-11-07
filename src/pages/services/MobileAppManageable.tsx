import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Smartphone, Activity, Bell, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MobileAppManageable = () => {
  useEffect(() => {
    document.title = "Mobile App Manageable Services | ThinkCraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Manage your website from anywhere with seamless mobile app integration. Control and monitor your site on the go with ThinkCraft.");
    }
  }, []);

  const features = [
    { icon: Smartphone, title: "Real-Time Updates", description: "Easily update content, add new pages, and make quick changes." },
    { icon: Activity, title: "Live Analytics and Reporting", description: " Monitor traffic, lead generation, and performance from your phone." },
    { icon: Bell, title: "Instant Lead Notifications", description: " Get instant alerts when someone fills out a form or interacts with your chatbot." },
    { icon: Database, title: "Direct CRM Access on Mobile", description: "Manage your leads and customer interactions directly from your mobile device." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Mobile App Manageable" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-6" style={{ color: '#092c5d' }}>
              Manage Your Website from Anywhere
            </h1>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop" 
                alt="Mobile app management and website control" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

             <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
  style={{ color: '#092c5d'}}>
             Seamless Website Management from Your Mobile Device
            </h2>

            {/* Paragraph Section */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-justify"
  style={{ color: '#092c5d' }}

            >
              Managing and maintaining your website should never feel like a chore, especially not when life demands that you be anywhere but at your desk. That's why we've designed a seamless mobile app integration, empowering you to take the reins of your digital presence with ease, regardless of your location. With this innovative integration at your fingertips, you're equipped to handle every single facet of your website's functionality round the clock.
<br /><br />
Our mobile app integration offers a suite of features that ensures your website management is a smooth, uninterrupted process. This includes an intuitive user interface that allows for hassle-free navigation and control from your smartphone or tablet. You'll find the power to update content, modify design elements, analyze traffic statistics, and much more, is now in the palm of your hand. We've crafted this experience so that whether you're amidst the hustle of the city or on a remote getaway, your website is readily accessible at a moment's notice. With our robust mobile app integration, you can enjoy the freedom and flexibility to manage your online presence anytime, anywhere, with absolute confidence.


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
              
In this program, you will experience:
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
              Freedom, control, and performance in one experience.
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

export default MobileAppManageable;