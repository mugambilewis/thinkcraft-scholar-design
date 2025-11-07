import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const ThankYou = () => {
  const navigate = useNavigate();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Generate elegant floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <div className="max-w-2xl mx-auto">
            {/* Success Icon */}
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-150" />
                <CheckCircle2 className="w-24 h-24 text-accent relative" strokeWidth={1.5} />
              </motion.div>
            </motion.div>

            {/* Main Message */}
            <motion.h1
              variants={itemVariants}
              className="text-heading-1 md:text-heading-1 lg:text-heading-1 font-bold text-foreground mb-6"
            >
              Thank You for Booking!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/80 mb-12 max-w-xl mx-auto"
            >
              We've received your request and will contact you shortly to confirm
              your consultation details.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  onClick={() => navigate("/")}
                  className="h-14 px-8 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:shadow-lg transition-all"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  onClick={() => navigate("/book-appointment")}
                  variant="outline"
                  className="h-14 px-8 text-lg font-semibold rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Another Appointment
                </Button>
              </motion.div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-16 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 max-w-md mx-auto"
            >
              <p className="text-sm text-muted-foreground">
                Check your email for confirmation details. You can also view or
                reschedule your appointment anytime.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ThankYou;
