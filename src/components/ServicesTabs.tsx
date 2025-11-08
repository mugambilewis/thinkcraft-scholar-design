import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("CAD");

  const tabs = [
    { id: "CAD", label: "CAD & Engineering Design" },
    { id: "Website", label: "Website & UI Design" },
    { id: "Academic", label: "Academic & Project Assistance" },
    { id: "Assignment", label: "Assignment Help & Tutoring" },
    { id: "Documentation", label: "Documentation & Formatting" }
  ];

  const tabContent = {
    "CAD": {
      title: "CAD & Engineering Design",
      subtitle: "From Sketch to Model — Precision that Speaks Design",
      image : "/images/SEO digital marketing concept.jpg",
      description: "Bring your mechanical or architectural ideas to life with precision 2D drawings and 3D models. Perfect for students, engineers, and innovators. We provide high-quality CAD drawings, 3D models, and simulations for students and professionals in mechanical, civil, and architectural fields.",
      cta: "See More →",
      link: "/services/cad-engineering"
    },
    "Website": {
      title: "Website & UI Design",
      subtitle: "Designs that Speak, Websites that Work",
      image : "/images/modern website design.jpg",
      description: "Clean, responsive, and user-centered websites built to impress. From portfolios to professional sites, we craft digital experiences that connect. We create modern, responsive websites that elevate your online identity.",
      cta: "See More →",
      link: "/services/website-ui-design"
    },
    "Academic": {
      title: "Academic & Project Assistance",
      subtitle: "Transforming Research Ideas into Complete Academic Projects",
      image : "/images/lead generation concept, website conversion funnel.jpg",
      description: "From proposals to full reports, we simplify your academic and research projects with clarity, structure, and professional formatting. We help students at all levels structure, research, and present academic projects that meet institutional standards.",
      cta: "See More →",
      link: "/services/academic-assistance"
    },
    "Assignment": {
      title: "Assignment Help & Tutoring",
      subtitle: "Guided Learning. Reliable Results.",
      image : "/images/automation and ai.jpg",
      description: "Personalized academic support for international students — guiding you to understand, not just submit. We provide personalized academic assistance for international students, helping you complete coursework, essays, and technical assignments on time.",
      cta: "See More →",
      link: "/services/assignment-help"
    },
    "Documentation": {
      title: "Documentation & Formatting",
      subtitle: "Professional Formatting that Commands Attention",
      image : "/images/business management mobile app dashboard.jpg",
      description: "We refine your work to meet international academic and business standards (APA, IEEE, MLA, and more). We refine your work to align with global academic and business standards, ensuring it looks polished, credible, and compliant with any required formatting style.",
      cta: "See More →",
      link: "/services/documentation-formatting"
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#092C5D]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="mb-8 bg-white rounded-lg p-2">
            {/* Mobile: Vertical tabs */}
            <div className="flex flex-col gap-2 md:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left ${
                    activeTab === tab.id
                      ? "bg-[#00B3A4] text-white"
                      : "bg-transparent text-[#092C5D] hover:text-[#092C5D]/90 hover:bg-[#00B3A4]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Desktop: Horizontal tabs */}
            <div className="hidden md:flex w-full gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[#00B3A4] text-white"
                      : "bg-transparent text-[#092C5D] hover:text-white hover:bg-[#00B3A4]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="bg-white rounded-lg p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

              {/* Left Column */}
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092C5D]/90 mb-2">
                    {tabContent[activeTab].title}
                  </h2>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#092C5D] mb-4">
                    {tabContent[activeTab].subtitle}
                  </h3>
                </div>
                
                <p className="text-[#092C5D] leading-relaxed text-base md:text-lg mb-4">
                  {tabContent[activeTab].description}
                </p>

                <Link to={tabContent[activeTab].link}>
                  <Button className="bg-[#00B3A4] hover:bg-[#00B3A4]/90 text-[#092C5D] font-bold px-6 py-3 mt-4 md:px-8 md:py-3 rounded-lg w-full md:w-auto">
                    {tabContent[activeTab].cta}
                  </Button>
                </Link>
              </div>

              {/* Right Column */}
              <div className="bg-[#00B3A4] rounded-lg overflow-hidden flex flex-col order-1 lg:order-2">
                <div className="flex-1 relative">
                  <img
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
