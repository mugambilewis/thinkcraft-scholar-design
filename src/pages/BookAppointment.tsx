import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { toast } from "sonner";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    datetime: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Appointment booked successfully!");
    navigate("/thank-you");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Floating gradient blobs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6"
              >
                <Calendar className="w-8 h-8 text-accent" />
              </motion.div>
              <h1 className="text-heading-1 md:text-heading-1 lg:text-heading-1 font-bold text-foreground mb-6">
                Book Your Free Strategy Session
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                Let's discuss your business goals and how we can help automate
                and scale your success with AI.
              </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-8 md:p-12 backdrop-blur-sm border border-border/50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-semibold text-foreground"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="h-12 rounded-xl border-input focus:ring-accent/60 focus:border-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-foreground"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12 rounded-xl border-input focus:ring-accent/60 focus:border-accent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-semibold text-foreground"
                  >
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="h-12 rounded-xl border-input focus:ring-accent/60 focus:border-accent transition-all"
                    placeholder="Acme Inc."
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="datetime"
                    className="text-sm font-semibold text-foreground"
                  >
                    Preferred Date & Time *
                  </label>
                  <Input
                    id="datetime"
                    type="datetime-local"
                    required
                    value={formData.datetime}
                    onChange={(e) =>
                      setFormData({ ...formData, datetime: e.target.value })
                    }
                    className="h-12 rounded-xl border-input focus:ring-accent/60 focus:border-accent transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-32 rounded-xl border-input focus:ring-accent/60 focus:border-accent transition-all resize-none"
                    placeholder="Tell us about your business goals and challenges..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold rounded-xl bg-accent text-accent-foreground hover:shadow-[var(--glow-accent)] transition-all duration-300"
                  >
                    {isSubmitting ? "Booking..." : "Book Appointment"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    
  );
};

export default BookAppointment;
