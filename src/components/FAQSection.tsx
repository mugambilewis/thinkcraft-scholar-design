import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Do you assist with academic writing or just formatting?",
      answer: "We handle both — from structuring ideas to formatting in any required academic style."
    },
    {
      question: "Are your CAD and design services suitable for beginners?",
      answer: "Yes! We work with students learning CAD as well as professionals needing complex design outputs."
    },
    {
      question: "How can I get started?",
      answer: "Simply reach out via our contact form or WhatsApp (+1 415 418 5227). We'll guide you through every step."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 md:py-32 relative overflow-hidden bg-[#092C5D]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-60 transform -translate-x-16 -translate-y-16"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full opacity-60 transform translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full opacity-60 transform -translate-x-10 translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full opacity-60 transform translate-x-14 translate-y-14"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <p className="text-[#00B3A4] text-sm mb-2">FAQs</p>
            <h2 className="text-heading-1 md:text-heading-1 font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body text-white leading-relaxed">
              Everything you need to know about ThinkCraft Scholar & Design Solutions
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mt-12">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#e8f1fd] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white transition-colors"
                >
                  <span className="text-[#092C5D] font-medium text-lg">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#00B3A4] transition-transform ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openAccordion === index && (
                  <div className="px-6 pb-4 bg-white">
                    <p className="text-body text-[#092C5D] leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="pt-8">
            <p className="text-body text-white">
              Have more questions in mind? Contact us and our team will answer all your questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
