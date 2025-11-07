import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Search, Target, Code, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SEO = () => {
  useEffect(() => {
    document.title = "SEO Services | Roboleads";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Boost search visibility and grow your organic traffic with professional SEO strategies from Roboleads.");
    }
  }, []);

  const features = [
    { icon: Target, title: "Keyword Optimization", description: " We conduct in-depth research to target the best keywords for your business." },
    { icon: Search, title: "Content Strategy", description: " Engaging, optimized content that drives traffic and increases user engagement." },
    { icon: Code, title: "Technical SEO", description: " Optimizing your website’s structure, speed, and mobile responsiveness." },
    { icon: BarChart, title: "Analytics and Performance Tracking", description: " Real-time monitoring to measure performance and improve rankings." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "SEO" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-6" style={{ color: '#092c5d' }}>
              Rank Higher, Get Found, Grow Faster
            </h1>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                alt="SEO optimization and search engine ranking" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
  style={{ color: '#092c5d'}}>
              Optimizing your website for maximum visibility.
            </h2>

            {/* Paragraph Section */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-justify"
  style={{ color: '#092c5d' }}

            >
              In the modern digital arena, simply owning a website doesn't cut it anymore. To truly stand out, you need comprehensive SEO tactics that not only direct traffic towards your site but also elevate your visibility in search engine results. Our expertise lies in bolstering your online presence, guaranteeing that your website not only climbs the ranks on Google but also captivates and draws in the precise audience you're targeting. Through meticulous analysis and innovative strategies, we're committed to ensuring your digital footprint is prominent, ensuring you reap the benefits of increased visibility and traffic tailored to your unique brand and content.
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
              Stay ahead of competitors with data-driven SEO excellence.
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

export default SEO;