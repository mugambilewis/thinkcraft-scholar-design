import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "STARTER PLAN",
      subtitle: "For Small Businesses & Startups",
      setupPrice: "$1,000 Setup",
      monthlyPrice: "$97/month",
      features: [
        "3-Page Website",
        "Desktop and Mobile Friendly Site",
        "On-Page Website SEO",
        "Contact Form",
        "Chat Widget",
        "SMS and Email Automations",
        "1 Website Edit Per Month",
      ],
    },
    {
      title: "GROWTH PLAN",
      subtitle: "For Scaling Businesses & Entrepreneurs",
      setupPrice: "$2,000 Setup",
      monthlyPrice: "$197/month",
      features: [
        "5-Page Website",
        "Everything in Starter, PLUS:",
        "Calendar Booking System",
        "Payment Processing",
        "Google Review Automation/Widget",
        "3 Website Edits Per Month",
      ],
    },
    {
      title: "ELITE PLAN",
      subtitle: "For High-Performing Brands & Enterprises",
      setupPrice: "$3,000 Setup",
      monthlyPrice: "$697/month",
      features: [
        "10+ Page Website",
        "Everything in Growth, PLUS:",
        "On-Going SEO Management",
        "AI Chat Bot",
        "AI Voice Bot",
        "5 Website Edits Per Month",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-24 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-heading-1 md:text-heading-1 font-bold text-[#00B3A4] mb-4 tracking-tight">
            Our Flexible Pricing Options
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Flexible Plans Tailored to Your Business Needs
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              subtitle={plan.subtitle}
              setupPrice={plan.setupPrice}
              monthlyPrice={plan.monthlyPrice}
              features={plan.features}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
