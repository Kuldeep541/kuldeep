
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants, containerVariants, buttonVariants } from '@/lib/motion-variants';
import { Mail, Linkedin, Github, Phone, MapPin, Send } from 'lucide-react';

const ContactInfoItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  index: number;
}> = ({ icon, title, value, link, index }) => {
  return (
    <motion.a 
      href={link || '#'} 
      target={link ? "_blank" : "_self"} 
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-5 glass rounded-xl transition-transform hover:-translate-y-1"
      variants={fadeInUpVariants}
      custom={index}
    >
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-foreground/90 mb-1">{title}</h3>
        <p className="text-sm text-foreground/70">{value}</p>
      </div>
    </motion.a>
  );
};

const contacts = [
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "kuldeepprajapati2111@gmail.com",
    link: "mailto:kuldeepprajapati2111@gmail.com"
  },
  {
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+91 7380892966",
    link: "tel:+917380892966"
  },
  {
    icon: <Linkedin size={20} />,
    title: "LinkedIn",
    value: "linkedin.com/in/kuldeep-prajapati-aa9276178",
    link: "https://linkedin.com/in/"
  },
  {
    icon: <Github size={20} />,
    title: "GitHub",
    value: "github.com/kuldeep541",
    link: "https://github.com/"
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Lucknow,Uttar Pradesh, India"
  }
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
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
            Get In Touch
          </span>
          <h2 className="heading-lg">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {contacts.map((contact, index) => (
              <ContactInfoItem 
                key={contact.title}
                icon={contact.icon}
                title={contact.title}
                value={contact.value}
                link={contact.link}
                index={index + 1}
              />
            ))}
          </div>

          <motion.div 
            className="lg:col-span-3"
            variants={fadeInUpVariants}
            custom={6}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="heading-sm mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-secondary rounded-lg border border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-secondary rounded-lg border border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-secondary rounded-lg border border-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium disabled:opacity-70"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
