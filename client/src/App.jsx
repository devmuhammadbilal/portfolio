import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
// --- CONSOLIDATED IMPORTS ---
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Layout, 
  Server, 
  Globe, 
  CheckCircle, 
  X,
  Menu, // Hamburger Icon
  // Skill Icons
  Database,
  Code2,
  Palette, 
  Box,     
  Terminal,
  Zap,      
  Lock,     
  Workflow  
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { projects } from './constants'; 

// --- SKILLS DATA ---
const skillsData = [
  { name: "React", icon: <Code2 size={20} className="text-cyan-400" /> },
  { name: "Node.js", icon: <Server size={20} className="text-green-500" /> },
  { name: "MongoDB", icon: <Database size={20} className="text-green-400" /> },
  { name: "Express", icon: <Globe size={20} className="text-white" /> },
  { name: "Tailwind", icon: <Palette size={20} className="text-cyan-300" /> },
  { name: "Socket.io", icon: <Zap size={20} className="text-yellow-400" /> }, 
  { name: "Redux", icon: <Box size={20} className="text-purple-500" /> },
  { name: "JWT Auth", icon: <Lock size={20} className="text-red-400" /> },     
  { name: "Postman", icon: <Workflow size={20} className="text-orange-400" /> }, 
  { name: "TypeScript", icon: <Terminal size={20} className="text-blue-400" /> },
];

// --- SERVICES SECTION ---
const ServicesSection = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "I build responsive, pixel-perfect interfaces using React, Tailwind, and Framer Motion that engage users instantly.",
      icon: <Layout className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Backend Architecture",
      description: "Secure and scalable server-side systems using Node.js and Express. REST APIs that are fast and reliable.",
      icon: <Server className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Full Product Development",
      description: "From idea to deployment. I handle the entire lifecycle: design, database, code, and hosting on the cloud.",
      icon: <Globe className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Services</h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
          Comprehensive MERN stack solutions for businesses looking to scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-zinc-900 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-colors group"
          >
            <div className="mb-6 p-4 bg-zinc-950 rounded-xl inline-block border border-white/5 group-hover:border-cyan-500/20 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- CONTACT SECTION ---
const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_cjp9d8b',    
      'template_dbtyg6b',   
      formRef.current,
      'n2_OIPO37h1iwp_Tm'     
    )
    .then((result) => {
      setLoading(false);
      setShowModal(true); 
      e.target.reset(); 
    }, (error) => {
      setLoading(false);
      alert("Something went wrong. Please try again.");
      console.log(error.text);
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Ready to build something <span className="text-cyan-400">great?</span>
      </h2>
      <p className="text-base md:text-xl text-zinc-400 mb-8 md:mb-12 max-w-2xl mx-auto">
        I am currently available for freelance projects. 
        If you have a MERN stack project that needs a senior touch, let's talk.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
          <input 
            type="text"
            name="from_name"
            required
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm md:text-base"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
          <input 
            type="email"
            name="from_email"
            required
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm md:text-base"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
          <textarea 
            rows="4"
            name="message"
            required
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm md:text-base"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>
        
        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black font-bold py-3 md:py-4 rounded-lg hover:bg-zinc-200 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* SUCCESS MODAL */}
      {showModal && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} 
            animate={{ scale: 1, y: 0 }} 
            className="bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8 max-w-sm w-full text-center relative shadow-2xl"
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-500/10 rounded-full border border-green-500/20">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-zinc-400 mb-6">
              Thanks for reaching out. I'll get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

// --- MAIN APP ---
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // 1. Scroll to Top Handler
  const scrollToTop = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Scroll to Contact Handler (FIXED)
  const scrollToContact = (e) => {
    e.preventDefault(); // Stop default anchor jump
    setIsMobileMenuOpen(false); // Close menu first
    
    // Find the section and scroll smoothly
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu on scroll or click outside
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Marquee Animation
  const skillRef = useRef(null);
  const isSkillInView = useInView(skillRef); 
  const skillControls = useAnimation();     

  useEffect(() => {
    if (isSkillInView) {
      skillControls.start({
        x: "-50%",
        transition: { ease: "linear", duration: 30, repeat: Infinity }
      });
    } else {
      skillControls.stop();
      skillControls.set({ x: 0 });
    }
  }, [isSkillInView, skillControls]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-80 bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" onClick={scrollToTop} className="text-lg md:text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors cursor-pointer">
            Muhammad Bilal<span className="text-cyan-500">.</span>
          </a>
          
          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/devmuhammadbilal" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="www.linkedin.com/in/muhammadbilal00" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
            {/* Desktop Contact Button */}
            <a href="#contact" onClick={scrollToContact} className="px-4 py-2 text-sm font-medium border border-zinc-800 rounded-full hover:bg-zinc-900 text-white transition-all">
              Contact Me
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button ref={buttonRef} onClick={toggleMenu} className="md:hidden text-zinc-400 hover:text-white focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              ref={menuRef} 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-950 border-b border-white/5 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8 space-y-8 flex flex-col items-center">
                 <div className="flex gap-10">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white">
                      <div className="p-4 bg-zinc-900 rounded-full border border-white/5"><Github size={24} /></div>
                      <span className="text-xs font-medium">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white">
                      <div className="p-4 bg-zinc-900 rounded-full border border-white/5"><Linkedin size={24} /></div>
                       <span className="text-xs font-medium">LinkedIn</span>
                    </a>
                 </div>
                 {/* Mobile Contact Button - Uses scrollToContact to fix the issue */}
                 <a 
                   href="#contact" 
                   onClick={scrollToContact}
                   className="w-full max-w-xs py-3 text-center text-sm font-bold bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
                 >
                   Contact Me
                 </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Full Stack Developer
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Designing systems <br />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">precision.</span>
          </h1>
          <p className="text-base md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            I help companies build scalable web applications using the MERN stack. 
            Focused on clean code, performance, and user experience.
          </p>
        </motion.div>
      </section>

      {/* INFINITE SKILLS MARQUEE */}
      <section ref={skillRef} className="py-8 md:py-10 border-y border-white/5 bg-white/5 overflow-hidden flex">
        <motion.div 
          className="flex gap-12 md:gap-20 pr-12 md:pr-20 shrink-0"
          animate={skillControls} 
        >
            {[...skillsData, ...skillsData].map((skill, index) => (
               <div key={index} className="flex items-center gap-3 shrink-0">
                 {skill.icon}
                 <span className="font-semibold text-sm md:text-base text-zinc-300">{skill.name}</span>
               </div>
            ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1">View all <ArrowUpRight size={14}/></a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="h-56 md:h-64 overflow-hidden bg-zinc-800 relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black rounded-full hover:bg-cyan-400 hover:scale-110 transition-all z-10">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="text-sm md:text-base text-zinc-400 mb-6 line-clamp-2 flex-grow">{project.description}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5 group-hover:border-white/10 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
     
     {/* Services Section */}
      <ServicesSection />

     {/* Contact Section */}
      <ContactSection />

      {/* Final Footer */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5 bg-zinc-950">
        <p>© 2025 Muhammad Bilal. Built with MERN expertise.</p>
      </footer>
    </div>
  );
};

export default App;
