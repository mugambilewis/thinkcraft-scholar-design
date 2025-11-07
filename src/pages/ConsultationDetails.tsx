import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  Video,
  MapPin,
  Download,
  Edit3,
} from "lucide-react";

const ConsultationDetails = () => {
  const navigate = useNavigate();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const detailItems = [
    {
      icon: User,
      label: "Consultant",
      value: "Sarah Johnson",
      sublabel: "AI Strategy Specialist",
    },
    {
      icon: Calendar,
      label: "Date",
      value: "March 25, 2025",
      sublabel: "Monday",
    },
    {
      icon: Clock,
      label: "Time",
      value: "2:00 PM - 3:00 PM",
      sublabel: "EST (60 minutes)",
    },
    {
      icon: Video,
      label: "Meeting Link",
      value: "Join Video Call",
      sublabel: "Link will be sent 10 minutes before",
      isLink: true,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[image:var(--gradient-soft)] relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
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
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6"
              >
                <Calendar className="w-8 h-8 text-accent" />
              </motion.div>
              <h1 className="text-heading-1 md:text-heading-1 font-bold text-foreground mb-4">
                Your Consultation Details
              </h1>
              <p className="text-lg text-foreground/80">
                Here's everything you need to know about your upcoming session.
              </p>
            </motion.div>

            {/* Details Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              {detailItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-6 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                        {item.label}
                      </p>
                      {item.isLink ? (
                        <a
                          href="#"
                          className="text-lg font-semibold text-accent hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-foreground">
                          {item.value}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.sublabel}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-8 backdrop-blur-sm border border-border/50 mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Meeting Preparation
                  </h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Join from a quiet space with stable internet connection
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Have your business goals and challenges ready to discuss
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        Meeting link will be sent to your email 10 minutes before
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                variants={itemVariants}
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full h-14 text-lg font-semibold rounded-xl bg-accent text-accent-foreground hover:shadow-[var(--glow-accent)] transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Add to Calendar
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => navigate("/reschedule")}
                  variant="outline"
                  className="w-full h-14 text-lg font-semibold rounded-xl border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Edit3 className="w-5 h-5 mr-2" />
                  Reschedule
                </Button>
              </motion.div>
            </motion.div>

            {/* Footer Note */}
            <motion.p
              variants={itemVariants}
              className="text-center text-sm text-muted-foreground mt-8"
            >
              Questions? Email us at{" "}
              <a
                href="mailto:support@example.com"
                className="text-accent hover:underline font-medium"
              >
                support@example.com
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ConsultationDetails;
