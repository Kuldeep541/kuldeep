
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, X } from 'lucide-react';
import { navItemVariants } from '@/lib/motion-variants';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.nav 
        className={`${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        } transition-all duration-300 ease-in-out px-6 md:px-12 lg:px-24`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a href="#home" className="focus-ring">
              <span className="text-primary">K</span>uldeep
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul 
            className="hidden md:flex space-x-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                custom={i}
                variants={navItemVariants}
                initial="closed"
                animate="open"
              >
                <a 
                  href={link.href} 
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 focus-ring"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              custom={navLinks.length}
              variants={navItemVariants}
              initial="closed"
              animate="open"
            >
              <a 
                href="#contact" 
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300 focus-ring"
              >
                Let's Talk
              </a>
            </motion.li>
          </motion.ul>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden focus-ring p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden glass absolute top-full left-0 w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul 
              className="flex flex-col space-y-4 p-6"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                },
                closed: {}
              }}
              initial="closed"
              animate="open"
            >
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  variants={navItemVariants}
                  custom={i}
                >
                  <a 
                    href={link.href} 
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={navItemVariants}
                custom={navLinks.length}
              >
                <a 
                  href="#contact" 
                  className="block bg-primary text-white px-4 py-2 rounded-full text-center hover:bg-primary/90 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
