
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUpVariants, containerVariants, skillBarVariants } from '@/lib/motion-variants';
import { 
  Code, Database, Server, Monitor, Terminal, FileCode,
  SmartphoneNfc, Braces, Globe, PaintBucket, Figma, GitBranch
} from 'lucide-react';

interface SkillItemProps {
  name: string;
  level: number;
  index: number;
  icon: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, index, icon }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      className="p-5 glass rounded-xl"
      variants={fadeInUpVariants}
      custom={index}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 10 } }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary">{icon}</div>
        <h3 className="font-medium">{name}</h3>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress"
          variants={skillBarVariants}
          custom={level}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
    </motion.div>
  );
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90, icon: <Braces size={20} /> },
      { name: "JavaScript/TypeScript", level: 85, icon: <Code size={20} /> },
      { name: "HTML/CSS", level: 95, icon: <FileCode size={20} /> },
      { name: "UI/UX Design", level: 80, icon: <PaintBucket size={20} /> }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88, icon: <Server size={20} /> },
      { name: "Express", level: 85, icon: <Server size={20} /> },
      { name: "RESTful APIs", level: 92, icon: <Globe size={20} /> },
      { name: "MongoDB", level: 80, icon: <Database size={20} /> }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90, icon: <GitBranch size={20} /> },
      { name: "Responsive Design", level: 95, icon: <SmartphoneNfc size={20} /> },
      { name: "Figma", level: 75, icon: <Figma size={20} /> },
      { name: "Terminal & CLI", level: 85, icon: <Terminal size={20} /> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
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
            My Skills
          </span>
          <h2 className="heading-lg">Technical Expertise</h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <motion.h3 
                className="heading-sm mb-6 text-gradient"
                variants={fadeInUpVariants}
                custom={categoryIndex + 1}
              >
                {category.title}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={(categoryIndex + 1) * (skillIndex + 1)}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
