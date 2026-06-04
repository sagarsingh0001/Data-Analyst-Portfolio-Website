import { Megaphone, Mail, Linkedin, Github, ArrowRight, BookOpen, Clock, Heart } from 'lucide-react';

interface AboutViewProps {
  setTab: (tab: string) => void;
}

export default function AboutView({ setTab }: AboutViewProps) {
  // Inline object for subtle grid pattern to ensure rendering regardless of compilation layer
  const gridStyle = {
    backgroundSize: '50px 50px',
    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                     linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`
  };

  return (
    <div className="w-full relative overflow-hidden animate-fadeIn" id="about-view">
      {/* Hero Section */}
      <section 
        style={gridStyle}
        className="flex flex-col items-center justify-center text-center mb-36 py-24 relative rounded-none border border-white/10 backdrop-blur-sm shadow-looming"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-0 hover:opacity-90 transition-opacity"></div>
        
        <div className="z-10 flex flex-col items-center px-6">
          <span className="font-sans text-[10px] font-bold uppercase text-primary tracking-[0.3em] mb-6">About Sagar Singh // Specification</span>
          <h1 className="font-headline text-5xl sm:text-7xl font-black text-on-surface mb-8 max-w-4xl tracking-tighter uppercase select-none">
            BEYOND THE <span className="text-primary">DATA</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl font-light">
            Transforming raw information, telemetry, and structured records into strategic execution with uncompromising precision.
          </p>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="mb-36 animate-fadeIn">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <span className="text-[9px] uppercase tracking-[0.25em] text-primary block mb-2 font-bold font-sans">PHILOSOPHY</span>
            <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-on-surface tracking-tight animate-pulse">The Architect's Story</h2>
            <div className="w-12 h-[1px] bg-primary mt-4"></div>
          </div>
          
          <div className="md:w-2/3 space-y-8 font-light text-on-surface-variant">
            <p className="font-body text-base leading-relaxed">
              My approach to data is structural. I don't just look for trends; I build robust frameworks that turn chaotic information streams into clear, actionable intelligence. Precision is not just a goal; it is the foundation of every query I write and every model I deploy.
            </p>
            <p className="font-body text-base leading-relaxed">
              I specialize in creating elegant solutions to complex business problems, leveraging advanced analytical techniques to provide insights that drive tangible results. For me, data analysis is the ultimate fusion of logic and creative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Journey & Education */}
      <section className="mb-36">
        <div className="bg-[#0e0e0e] border border-white/10 rounded-none p-8 sm:p-16 shadow-looming">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            <div className="md:w-1/2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary block mb-1 font-bold">EDUCATIONAL BLOCK</span>
              <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-on-surface mb-4">Academic Foundation</h3>
              <p className="font-body text-sm text-on-surface-variant mb-8 leading-relaxed font-light">
                My journey began with a deep curiosity for systems and logic, culminating in a solid educational background in Information Technology. This rigorous technical foundation allows me to understand not just the 'how' of data analysis, but the deeper 'why' behind the systems that generate it.
              </p>
              
              <div className="bg-[#050505] border border-white/10 p-6 sm:p-8 rounded-none shadow-sm">
                <h4 className="font-headline text-xl font-bold uppercase tracking-wide text-on-surface mb-3">B.Tech in Information Technology</h4>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-sans text-[10px] font-bold text-primary uppercase tracking-[0.15em]">2018 - 2022</span>
                  <span className="bg-primary text-black font-sans text-[9px] font-extrabold px-3 py-1.5 rounded-none uppercase tracking-widest shadow-sm">GPA 8.7</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light">
                  Intensive coursework in algorithms, database management, and statistical modeling provided the crucial stepping stones into the world of Data Science.
                </p>
              </div>
            </div>

            {/* Academic Photo with ambient glow layers */}
            <div className="md:w-1/2 relative h-[380px] w-full rounded-none overflow-hidden border border-white/10 hidden md:block group">
              <div 
                className="absolute inset-0 bg-cover bg-center brightness-75 group-hover:brightness-90 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMV3L2odijhoRzMuHkbEQshVXLWOY0GGHD_0IVnqnmwiqwdUZTAmiTEWLrc9mwCEwyWNFBHYlj_Gim0ttD5z-C-KOqwJf6fDWWQt9pBwUxgaJE1DjNgi9zraHP_V5v0ctYTF0DJ3tUn7aYSaQIedPjo2zYt0oiLrTan5lDIWcHU5TXRrN_S5qmRCvm_Wtt8e0gMFwmQ1ItgvEGKBY2QfBtQQntVLjPg-wRU5OGa0tBL4Q2HBR0ZRh7bsE6SdjD86UeNHIqmG1aP3M')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10 flex gap-4">
                <div className="bg-black/90 border border-white/10 backdrop-blur-md px-4 py-3 rounded-none flex items-center gap-3 w-full">
                  <BookOpen className="text-primary w-4 h-4 shrink-0" />
                  <span className="font-sans text-[10px] uppercase tracking-wider text-on-surface font-bold">Institutional Excellence & Practical Learning</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* G-Sharp Volunteering / Impact */}
      <section className="mb-36 animate-fadeIn">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-primary mb-3 block font-bold">EXTRACURRICULAR PIPELINE</span>
          <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-on-surface mb-2">Creative Coordination</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto"></div>
          <p className="font-body text-sm text-on-surface-variant max-w-2xl leading-relaxed font-light mt-4">
            Leadership and orchestration extending beyond the terminal of data structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 bg-[#0f0f0f] border border-white/10 p-8 sm:p-10 rounded-none shadow-looming flex flex-col justify-center items-center text-center group">
            <Megaphone className="w-14 h-14 text-primary mb-6 group-hover:scale-105 transition-transform duration-500" />
            <h3 className="font-headline text-xl font-bold uppercase tracking-wide text-on-surface mb-1">G-Sharp Event</h3>
            <p className="font-sans text-[9px] font-extrabold text-primary uppercase tracking-[0.2em]">
              Lead Coordinator
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="bg-[#0f0f0f] border border-white/10 border-l-primary/60 border-l-2 p-8 rounded-none shadow-looming">
              <h4 className="font-headline text-base font-bold uppercase tracking-wide text-on-surface mb-3 flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                Team Orchestration
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light font-sans font-light">
                Coordinated diverse student teams to ensure seamless execution of the large-scale musical event. Managed inter-departmental communication and aligned disparate groups toward a unified goal under high-pressure conditions.
              </p>
            </div>

            <div className="bg-[#0f0f0f] border border-white/10 border-l-primary/60 border-l-2 p-8 rounded-none shadow-looming">
              <h4 className="font-headline text-base font-bold uppercase tracking-wide text-on-surface mb-3 flex items-center gap-3">
                <Heart className="w-4 h-4 text-primary" />
                Logistical Precision
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light font-sans font-light">
                Directed complex schedules and ensured absolute stage readiness. Applied the same rigorous organizational methodologies used in data structuring to real-world event management, resulting in a flawless attendee experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center text-center py-20 border-t border-white/10 mt-36">
        <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase text-on-surface mb-8 max-w-3xl leading-tight">
          Ready to Architect Your Data Strategy?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={() => setTab('projects')}
            className="bg-white text-black px-8 py-4 rounded-none hover:bg-primary transition-colors font-sans text-[10px] font-extrabold uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer shadow-none"
          >
            View Projects 
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button 
            onClick={() => setTab('contact')}
            className="bg-transparent border border-white/20 text-on-background px-8 py-4 rounded-none hover:border-primary hover:text-primary transition-colors font-sans text-[10px] font-extrabold uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        <div className="mt-16 flex flex-wrap gap-6 justify-center items-center text-on-surface-variant font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
          <a className="hover:text-primary transition-colors flex items-center gap-2 cursor-pointer" href="mailto:sagar0308singh@gmail.com">
            <Mail className="w-3.5 h-3.5 text-primary" /> Email
          </a>
          <span className="text-white/20 hidden sm:block">//</span>
          <a className="hover:text-primary transition-colors flex items-center gap-2 cursor-pointer" href="https://linkedin.com/in/sagar-singh0308/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-3.5 h-3.5 text-primary" /> LinkedIn
          </a>
          <span className="text-white/20 hidden sm:block">//</span>
          <a className="hover:text-primary transition-colors flex items-center gap-2 cursor-pointer" href="https://github.com/sagarsingh0001" target="_blank" rel="noopener noreferrer">
            <Github className="w-3.5 h-3.5 text-primary" /> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
