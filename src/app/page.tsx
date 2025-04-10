"use client"; // Add client directive for Framer Motion

// import Scene from '@/components/Scene'; // Removed Scene import
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define animation variants for text
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Re-added BlurCircle component as motion.div
const BlurCircle = ({ className, animationProps }: { className?: string, animationProps?: object }) => (
  <motion.div 
    className={`absolute rounded-full blur-[100px] opacity-20 ${className}`}
    {...animationProps} // Spread animation props
  ></motion.div>
);

// Social link component with icon placeholder
const SocialLink = ({ 
  href, 
  label, 
  icon, 
  primary = false 
}: { 
  href: string; 
  label: string; 
  icon: string;
  primary?: boolean;
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300
      ${primary 
        ? 'bg-gradient-to-r from-indigo-600/90 to-indigo-700/90 text-white font-medium shadow-md hover:shadow-xl border border-indigo-400/20' 
        : 'bg-[#18181a] backdrop-blur-sm hover:bg-[#252529] text-white/95 border border-white/10 shadow-sm'
      }`}
    style={{
      boxShadow: primary 
        ? '0 4px 20px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
        : '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      transform: 'translateY(0)',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = primary 
        ? '0 8px 25px rgba(99, 102, 241, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)' 
        : '0 8px 15px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = primary 
        ? '0 4px 20px rgba(99, 102, 241, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
        : '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
    }}
  >
    <div className="w-5 h-5 relative flex items-center justify-center">
      <Image src={`/logos/${icon}.svg`} alt={label} width={20} height={20} className="text-white" />
    </div>
    <span className="tracking-tight">{label}</span>
  </a>
);

export default function Home() {

  // Define animation properties for blur circles
  const circleAnimation = (duration: number, delay: number = 0) => ({
    initial: { scale: 0.9, opacity: 0.15 },
    animate: { 
      scale: [0.9, 1.1, 0.9], // Subtle pulsing
      x: [0, Math.random() * 60 - 30, 0], // Gentle horizontal drift
      y: [0, Math.random() * 60 - 30, 0], // Gentle vertical drift
    },
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror", // Makes the movement smooth back and forth
      delay: delay
    }
  });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-8 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Re-added Animated Blurred gradient circles */}
      <BlurCircle 
        className="w-[300px] h-[300px] bg-blue-500 top-[15%] -left-[5%]" 
        animationProps={circleAnimation(25, 0)} // Slower duration
      />
      <BlurCircle 
        className="w-[400px] h-[400px] bg-orange-500 bottom-[10%] right-[5%]" 
        animationProps={circleAnimation(30, 1)} // Slightly different speed and delay
      />
      <BlurCircle 
        className="w-[200px] h-[200px] bg-purple-500 top-[40%] right-[15%]" 
        animationProps={circleAnimation(20, 0.5)} // Faster speed
      />
      
      <motion.div 
        className="relative z-10 text-center flex flex-col items-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced SPAN heading with improved gradient and effects */}
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-black mb-2 tracking-tighter bg-gradient-to-br from-orange-300 via-orange-500 to-red-600 text-transparent bg-clip-text"
            style={{ 
              textShadow: '0 0 40px rgba(255,165,0,0.15)',
              letterSpacing: '-0.05em',
            }}
          >
            SPAN
          </motion.h1>
          {/* Subtle glow effect underneath */}
          <motion.div 
            className="absolute -bottom-2 left-0 right-0 mx-auto w-4/5 h-1 rounded-full bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 blur-md"
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Added "is back" text */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter"
          variants={itemVariants}
        >
          is <span className="text-orange-500">back</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-3xl text-gray-300 mb-8 font-light tracking-tight max-w-lg"
          variants={itemVariants}
        >
          All AI models. One app.
        </motion.p>
        
        {/* App Store Pre-download button */}
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <a 
            href="https://apps.apple.com/us/app/spanai/id6744457621" 
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-black font-medium tracking-tight transition-all duration-300"
            style={{
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)',
              transform: 'translateY(0)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.backgroundColor = '#f9f9f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.backgroundColor = '#fff';
            }}
          >
            <div className="flex items-center justify-center">
              <div className="w-7 h-7 relative flex items-center justify-center mr-3">
                <Image src="/logos/apple.svg" alt="Apple logo" width={24} height={24} className="text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-600 leading-none mb-0.5">Pre-download on the</span>
                <span className="text-sm font-semibold leading-none">App Store</span>
              </div>
            </div>
          </a>
        </motion.div>
        
        {/* Social links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          {/* Primary Discord CTA */}
          <SocialLink 
            href="https://discord.gg/AHHvRWf8X6" 
            label="Join Our Discord" 
            icon="discord" 
            primary={true}
          />
          
          {/* Other social links */}
          <SocialLink href="https://www.instagram.com/span.app/" label="Instagram" icon="instagram" />
          <SocialLink href="https://x.com/SpanApp" label="X" icon="x" />
          <SocialLink href="https://www.linkedin.com/company/span-app" label="LinkedIn" icon="linkedin" />
        </motion.div>
        
        {/* Model examples text */}
        <motion.p 
          className="text-sm md:text-base text-gray-400 tracking-tight mt-8"
          variants={itemVariants}
        >
          Featuring models from OpenAI, Anthropic, Stability AI, and more
        </motion.p>
      </motion.div>
      
      {/* Legal links positioned at bottom */}
      <div className="absolute bottom-4 w-full text-center">
        <div className="flex justify-center gap-4 text-xs text-gray-500">
          <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</a>
          <span>•</span>
          <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="https://100ideaz.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">© 100 Ideaz, LLC. 2024</a>
        </div>
      </div>
      
      {/* Removed Scene component usage */}
      {/* <Scene /> */}
    </main>
  );
}
