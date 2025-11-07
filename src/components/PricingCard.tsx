import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  subtitle: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  delay?: number;
}

const PricingCard = ({ 
  title, 
  subtitle, 
  setupPrice, 
  monthlyPrice, 
  features,
  delay = 0 
}: PricingCardProps) => {
  return (
    <div 
      className="premium-card rounded-[var(--radius)] p-8 flex flex-col h-full animate-fade-in-up border border-border/50 hover:border-[#00B3A4]/30 transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#00B3A4] mb-2 tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          {subtitle}
        </p>
        
        {/* Pricing */}
        <div className="space-y-1">
          <div className="text-3xl font-bold text-foreground">
            {setupPrice}
          </div>
          <div className="text-xl text-foreground">
            + {monthlyPrice}
          </div>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-[#00B3A4] flex-shrink-0 mt-0.5" />
            <span className="text-foreground text-sm leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button 
        className="w-full bg-[#00B3A4] hover:bg-[#00B3A4]/90 text-primary-foreground font-semibold py-6 text-base transition-all hover:shadow-[var(--glow-accent)]"
      >
        SIGN UP NOW
      </Button>
    </div>
  );
};
export default PricingCard;