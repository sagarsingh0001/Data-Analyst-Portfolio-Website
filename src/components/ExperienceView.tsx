import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, Cloud, Code, BarChart, Hammer, CheckCircle2, Trophy } from 'lucide-react';
import { certificationsData } from '../data';

export default function ExperienceView() {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  const activeCert = certificationsData.find((c) => c.id === selectedCertId);

  return (
    <div className="w-full relative overflow-hidden animate-fadeIn" id="experience-view">
      {/* Professional Journey Section */}
      <section className="flex flex-col items-center max-w-container-max mx-auto px-6 sm:px-12 pt-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-primary mb-3 block font-extrabold">CHRONOLOGICAL HISTORY</span>
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold uppercase text-on-surface">Professional Journey</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-4"></div>
        </div>

        {/* Timeline (Responsive: standard staggered on desktop, single-column on mobile) */}
        <div className="w-full max-w-4xl relative">
          {/* Timeline Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10"></div>

          {/* Experience Item 1: Intern */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-16">
            <div className="w-full md:w-[45%] text-left md:text-right pr-0 md:pr-8 mb-4 md:mb-0">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 block mb-1">INTERNSHIP</span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-on-surface mb-2">Data Analyst Intern</h3>
              <p className="font-body text-base font-bold text-primary mb-2 uppercase tracking-wide">Zeno Talent</p>
              <p className="font-sans text-[10px] uppercase tracking-wider text-on-surface-variant">May 2024 – July 2024</p>
            </div>
            
            {/* Timeline Dot (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-primary rounded-none"></div>
            
            <div className="w-full md:w-[45%] text-left pl-0 md:pl-8">
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-surface-container-low p-8 rounded-none border border-white/10 shadow-looming"
              >
                <ul className="list-disc list-outside ml-4 font-body text-sm text-on-surface-variant space-y-2 font-light">
                  <li>Analyzed large datasets to identify key trends, cohorts, and patterns.</li>
                  <li>Developed clean interactive dashboards using Power BI.</li>
                  <li>Collaborated with cross-functional teams to drive strategic data-informed decisions.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Experience Item 2: Education */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-[45%] text-left md:text-right pr-0 md:pr-8 order-2 md:order-1">
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-surface-container-low p-8 rounded-none border border-white/10 shadow-looming"
              >
                <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light">
                  Focusing on data science, machine learning, and advanced analytics. Maintaining a strong academic record while participating in multiple technical projects.
                </p>
              </motion.div>
            </div>

            {/* Timeline Dot (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-white/20 rounded-none border border-white/10"></div>

            <div className="w-full md:w-[45%] text-left pl-0 md:pl-8 mb-4 md:mb-0 order-1 md:order-2">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 block mb-1">GRADUATION B.TECH</span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase text-on-surface mb-2">B.Tech in Information Technology</h3>
              <p className="font-body text-base font-bold text-primary mb-2 uppercase tracking-wide">Guru Tegh Bahadur Institute of Technology</p>
              <p className="font-sans text-[10px] uppercase tracking-wider text-on-surface-variant">2021 – 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal Section */}
      <section className="flex flex-col items-center max-w-container-max mx-auto px-6 sm:px-12 py-32 border-t border-white/10 mt-20 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/5 blur-[80px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-primary mb-3 block font-extrabold">TACTICAL CAPABILITIES</span>
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold uppercase text-on-surface">Technical Arsenal</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Category 1 */}
          <div className="bg-[#0f0f0f] p-10 rounded-none border border-white/10 shadow-looming flex flex-col items-center text-center hover:border-white/20 transition-all duration-500 group">
            <div className="text-primary mb-6 transition-colors duration-300">
              <Code className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-on-surface mb-6">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white text-black px-4 py-2 rounded-none font-sans text-[10px] font-extrabold tracking-widest uppercase">Python</span>
              <span className="bg-white text-black px-4 py-2 rounded-none font-sans text-[10px] font-extrabold tracking-widest uppercase">SQL</span>
              <span className="border border-white/10 text-on-surface px-4 py-2 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">C++</span>
              <span className="border border-white/10 text-on-surface px-4 py-2 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">HTML/CSS</span>
            </div>
          </div>

          {/* Category 2 */}
          <div className="bg-[#0f0f0f] p-10 rounded-none border border-white/10 shadow-looming flex flex-col items-center text-center hover:border-white/20 transition-all duration-500 group">
            <div className="text-primary mb-6 transition-colors duration-300">
              <BarChart className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-on-surface mb-6">Visualization</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-primary text-black px-4 py-2 rounded-none font-sans text-[10px] font-extrabold tracking-widest uppercase">Power BI</span>
              <span className="bg-primary text-black px-4 py-2 rounded-none font-sans text-[10px] font-extrabold tracking-widest uppercase">Tableau</span>
              <span className="border border-white/10 text-on-surface px-4 py-2 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">Matplotlib</span>
              <span className="border border-white/10 text-on-surface px-4 py-2 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">Seaborn</span>
            </div>
          </div>

          {/* Category 3 */}
          <div className="bg-[#0f0f0f] p-10 rounded-none border border-white/10 shadow-looming flex flex-col items-center text-center hover:border-white/20 transition-all duration-500 group">
            <div className="text-primary mb-6 transition-colors duration-300">
              <Hammer className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-on-surface mb-6">Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white text-black px-4 py-2 rounded-none font-sans text-[10px] font-extrabold tracking-widest uppercase">Excel</span>
              <span className="border border-white/10 text-on-surface px-4 py-2 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">Jupyter</span>
              <span className="border border-white/10 text-on-surface px-4 py-2 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">Git</span>
              <span className="border border-white/10 text-on-surface px-4 py-2 rounded-none font-sans text-[10px] font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">AWS Basics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="flex flex-col items-center max-w-container-max mx-auto px-6 sm:px-12 py-16 border-t border-white/10 relative z-10 mb-20">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-primary mb-3 block font-extrabold">VALIDATED SPECS</span>
          <h2 className="font-headline text-4xl sm:text-5xl font-extrabold uppercase text-on-surface">Certifications</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {certificationsData.map((cert) => {
            return (
              <motion.div 
                key={cert.id}
                onClick={() => setSelectedCertId(cert.id)}
                whileHover={{ y: -4 }}
                className="bg-[#0f0f0f] border border-white/10 p-10 rounded-none shadow-looming text-center flex flex-col items-center hover:border-primary transition-colors duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-none flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary group-hover:bg-primary/5 transition-colors duration-300">
                  {cert.iconName === 'school' && <GraduationCap className="w-8 h-8 text-on-surface" />}
                  {cert.iconName === 'cloud' && <Cloud className="w-8 h-8 text-on-surface" />}
                  {cert.iconName === 'military_tech' && <Award className="w-8 h-8 text-on-surface" />}
                </div>
                <h3 className="font-headline text-base uppercase font-bold tracking-wide text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="font-sans text-[9px] font-bold tracking-[0.25em] text-on-surface-variant uppercase">
                  {cert.issuer} || {cert.year}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Verification Modal Popup */}
      <AnimatePresence>
        {selectedCertId && activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="cert-modal-overlay">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertId(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-[#0c0c0c] border border-white/10 p-8 sm:p-10 rounded-none shadow-looming w-full max-w-md relative z-10 text-center"
              id="cert-modal-container"
            >
              <div className="flex justify-center mb-6 text-primary">
                <Trophy className="w-14 h-14 animate-pulse text-primary" />
              </div>

              <h4 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-surface mb-2">Verified Credential</h4>
              <p className="font-body text-sm text-on-surface-variant font-light mb-6">
                This academic qualification is signed, tracked and authentic in live record.
              </p>

              <div className="bg-[#050505] border border-white/10 p-5 rounded-none text-left flex flex-col gap-3 font-body mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-1">Certification Name</span>
                  <span className="text-sm font-bold text-on-surface uppercase">{activeCert.name}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-1">Issuing Authority</span>
                  <span className="text-sm font-bold text-on-surface uppercase">{activeCert.issuer}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-1">Verification Status</span>
                  <span className="text-[9px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-1.5 px-3 rounded-none inline-flex items-center gap-1.5 uppercase tracking-widest mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> CHECKED &amp; VERIFIED
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedCertId(null)}
                  className="w-full py-4 bg-white text-black font-sans text-[10px] font-extrabold tracking-widest uppercase rounded-none hover:bg-primary transition-all duration-300 cursor-pointer"
                >
                  Close Record
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
