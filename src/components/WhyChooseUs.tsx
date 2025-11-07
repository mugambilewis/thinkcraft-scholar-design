import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "AI-Powered Marketing",
      description: "Automate email follow-ups, chatbots, and customer engagement"
    },
    {
      title: "Built-in Lead Generation", 
      description: "Capture and nurture leads with intelligent forms & pop-ups"
    },
    {
      title: "SEO & Speed Optimized",
      description: "Fast-loading and Google-friendly for maximum visibility"
    },
    {
      title: "Conversion-Focused Design",
      description: "Proven layouts designed to turn visitors into customers"
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
                  WHY CHOOSE A{" "}
                  <span className="text-[#00B3A4]">SMART WEBSITE?</span>
                </h2>
                <p className="text-body-small text-white mb-4">
                  Traditional websites are outdated. Smart Websites are the future.
                </p>
              </div>

              <p className="text-body text-white leading-relaxed mb-6">
                A regular website just sits there. A Smart Website works for you, helping you attract leads, automate tasks, and grow your business without extra effort.
              </p>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#00B3A4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">{feature.title}</span>
                      <span className="text-foreground/80"> - {feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button className="bg-[#00B3A4] hover:bg-[#00B3A4]/90 text-[#092C5D] font-bold px-6 py-2 rounded-lg" onClick={() => navigate('/pricing')}>
                  
                  CHECK PLAN OFFERS
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
