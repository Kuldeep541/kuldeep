
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Send } from 'lucide-react';
import { buttonVariants, heroTextVariants } from '@/lib/motion-variants';
import { TypewriterAnimatedText } from './ui/AnimatedText';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      {/* Background Gradient Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <motion.div
            custom={0}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Web Developer | Problem Solver | Tech Enthusiast
            </span>
          </motion.div>

          <motion.h1 
            className="heading-xl mb-6"
            custom={1}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm <span className="text-gradient">Kuldeep Prajapati</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-light text-foreground/80 mb-8 h-12"
            custom={2}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            <TypewriterAnimatedText
              strings={[
                "Building Scalable Web Apps",
                "Crafting Digital Experiences", 
                "Turning Ideas Into Reality"
              ]}
            />
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            custom={3}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#" 
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
            
            <motion.a
              href="#contact" 
              className="flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-full font-medium"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <Send size={18} />
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.4
            }}
          >
            {/* Profile Image with Animated Border */}
            <div className="w-full h-full rounded-full p-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-spin-slow [animation-duration:10s]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                <div className="w-full h-full bg-muted rounded-full flex items-center justify-center text-4xl font-bold text-primary">
                  KP
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/20 animate-pulse [animation-duration:3s]"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border border-primary/10 animate-pulse [animation-duration:5s]"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
        >
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
