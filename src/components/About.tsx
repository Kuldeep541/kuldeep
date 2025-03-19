
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants, containerVariants } from '@/lib/motion-variants';
import { AnimatedText } from './ui/AnimatedText';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="text-center mb-16"
          custom={0}
          variants={fadeInUpVariants}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            About Me
          </span>
          <h2 className="heading-lg">Get to know me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            custom={1}
            variants={fadeInUpVariants}
          >
            <p className="body-lg">
              <AnimatedText 
                text="I'm a dedicated web developer focused on building innovative digital solutions that solve real-world problems."
                by="word"
                once={true}
              />
            </p>
            
            <p className="body-md text-foreground/80">
              With a strong foundation in modern web technologies, I specialize in creating responsive, user-friendly applications that deliver exceptional experiences. My background in computer science has equipped me with problem-solving skills and a deep understanding of software development principles.
            </p>
            
            <p className="body-md text-foreground/80">
              I'm constantly learning and exploring new technologies to stay at the cutting edge of web development, enabling me to implement the most effective solutions for each project.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            custom={2}
            variants={fadeInUpVariants}
          >
            <div className="p-6 glass rounded-2xl">
              <h3 className="heading-sm mb-4 text-gradient">My Mission</h3>
              <p className="body-md">
                "Passionate about building innovative digital solutions and aiming to create a unicorn startup in India."
              </p>
              <div className="mt-6 pt-6 border-t border-primary/10">
                <h4 className="font-medium mb-2">Education</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>B.Tech in Computer Science</span>
                    <span className="text-primary">77% (CGPA 7.7)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Intermediate</span>
                    <span className="text-primary">73%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>High School</span>
                    <span className="text-primary">78%</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
