
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants, containerVariants, projectCardVariants } from '@/lib/motion-variants';
import { ExternalLink, Github, Calendar, Building } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveDemoLink?: string;
  githubLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  image,
  liveDemoLink,
  githubLink,
  index
}) => {
  return (
    <motion.div 
      className="glass rounded-2xl overflow-hidden"
      variants={projectCardVariants}
      custom={index}
      whileHover="hover"
    >
      <div className="h-48 bg-muted overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary font-medium">
          {title} Preview
        </div>
      </div>
      <div className="p-6">
        <h3 className="heading-sm mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span 
              key={item} 
              className="text-xs py-1 px-2 rounded-full bg-primary/10 text-primary"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveDemoLink && (
            <a 
              href={liveDemoLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface ExperienceItemProps {
  company: string;
  position: string;
  duration: string;
  description: string;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  company, 
  position, 
  duration,
  description,
  index
}) => {
  return (
    <motion.div 
      className="glass rounded-xl p-6"
      variants={fadeInUpVariants}
      custom={index}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          <Building size={20} />
        </div>
        <div>
          <h3 className="font-medium">{company}</h3>
          <p className="text-sm text-foreground/70">{position}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-sm text-foreground/60 mb-3">
        <Calendar size={16} />
        <span>{duration}</span>
      </div>
      <p className="text-foreground/80">{description}</p>
    </motion.div>
  );
};

const projects = [
  {
    title: "CRM-Based Library System",
    description: "A comprehensive library management system with CRM features for tracking user borrowing patterns and preferences.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "",
    liveDemoLink: "#",
    githubLink: "#"
  },
  {
    title: "Contract Management System",
    description: "A secure platform for managing, signing, and tracking legal contracts with automated reminder system.",
    tech: ["React", "Firebase", "Material UI", "Redux"],
    image: "",
    liveDemoLink: "#",
    githubLink: "#"
  },
  {
    title: "E-Talk for Licensing Authorities",
    description: "A communication platform designed specifically for licensing authorities to streamline approval processes.",
    tech: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL"],
    image: "",
    liveDemoLink: "#",
    githubLink: "#"
  }
];

const experiences = [
  {
    company: "Oasis Infobyte",
    position: "Web Development Intern",
    duration: "May 2022 - July 2022",
    description: "Developed responsive websites and web applications. Collaborated with senior developers to implement new features and improved existing functionality."
  },
  {
    company: "IT Academics Pvt. Ltd.",
    position: "Frontend Developer Intern",
    duration: "Jan 2022 - April 2022",
    description: "Designed and implemented user interfaces for multiple web applications. Worked on optimizing application performance and improving user experience."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUpVariants}
          custom={0}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Work & Projects
          </span>
          <h2 className="heading-lg">Experience & Portfolio</h2>
        </motion.div>

        <div className="space-y-20">
          {/* Experience Section */}
          <div>
            <motion.h3 
              className="heading-sm mb-6 text-gradient"
              variants={fadeInUpVariants}
              custom={1}
            >
              Work Experience
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <ExperienceItem 
                  key={exp.company}
                  company={exp.company}
                  position={exp.position}
                  duration={exp.duration}
                  description={exp.description}
                  index={index + 2}
                />
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <motion.h3 
              className="heading-sm mb-6 text-gradient"
              variants={fadeInUpVariants}
              custom={4}
            >
              Featured Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  image={project.image}
                  liveDemoLink={project.liveDemoLink}
                  githubLink={project.githubLink}
                  index={index + 5}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
