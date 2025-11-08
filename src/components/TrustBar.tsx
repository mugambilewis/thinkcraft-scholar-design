import React from 'react';

const TrustBar = () => {
  const trustPoints = [
    "Reliable & On-Time Delivery",
    "Expert Designers & Academic Specialists",
    "Global Student Support",
    "Personalized Project Guidance",
    "1000+ Completed Solutions"
  ];

  // Duplicate items to ensure seamless marquee scrolling
  const scrollingItems = [...trustPoints, ...trustPoints];

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
              {scrollingItems.map((point, idx) => (
                <div
                  key={`${point}-${idx}`}
                  className="flex items-center gap-3 text-[#092C5D] hover:text-[#092C5D]/90 transition-colors"
                >
                  <span className="text-lg font-medium whitespace-nowrap">{point}</span>
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