import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, BarChart3, ShieldCheck, Terminal, Heart } from 'lucide-react';
import { Project } from '../types';

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === activeCaseStudyId);

  return (
    <div className="w-full relative overflow-hidden animate-fadeIn" id="projects-view">
      {/* Header Section */}
      <section className="relative max-w-container-max mx-auto px-6 sm:px-12 text-center flex flex-col items-center gap-6 mb-24 z-10 pt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-[0.35em] text-primary block font-extrabold">TECHNICAL PORTFOLIO</span>
        <h1 className="font-headline text-5xl sm:text-7xl font-black text-on-surface leading-none uppercase tracking-tighter">Selected Works</h1>
        <div className="w-12 h-[1px] bg-primary mt-2"></div>
        <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
          A engineered collection of technical architecture, solid core pipelines, and raw mathematical databases structured with elegance and tactical reasoning.
        </p>
      </section>

      {/* Project Stack */}
      <section className="max-w-container-max mx-auto px-6 sm:px-12 flex flex-col gap-32 relative z-10 mb-20">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 group items-center"
            >
              {/* Image Column */}
              <div 
                className={`bg-surface-container border border-white/10 rounded-none shadow-looming overflow-hidden aspect-[4/3] relative ${
                  !isEven ? 'md:order-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                <img 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
                  src={project.image}
                />
              </div>

              {/* Text Column */}
              <div className={`flex flex-col gap-6 ${!isEven ? 'md:order-1' : ''}`}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/5 text-on-surface font-body text-[10px] font-bold tracking-widest border border-white/10 uppercase rounded-none hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-headline text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>

                <p className="font-body text-base text-on-surface-variant font-light leading-relaxed">
                  {project.fullDescription}
                </p>

                <button 
                  onClick={() => setActiveCaseStudyId(project.id)}
                  className="inline-flex items-center gap-3 bg-white text-black hover:bg-primary transition-colors duration-300 font-sans text-[10px] font-extrabold px-6 py-3.5 uppercase tracking-[0.25em] cursor-pointer w-fit self-start"
                >
                  View Case Study 
                  <ArrowRight className="text-black w-4 h-4 shrink-0 animate-pulse" />
                </button>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Case Study Detailed Modal */}
      <AnimatePresence>
        {activeCaseStudyId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="case-study-modal-overlay">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudyId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0c0c0c] border border-white/10 rounded-none shadow-looming w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 p-6 sm:p-10 scrollbar-thin scrollbar-thumb-white/20"
              id="case-study-modal-container"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveCaseStudyId(null)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary p-2 cursor-pointer transition-colors border border-white/10 hover:border-primary/40 rounded-none"
                id="close-case-study"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="mt-4">
                  <span className="font-body text-[10px] font-bold tracking-[0.2em] text-primary uppercase block mb-2">Technical Case Study // Spec 08</span>
                  <h3 className="font-headline text-3xl sm:text-4xl font-black uppercase text-on-surface mb-4">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 text-primary font-body text-[10px] tracking-wider uppercase border border-white/10 rounded-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Banner Image */}
                <div className="aspect-[21/9] w-full rounded-none overflow-hidden border border-white/10 relative">
                  <img 
                    src={selectedProject.image} 
                    referrerPolicy="no-referrer"
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
                </div>

                {/* Stats Grid */}
                {selectedProject.stats && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.stats.map((stat, i) => (
                      <div key={i} className="bg-[#0f0f0f] border border-white/10 p-6 rounded-none text-center">
                        <span className="text-primary font-headline text-3xl font-black block mb-1">{stat.value}</span>
                        <span className="font-body text-[9.5px] text-on-surface-variant uppercase tracking-[0.25em]">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/10">
                  <div className="md:col-span-2 flex flex-col gap-6">
                    <h4 className="font-headline text-base font-bold uppercase tracking-wider text-on-surface flex items-center gap-2">
                      <Terminal className="text-primary w-4 h-4" />
                      Detailed Overview & Methodology
                    </h4>
                    <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                      {selectedProject.fullDescription}
                    </p>
                    
                    {selectedProject.impact && (
                      <div className="bg-white/5 border border-white/10 p-6 rounded-none flex gap-4">
                        <div className="text-primary mt-1 shrink-0">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-headline text-[11px] uppercase tracking-wider font-bold text-on-surface mb-1">Business Impact</h5>
                          <p className="font-body text-sm text-on-surface-variant font-light leading-relaxed">
                            {selectedProject.impact}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar stats/architectures */}
                  <div className="flex flex-col gap-6">
                    <h4 className="font-headline text-base font-bold uppercase tracking-wider text-on-surface flex items-center gap-2">
                      <BarChart3 className="text-primary w-4 h-4" />
                      Infrastructure layers
                    </h4>
                    
                    {selectedProject.architecture ? (
                      <ul className="flex flex-col gap-3">
                        {selectedProject.architecture.map((arch, index) => (
                          <li key={index} className="bg-white/5 p-4 rounded-none border border-white/10 font-body text-xs text-on-surface-variant flex items-start gap-4">
                            <span className="text-primary font-bold shrink-0">0{index + 1}</span>
                            <span className="font-light">{arch}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="bg-white/5 p-6 rounded-none border border-white/10 text-center text-xs text-on-surface-variant font-light">
                        Secure transactional relational warehouse with analytical dbt checkpoints.
                      </div>
                    )}
                    
                    <button 
                      onClick={() => setActiveCaseStudyId(null)}
                      className="mt-4 w-full py-4 bg-transparent border border-white/20 hover:border-primary text-on-surface hover:text-primary font-sans text-[10px] font-bold uppercase tracking-[0.2em] rounded-none transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 text-primary" />
                      Mark as Read
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
