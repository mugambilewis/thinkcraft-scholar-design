import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Reschedule = () => {
  const navigate = useNavigate();
  const [datetime, setDatetime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Appointment rescheduled successfully!");
    navigate("/consultation-details");
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
        {/* Background gradient */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-6"
              >
                <Clock className="w-10 h-10 text-accent" />
              </motion.div>
              <h1 className="text-heading-1 md:text-heading-1 font-bold text-foreground mb-4">
                Need to Reschedule?
              </h1>
              <p className="text-lg text-foreground/80">
                No worries — pick a new date and time below.
              </p>
            </motion.div>

            {/* Reschedule Card */}
            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-8 md:p-12 backdrop-blur-sm border border-border/50"
            >
              {/* Current Appointment Info */}
              <motion.div
                variants={itemVariants}
                className="mb-8 p-6 bg-muted/30 rounded-xl border border-border/30"
              >
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                  Current Appointment
                </h3>
                <div className="flex items-center gap-3 text-foreground">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="font-medium">
                    March 25, 2025 at 2:00 PM EST
                  </span>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="new-datetime"
                    className="text-sm font-semibold text-foreground flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-accent" />
                    New Date & Time *
                  </label>
                  <Input
                    id="new-datetime"
                    type="datetime-local"
                    required
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)}
                    className="h-14 rounded-xl border-input focus:ring-accent/60 focus:border-accent transition-all text-lg"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="pt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold rounded-xl bg-accent text-accent-foreground hover:shadow-[var(--glow-accent)] transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      "Rescheduling..."
                    ) : (
                      <>
                        Confirm New Time
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* Help Text */}
              <motion.p
                variants={itemVariants}
                className="mt-6 text-center text-sm text-muted-foreground"
              >
                Need help? Contact us at{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-accent hover:underline font-medium"
                >
                  support@example.com
                </a>
              </motion.p>
            </motion.div>

            {/* Cancel Option */}
            <motion.div variants={itemVariants} className="mt-8 text-center">
              <Button
                variant="ghost"
                onClick={() => navigate("/consultation-details")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Keep Current Appointment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Reschedule;
