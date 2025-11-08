import { Search, Briefcase, RefreshCw, Magnet, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Attract",
      description: "Drive organic traffic to your website with strategic keyword optimization, engaging content, and technical SEO enhancements.",
      icon: Search,
    },
    {
      title: "UpSell",
      description: "Automate your sales and marketing processes to maximize conversions. AI-driven chatbots engage customers, while personalized automation nurtures leads through targeted email sequences.",
      icon: Briefcase,
    },
    {
      title: "Repeat",
      description: "Stay in control of your website anytime, anywhere with a mobile-friendly management app. Update content, track analytics, and respond to leads instantly, ensuring continuous engagement.",
      icon: RefreshCw,
    },
    {
      title: "Sell",
      description: "Once visitors arrive, convert them into potential customers with high-converting lead capture tools.",
      icon: Magnet,
    },
    {
      title: "Ascend",
      description: "A well-designed website enhances trust and keeps users engaged. With modern UI/UX, fast performance, and conversion-focused design, your site becomes an effective sales tool.",
      icon: Globe,
    }
  ];

  return (
    <section id="services" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-heading-1 md:text-heading-1 font-bold mb-3 md:mb-4 text-[#092C5D]">
            Our Services
          </h2>
          <p className="text-body text-[#092C5D] max-w-4xl mx-auto leading-relaxed">
            We don't just deliver — we collaborate. Each project, assignment, or design is crafted with precision, creativity, and purpose.
            Whether it's a final-year academic project or a company portfolio, we walk with you from idea to completion, ensuring your work reflects quality and understanding.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border-2 border-[#092C5D] rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-[#00B3A4] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-heading-4 md:text-heading-4 font-bold text-[#00B3A4] text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body-small text-[#092C5D] text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Connector Arrows - Desktop */}
          <div className="hidden md:flex justify-center items-center mb-4">
            <div className="flex items-center gap-2">
              <svg width="80" height="40" viewBox="0 0 80 40" className="transform rotate-90">
                <path d="M 40 5 L 40 30 M 40 30 L 30 20 M 40 30 L 50 20" stroke="#00B3A4" strokeWidth="2" fill="none"/>
              </svg>
              <svg width="80" height="40" viewBox="0 0 80 40">
                <path d="M 5 20 L 70 20 M 70 20 L 60 10 M 70 20 L 60 30" stroke="#00B3A4" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Mobile Connector */}
          <div className="md:hidden flex justify-center mb-4">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M 20 5 L 20 30 M 20 30 L 10 20 M 20 30 L 30 20" stroke="#00B3A4" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-4">
            {services.slice(3, 5).map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border-2 border-[#092C5D] rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-[#00B3A4] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-heading-4 md:text-heading-4 font-bold text-[#00B3A4] text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body-small text-[#092C5D] text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Connector Arrow - Desktop */}
          <div className="hidden md:flex justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" className="transform rotate-180">
              <path d="M 20 5 L 20 30 M 20 30 L 10 20 M 20 30 L 30 20" stroke="#00B3A4" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* Mobile Bottom Connector */}
          <div className="md:hidden flex justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" className="transform rotate-180">
              <path d="M 20 5 L 20 30 M 20 30 L 10 20 M 20 30 L 30 20" stroke="#00B3A4" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;