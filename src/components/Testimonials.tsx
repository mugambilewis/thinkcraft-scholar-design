import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ThinkCraft helped me perfect my engineering project and CAD report before submission. Highly recommend their professional touch!",
      author: "David",
      role: "University of Leeds",
      rating: 5
    },
    {
      quote: "A reliable team that delivered an entire UI project in less than a week. Amazing communication and detail.",
      author: "Sophia",
      role: "Business Consultant",
      rating: 5
    },
    {
      quote: "ThinkCraft helped me perfect my engineering project and CAD report before submission. Highly recommend their professional touch!",
      author: "David",
      role: "University of Leeds",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 md:text-heading-1 font-bold mb-6 text-[#092C5D]">
            What Our <span className="text-[#00B3A4]">Clients Say</span>
          </h2>
        </div>

        {/* Marquee carousel */}
        <div className="group relative overflow-hidden max-w-6xl mx-auto">
          <div
            className="flex w-max items-stretch gap-6 md:gap-8 animate-marquee group-hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={`${testimonial.author}-${idx}`} className="w-[340px] md:w-[380px] flex-shrink-0">
                <div className=" bg-[#092C5D] p-6 md:p-8 h-full flex flex-col">
                  <div className="relative z-10 flex flex-col flex-grow ">
                    <div className="flex gap-1 mb-4 ">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#00B3A4] text-[#00B3A4]" />
                      ))}
                    </div>
                    <p className="text-white/90 mb-6 leading-relaxed text-base md:text-lg flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-sm text-white mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
