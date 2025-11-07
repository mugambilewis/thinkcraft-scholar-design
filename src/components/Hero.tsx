import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";




const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "tripling your monthly website traffic with AI-powered SEO.",
    "ranking #1 on Google for your highest-value keywords.",
    "generating 4x more qualified leads through smart automation.",
    "turning clicks into conversions with high-performance UX.",
    "building a 24/7 growth engine fueled by data and strategy."
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, phrases]);

  return (
    <section  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero video.mp4" type="video/mp4" />
        </video>
        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#092C5D]/80 via-[#092C5D]/70 to-[#00B3A4]/60"></div>
      </div>


      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Elegant card wrapper */}
          <div className="md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto">
              
              {/* Centered Content */}
              <div className="space-y-8 text-center">
                
                {/* Headline with elegant styling */}
                <div className="space-y-6">
                  <h1 className="text-heading-1 md:text-heading-1 lg:text-heading-1 font-bold leading-tight text-white drop-shadow-2xl">
                    <div className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">You're one step away from</div>
                    <div className="text-[#00B3A4] min-h-[1.2em] flex items-center justify-center">
                      <span className="text-heading-2 md:text-heading-2 lg:text-heading-2">
                        {currentText}
                        <span className="animate-pulse">|</span>
                      </span>
                    </div>
                  </h1>
                 
                 <p className="text-body-large mb-8 mx-auto leading-relaxed text-white/95 drop-shadow-lg font-light">
                  Boost sales with AI powered funnels, real time analytics, and high converting UX. ThinkCraft turns clicks into customers.

                  </p>
                </div>
                
                {/* Button with elegant styling */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button 
                    size="lg" 
                    className="text-[#092C5D] font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-[#00B3A4]/50 transition-all duration-300 hover:scale-110 border-2 border-white/20" 
                    style={{ backgroundColor: '#00B3A4' }}
                  >
                    GET A FREE AUDIT TODAY!
                  </Button>
                </div>
                
                
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade for smooth transition */}
      
    </section>
  );
};

export default Hero;