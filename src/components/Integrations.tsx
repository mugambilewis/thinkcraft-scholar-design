import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

/**
 * Integrations Component
 * 
 * Desktop: Animated orbital visualization with cards rotating around center
 * Mobile: Static vertical layout with category groups
 * 
 * Tuning Parameters:
 * - ORBIT_RADIUS: Base radius for card orbit (line 18)
 * - ORBIT_DURATION: Speed of orbital motion (line 21)
 * - PARALLAX_STRENGTH: Pointer parallax sensitivity (line 24)
 * - CYCLE_DURATION: Fade in/out cycle timing (line 27)
 */

// TUNING: Adjust orbital motion radius
const ORBIT_RADIUS = 220;

// TUNING: Adjust orbital motion speed
const ORBIT_DURATION = 20;

// TUNING: Adjust parallax movement strength
const PARALLAX_STRENGTH = 20;

// TUNING: Cycle duration for fade in/out effect
const CYCLE_DURATION = 8;
const FADE_OUT_START = 0.6;

interface Integration {
  id: number;
  label: string;
  icon?: string;
}

interface CategoryGroup {
  category: string;
  integrations: Integration[];
}

// Mobile static layout data
const categoryGroups: CategoryGroup[] = [
  {
    category: 'Vulnerability Management',
    integrations: [
      { id: 1, label: 'Nessus' },
      { id: 2, label: 'Qualys' },
      { id: 3, label: 'Rapid7' },
      { id: 4, label: 'Tenable' },
      { id: 5, label: 'Hackuity' },
    ],
  },
  {
    category: 'Endpoint Security',
    integrations: [
      { id: 6, label: 'VMware Carbon Black' },
      { id: 7, label: 'Cisco' },
      { id: 8, label: 'Crowdstrike' },
      { id: 9, label: 'Rapid7' },
      { id: 10, label: 'Malwarebytes' },
    ],
  },
  {
    category: 'Collaboration Tools',
    integrations: [
      { id: 11, label: 'Jira' },
      { id: 12, label: 'Slack' },
      { id: 13, label: 'Teams' },
      { id: 14, label: 'Google' },
      { id: 15, label: 'Zoom' },
    ],
  },
  {
    category: 'Identity & Access Tools',
    integrations: [
      { id: 16, label: 'Okta' },
      { id: 17, label: 'Azure' },
      { id: 18, label: 'Duo' },
      { id: 19, label: 'Google Workspace' },
      { id: 20, label: 'Microsoft' },
    ],
  },
  {
    category: 'Cloud Infrastructure',
    integrations: [
      { id: 21, label: 'AWS' },
      { id: 22, label: 'GCP' },
      { id: 23, label: 'Azure' },
      { id: 24, label: 'DigitalOcean' },
      { id: 25, label: 'Oracle' },
    ],
  },
  {
    category: 'Human Resources',
    integrations: [
      { id: 26, label: 'Workday' },
      { id: 27, label: 'BambooHR' },
    ],
  },
  {
    category: 'Mobile Device Management',
    integrations: [
      { id: 28, label: 'Jamf' },
      { id: 29, label: 'Qualys' },
      { id: 30, label: 'Rapid7' },
      { id: 31, label: 'Tenable' },
      { id: 32, label: 'Hackuity' },
    ],
  },
  {
    category: 'Code Management',
    integrations: [
      { id: 33, label: 'Azure' },
      { id: 34, label: 'GitLab' },
      { id: 35, label: 'Bitbucket' },
      { id: 36, label: 'GitHub' },
      { id: 37, label: 'Jenkins' },
    ],
  },
];

// Desktop orbital data
interface OrbitalIntegration extends Integration {
  angle: number;
  orbitRadius: number;
  phase: number;
}

const orbitalIntegrations: OrbitalIntegration[] = [
  // Inner orbit - 3 cards
  { id: 1, label: 'Slack', angle: 0, orbitRadius: ORBIT_RADIUS * 0.4, phase: 0 },
  { id: 2, label: 'GitHub', angle: 120, orbitRadius: ORBIT_RADIUS * 0.4, phase: 0 },
  { id: 3, label: 'Figma', angle: 240, orbitRadius: ORBIT_RADIUS * 0.4, phase: 0 },
  
  // Middle orbit - 4 cards
  { id: 4, label: 'Notion', angle: 0, orbitRadius: ORBIT_RADIUS * 0.85, phase: 0 },
  { id: 5, label: 'Jira', angle: 90, orbitRadius: ORBIT_RADIUS * 0.85, phase: 0 },
  { id: 6, label: 'Stripe', angle: 180, orbitRadius: ORBIT_RADIUS * 0.85, phase: 0 },
  { id: 7, label: 'Zoom', angle: 270, orbitRadius: ORBIT_RADIUS * 0.85, phase: 0 },
  
  // Outer orbit - 3 cards
  { id: 8, label: 'Salesforce', angle: 60, orbitRadius: ORBIT_RADIUS * 1.4, phase: 0 },
  { id: 9, label: 'Asana', angle: 180, orbitRadius: ORBIT_RADIUS * 1.4, phase: 0 },
  { id: 10, label: 'Teams', angle: 300, orbitRadius: ORBIT_RADIUS * 1.4, phase: 0 },
];

const Integrations = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      role="region"
      aria-label="Integrations section"
      className="relative overflow-hidden"
      style={{
        '--bg': '#092C5D',
        '--accent': '#00B3A4',
        '--text': '#FFFFFF',
        backgroundColor: 'var(--bg)',
        minHeight: '100vh',
      } as React.CSSProperties}
    >
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </section>
  );
};

// Mobile Static Layout
const MobileLayout = () => {
  return (
    <div className="px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-8 px-4" style={{ color: 'var(--text)' }}>
        Get unified visibility into your entire cloud infrastructure
      </h2>

      {/* Center Logo */}
      <div className="flex flex-col items-center mb-12">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
          style={{
            backgroundColor: 'var(--accent)',
            boxShadow: '0 0 30px rgba(0, 179, 164, 0.4)',
          }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs font-bold">J1</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>
          JupiterOne
        </h3>
      </div>

      {/* Category Groups */}
      <div className="space-y-6 max-w-md mx-auto">
        {categoryGroups.map((group) => (
          <div key={group.category} className="space-y-3">
            {/* Category Label */}
            <div
              className="px-4 py-2 rounded-full text-center text-sm font-medium"
              style={{
                backgroundColor: 'rgba(0, 179, 164, 0.15)',
                border: '1px solid rgba(0, 179, 164, 0.3)',
                color: 'var(--text)',
              }}
            >
              {group.category}
            </div>

            {/* Integration Icons Row */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {group.integrations.map((integration) => (
                <div
                  key={integration.id}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-medium"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--text)',
                  }}
                  title={integration.label}
                >
                  {integration.label.slice(0, 2).toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Desktop Orbital Layout
const DesktopLayout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [cycleProgress, setCycleProgress] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const parallaxX = useSpring(useTransform(mouseX, [-1, 1], [-PARALLAX_STRENGTH, PARALLAX_STRENGTH]), {
    stiffness: 150,
    damping: 30,
  });
  const parallaxY = useSpring(useTransform(mouseY, [-1, 1], [-PARALLAX_STRENGTH, PARALLAX_STRENGTH]), {
    stiffness: 150,
    damping: 30,
  });

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = (elapsed % CYCLE_DURATION) / CYCLE_DURATION;
      setCycleProgress(progress);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2 + 40;

  const getFadeOpacity = () => {
    if (cycleProgress < FADE_OUT_START) return 1;
    return 1 - ((cycleProgress - FADE_OUT_START) / (1 - FADE_OUT_START));
  };

  const getCardPosition = (integration: OrbitalIntegration, time: number) => {
    const orbitAngle = integration.angle + (time * 360) / ORBIT_DURATION;
    const radians = (orbitAngle * Math.PI) / 180;
    const radius = integration.orbitRadius;
    
    return {
      x: centerX + Math.cos(radians) * radius,
      y: centerY + Math.sin(radians) * radius,
    };
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      style={{ height: '100vh' }}
    >
      {/* Heading */}
      <div className="absolute top-12 left-0 right-0 flex justify-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center px-4 max-w-4xl" style={{ color: 'var(--text)' }}>
          Get unified visibility into your entire cloud infrastructure
        </h2>
      </div>

      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 179, 164, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Orbital content */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      >
        {/* SVG Orbits and Connectors */}
        <svg
          className="absolute"
          width={dimensions.width}
          height={dimensions.height}
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Orbit circles */}
          {[0.4, 0.85, 1.4].map((radiusMultiplier, idx) => {
            const radius = ORBIT_RADIUS * radiusMultiplier;
            const fadeOpacity = getFadeOpacity();
            
            return (
              <motion.circle
                key={`orbit-${idx}`}
                cx={centerX}
                cy={centerY}
                r={radius}
                stroke="var(--accent)"
                strokeWidth="1"
                fill="none"
                initial={{ r: 0, opacity: 0 }}
                animate={{ 
                  r: radius, 
                  opacity: 0.2 * fadeOpacity 
                }}
                transition={{
                  r: {
                    duration: 1.2,
                    delay: idx * 0.2,
                    ease: [0.34, 1.56, 0.64, 1],
                  },
                  opacity: {
                    duration: 0.5,
                  }
                }}
              />
            );
          })}

          {/* Connector lines */}
          {[
            orbitalIntegrations.filter(i => i.orbitRadius === ORBIT_RADIUS * 0.4),
            orbitalIntegrations.filter(i => i.orbitRadius === ORBIT_RADIUS * 0.85),
            orbitalIntegrations.filter(i => i.orbitRadius === ORBIT_RADIUS * 1.4),
          ].map((orbitCards, orbitIdx) => {
            const fadeOpacity = getFadeOpacity();
            
            return orbitCards.map((integration, idx) => {
              const nextIntegration = orbitCards[(idx + 1) % orbitCards.length];
              const pos1 = getCardPosition(integration, 0);
              const pos2 = getCardPosition(nextIntegration, 0);

              const pathD = `M ${pos1.x} ${pos1.y} A ${integration.orbitRadius} ${integration.orbitRadius} 0 0 1 ${pos2.x} ${pos2.y}`;
              const pathLength = (2 * Math.PI * integration.orbitRadius) / orbitCards.length;

              return (
                <motion.path
                  key={`connector-${integration.id}-${nextIntegration.id}`}
                  d={pathD}
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#glow)"
                  initial={{
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                    opacity: 0,
                  }}
                  animate={{
                    strokeDashoffset: 0,
                    opacity: 0.4 * fadeOpacity,
                  }}
                  transition={{
                    strokeDashoffset: {
                      duration: 1.5,
                      delay: orbitIdx * 0.3 + idx * 0.1 + 0.5,
                      ease: 'easeOut',
                    },
                    opacity: {
                      duration: 0.5,
                    },
                  }}
                />
              );
            });
          })}
        </svg>

        {/* Integration Cards */}
        <motion.div
          className="relative"
          style={{ width: dimensions.width, height: dimensions.height }}
        >
          {orbitalIntegrations.map((integration) => (
            <OrbitalCard
              key={integration.id}
              integration={integration}
              getPosition={(time) => getCardPosition(integration, time)}
              fadeOpacity={getFadeOpacity()}
            />
          ))}
        </motion.div>

        {/* Center focal point */}
        <motion.div
          className="absolute"
          style={{
            left: centerX - 8,
            top: centerY - 8,
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            boxShadow: '0 0 30px var(--accent)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        />
      </motion.div>
    </div>
  );
};

interface OrbitalCardProps {
  integration: OrbitalIntegration;
  getPosition: (time: number) => { x: number; y: number };
  fadeOpacity: number;
}

const OrbitalCard = ({ integration, getPosition, fadeOpacity }: OrbitalCardProps) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      setTime(elapsed);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const position = getPosition(time);

  return (
    <motion.div
      className="absolute rounded-2xl cursor-pointer"
      style={{
        left: position.x,
        top: position.y,
        x: '-50%',
        y: '-50%',
        opacity: fadeOpacity,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: fadeOpacity,
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
        scale: { duration: 0.2 },
        opacity: { duration: 0.5 },
      }}
    >
      <div
        className="relative px-5 py-3 rounded-2xl backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span
          className="text-sm font-medium whitespace-nowrap"
          style={{ color: 'var(--text)' }}
        >
          {integration.label}
        </span>

        <motion.div
          className="absolute -top-1 -right-1 rounded-full"
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'var(--accent)',
            boxShadow: '0 0 10px var(--accent)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
};

export default Integrations;