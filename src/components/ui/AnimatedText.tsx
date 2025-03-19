
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

type AnimatedTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  by?: 'word' | 'letter' | 'line';
  delay?: number;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '',
  once = false,
  by = 'word',
  delay = 0.1 
}) => {
  const words = text.split(' ');
  const letters = text.split('');
  const lines = text.split('\n');

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay, delayChildren: delay * i },
    }),
  };

  // Choose the appropriate item based on the "by" prop
  const items = by === 'word' ? words : by === 'letter' ? letters : lines;

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      x: -10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ marginRight: by === 'word' ? '0.25em' : by === 'line' ? '0' : '0' }}
        >
          {item}
          {by === 'line' && index < lines.length - 1 ? <br /> : ''}
        </motion.span>
      ))}
    </motion.span>
  );
};

type TypewriterAnimatedTextProps = {
  strings: string[];
  className?: string;
  loop?: boolean;
};

export const TypewriterAnimatedText: React.FC<TypewriterAnimatedTextProps> = ({ 
  strings, 
  className = '',
  loop = true 
}) => {
  return (
    <div className={className}>
      <Typewriter
        options={{
          strings,
          autoStart: true,
          loop,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default AnimatedText;
