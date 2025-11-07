import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Palette, Zap, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BeautifulWebDesign = () => {
  useEffect(() => {
    document.title = "Beautiful Web Design Services | ThinkCraft";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Modern, responsive, and high-performance web design that converts. Beautiful websites crafted by ThinkCraft.");
    }
  }, []);

  const features = [
    { icon: Palette, title: "Modern UI/UX", description: "Beautifully designed interfaces that enhance user experience and engagement." },
    { icon: Zap, title: "Fast & Responsive", description: "Optimized performance for every screen" },
    { icon: Target, title: "Conversion-Focused Architecture", description: "Strategically designed layouts to maximize sales and lead generation." },
    { icon: Award, title: "Custom Branding", description: "Tailored design that reflects your brand’s identity and vision." }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ backgroundColor: '#e8f1fd' }}>
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/" },
            { label: "Beautiful Web Design" }
          ]} />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-heading-1 md:text-heading-1 font-bold mb-6" style={{ color: '#092c5d' }}>
              Modern Websites That Convert
            </h1>
            
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop" 
                alt="Beautiful modern web design showcase" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

             <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 max-w-3xl mx-auto leading-snug"
  style={{ color: '#092c5d'}}>
Modern, Responsive, and Conversion-Focused Websites
            </h2>

            {/* Paragraph Section */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-justify"
  style={{ color: '#092c5d' }}

            >
              Establishing your digital identity starts with a foundational piece: your website. It functions as the virtual counterpart to the physical business space you know and recognize, and because of that, creating a powerful initial impact on your audience is as essential as it is in the tangible world. Embracing this fundamental concept, our expertise lies in fashioning aesthetically pleasing, high-functioning websites tailored to not just draw the attention of those who visit but also to captivate and immerse them in a meaningful interaction. Our intention is to foster a connection that propels them towards actions that culminate in successful conversions.
<br /><br />
We offer a suite of detailed design services that integrate a plethora of elements carefully chosen and skillfully combined, aiming to provide an outstanding and seamless user experience on your website. Whether it's through the careful curation of visual content, the strategic structuring of user interfaces, or the technical underpinnings that ensure quick load times and responsive design, we focus our efforts on every facet to ensure that your online representation stands out in the digital marketplace. The result is a well-coordinated symphony of design elements working in harmony to present your brand in the best possible light.
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
              Your website is your best salesperson. Let it shine.
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

export default BeautifulWebDesign;