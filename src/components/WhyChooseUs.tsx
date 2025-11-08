import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Experience Across Fields",
      description: "Our diverse team understands both academic and professional needs, offering tailored solutions for every goal."
    },
    {
      title: "Clarity and Communication", 
      description: "We keep every step transparent — updates, drafts, and progress reports ensure your satisfaction."
    },
    {
      title: "Time-Conscious and Detail-Driven",
      description: "We value your deadlines as much as you do. Expect timely delivery with top-tier accuracy."
    },
    {
      title: "Global Reach, Local Understanding",
      description: "We support students and professionals from universities and industries across the USA, UK, Canada, and Australia."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#092C5D]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Side - Illustration Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative z-10">
                {/* Desk */}
                
                <img
                  src="/images/Futuristic AI-powered website concept.jpg"
                  alt="Team working at desk illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#00B3A4] mb-2">Why Choose Us</p>
                <h2 className="text-heading-1 md:text-heading-1 font-bold mb-3 text-white">
                  WHY CHOOSE{" "}
                  <span className="text-[#00B3A4]">THINKCRAFT?</span>
                </h2>
                <p className="text-body-small text-white mb-4">
                  Excellence through collaboration, precision, and global understanding.
                </p>
              </div>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#00B3A4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">{feature.title}</span>
                      <span className="text-white"> - {feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button className="bg-[#00B3A4] hover:bg-[#00B3A4]/90 text-[#092C5D] font-bold px-6 py-2 rounded-lg" onClick={() => navigate('/contact')}>
                  
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
