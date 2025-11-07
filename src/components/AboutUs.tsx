import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-12 md:py-16 bg-[#e8f1fd]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div className="order-1">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#00B3A4] mb-2">About Us</p>
                <h2 className="text-heading-1 md:text-heading-1 font-bold mb-3 text-[#092C5D]">
                  WHO WE ARE
                </h2>
                <p className="text-body-small text-[#092C5D] mb-4">
                  Building the Future of Smart Websites
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-body text-[#092C5D]/80 leading-relaxed">
                  At Roboleads, we specialize in creating AI-powered, SEO-optimized, and automation-driven websites that work for you 24/7. We believe that a website should be more than just an online presence—it should be a powerful business tool that attracts leads, automates processes, and drives revenue effortlessly.
                </p>
                
                <p className="text-body text-[#092C5D]/80 leading-relaxed">
                  With years of experience in web design, digital marketing, and AI automation, our team is dedicated to helping businesses scale online without the hassle of traditional web development.
                </p>
              </div>

              <div className="pt-2">
                <Button className="bg-[#00B3A4] hover:bg-[#00B3A4] /90 text-[#092C5D] font-bold px-6 py-2 rounded-lg"
                 onClick={() => navigate('/more-about-us')}>
                  MORE ABOUT US
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="order-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Background elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-200 rounded-lg"></div>
              
              {/* Main illustration - Team at desk */}
              <div className="relative z-10">

                {/* Desk */}
                
                <img
                  src="/images/Team meeting around.jpg"
                  alt="Team working at desk illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
