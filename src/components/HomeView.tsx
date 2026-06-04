import { motion } from 'motion/react';
import { Gauge, Database, BarChart3, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface HomeViewProps {
  setTab: (tab: string) => void;
  featuredProjects: Project[];
}

export default function HomeView({ setTab, featuredProjects }: HomeViewProps) {
  return (
    <div className="w-full relative overflow-hidden animate-fadeIn" id="home-view">
      {/* Hero Section */}
      <section className="relative min-h-[650px] flex flex-col justify-center items-center text-center max-w-container-max mx-auto px-6 sm:px-12 py-20 z-10">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.8em] text-primary block font-extrabold mb-2">DATA ARCHITECTURE &amp; ANALYSIS</span>
          <div className="h-[1px] w-12 bg-white/30 mx-auto"></div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-headline font-black text-5xl sm:text-[90px] md:text-[115px] lg:text-[130px] leading-[0.85] text-on-surface mb-8 tracking-tighter uppercase select-none text-glow"
        >
          ARCHITECT<br/>
          <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.85)' }}>OF DATA.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Results-driven Data Analyst transforming complex structures into elegant, actionable business intelligence. Bridging the gap between raw bytes and high-level strategic reasoning.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-6"
        >
          <button 
            onClick={() => setTab('projects')}
            className="bg-white text-black px-8 py-4 text-[10px] font-extrabold uppercase tracking-widest hover:bg-primary transition-colors duration-300 cursor-pointer"
          >
            View Projects
          </button>
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 italic">Scroll to examine // 01</span>
        </motion.div>
      </section>

      {/* Key Metrics Section */}
      <section className="max-w-container-max mx-auto px-6 sm:px-12 py-24 border-t border-white/10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Metric Card 1 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-surface-container-low border border-white/10 p-10 rounded-none shadow-looming text-center flex flex-col items-center justify-center cursor-pointer group"
          >
            <div className="text-primary mb-4 transition-colors">
              <Gauge className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-5xl font-black text-on-surface mb-2 tracking-tight">40-50%</h3>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant">Faster Insights Generated</p>
          </motion.div>

          {/* Metric Card 2 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-surface-container-low border border-white/10 p-10 rounded-none shadow-looming text-center flex flex-col items-center justify-center cursor-pointer group"
          >
            <div className="text-primary mb-4 transition-colors">
              <Database className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-5xl font-black text-on-surface mb-2 tracking-tight">1M+</h3>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant">Records Processed</p>
          </motion.div>

          {/* Metric Card 3 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-surface-container-low border border-white/10 p-10 rounded-none shadow-looming text-center flex flex-col items-center justify-center cursor-pointer group"
          >
            <div className="text-primary mb-4 transition-colors">
              <BarChart3 className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-5xl font-black text-on-surface mb-2 tracking-tight">90k+</h3>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant">Orders Analyzed</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="max-w-container-max mx-auto px-6 sm:px-12 py-24 relative z-10 border-t border-white/10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3 block font-bold">DIGITAL ARTIFACTS</span>
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold text-on-surface uppercase tracking-tight">Selected Works</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {featuredProjects.slice(0, 2).map((project, idx) => (
            <motion.div 
              key={project.id}
              onClick={() => setTab('projects')}
              whileHover={{ y: -3 }}
              className={`group cursor-pointer flex flex-col ${idx === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="bg-surface-container-low border border-white/10 rounded-none overflow-hidden mb-6 aspect-[4/3] relative">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                
                {/* Image replacement */}
                <img 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                  src={
                    project.id === 'edw' 
                      ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuYgi9ZOmI8IoBQBa79XLQBXGOOlMHQxRmZFYwbfttA72M_T0bFND1eHULJXp5oqlfPQkti7I_VRF3Fl1_qS6fqxJapskINJV5dTot-5AQzIQnRP7XLlzI0q6DTuQ77YmQgSzHH5iQOdCi2ywL9cAui8NgyQr8WAMNo4zV_fMBEZfMaXbGqSbh0S1jw0o8Hu9xZ2mdcnwVFUYKdVeBg0hy2GCjkJA2iRdpwTDWeJEb95cwwV5nAOPj2Gq6aI8cM7U6aELzBg-Ae74'
                      : 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMV3L2odijhoRzMuHkbEQshVXLWOY0GGHD_0IVnqnmwiqwdUZTAmiTEWLrc9mwCEwyWNFBHYlj_Gim0ttD5z-C-KOqwJf6fDWWQt9pBwUxgaJE1DjNgi9zraHP_V5v0ctYTF0DJ3tUn7aYSaQIedPjo2zYt0oiLrTan5lDIWcHU5TXRrN_S5qmRCvm_Wtt8e0gMFwmQ1ItgvEGKBY2QfBtQQntVLjPg-wRU5OGa0tBL4Q2HBR0ZRh7bsE6SdjD86UeNHIqmG1aP3M'
                  }
                />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase tracking-wide text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant font-light">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mt-1 w-6 h-6 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <motion.button 
            onClick={() => setTab('projects')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-white text-black px-10 py-5 hover:bg-primary transition-colors duration-300 font-sans text-[11px] font-extrabold tracking-[0.25em] uppercase gap-3 group cursor-pointer"
          >
            View All Projects
            <ArrowRight className="text-black group-hover:translate-x-1.5 transition-transform w-4 h-4 shrink-0" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
