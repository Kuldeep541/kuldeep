
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/lib/motion-variants';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary/80 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div 
            className="mb-6 md:mb-0"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-2xl font-bold">
              <span className="text-primary">K</span>uldeep
            </h2>
            <p className="text-foreground/60 mt-1">Web Developer | Problem Solver</p>
          </motion.div>

          <motion.div 
            className="flex space-x-4"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <a 
              href="mailto:kuldeep@example.com" 
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-foreground/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <div className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kuldeep Prajapati. All rights reserved.
          </div>

          <div className="flex items-center space-x-8">
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
