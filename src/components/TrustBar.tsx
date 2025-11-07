import React from 'react';

const TrustBar = () => {
  const integrations = [
    {
      name: "Zapier",
      svg: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg"
    },
    {
      name: "Make",
      svg: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/make.svg"
    },
    {
      name: "WhatsApp API",
      svg: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
    },
    {
      name: "Google Workspace",
      svg: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg"
    },
    {
      name: "Notion",
      svg: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/notion.svg"
    },
    {
      name: "Slack",
      svg: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg"
    },
    {
      name: "Twilio",
      svg: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twilio.svg"
    },
    {
      name: "Stripe",
      svg: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg"
    }
  ];

  // Duplicate items to ensure seamless marquee scrolling
  const scrollingItems = [...integrations, ...integrations];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="py-16 bg-[#e8f1fd]">
        <div className="container mx-auto px-8">
          <div className="relative overflow-hidden">
            <div
              className="flex w-max items-center gap-12 md:gap-16 animate-marquee"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}
            >
              {scrollingItems.map((integration, idx) => (
                <div
                  key={`${integration.name}-${idx}`}
                  className="flex items-center gap-3 text-[#092C5D] hover:text-[#092C5D]/90 transition-colors"
                >
                  <img 
                    src={integration.svg} 
                    alt={integration.name}
                    className="h-8 w-auto"
                    style={{ filter: 'invert(9%) sepia(47%) saturate(3371%) hue-rotate(198deg) brightness(95%) contrast(98%)' }}
                  />
                  <span className="text-lg font-medium whitespace-nowrap">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustBar;