import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What makes your websites different from traditional websites?",
      answer: "Our Smart Websites are AI-powered, SEO-optimized, and automation-driven. Unlike traditional static sites, they work 24/7 to attract leads, automate processes, and drive revenue without constant manual intervention."
    },
    {
      question: "How does SEO improve my website's performance?",
      answer: "SEO optimization increases your website's visibility on search engines, driving more organic traffic. Our Smart Websites are built with technical SEO best practices, fast loading speeds, and content optimization to help you rank higher and get found by your ideal customers."
    },
    {
      question: "Can I really manage my website from my mobile phone?",
      answer: "Absolutely! Our mobile-friendly management app lets you update content, track analytics, respond to leads, and monitor your website's performance from anywhere. Stay in control of your business even when you're on the go."
    },
    {
      question: "What automation and AI features do you offer?",
      answer: "We provide AI-powered chatbots, automated email sequences, lead nurturing workflows, customer engagement tools, and intelligent form responses. These features work together to automate your sales and marketing processes, saving you time while maximizing conversions."
    },
    {
      question: "How do lead capturing tools help grow my business?",
      answer: "Our intelligent lead capture systems use strategic forms, pop-ups, and conversion funnels to turn website visitors into qualified prospects. With automated follow-up sequences and CRM integration, you'll never miss a potential customer again."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#092C5D]">
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
            <p className="text-[#00B3A4] text-sm mb-2">About Us</p>
            <h2 className="text-heading-1 md:text-heading-1 font-bold text-white mb-4">
              Smart Websites, Smarter Growth
            </h2>
            <p className="text-xl text-white leading-relaxed">
              Your All-in-One Solution for SEO, Lead Capturing, Automation & More
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
                    <p className="text-[#092C5D]  leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="pt-8">
            <p className="text-white text-lg">
              Have more questions in mind? Contact us and our team will answer all your questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
