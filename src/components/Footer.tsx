interface FooterProps {
  currentTab: string;
}

export default function Footer({ currentTab }: FooterProps) {
  const isAbout = currentTab === 'about';

  return (
    <footer className="bg-[#050505] w-full py-16 border-t border-white/10 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center gap-4 max-w-container-max mx-auto px-6 sm:px-12 text-center text-sm">
        
        {isAbout ? (
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6">
            <div className="font-headline font-black text-primary text-lg tracking-[0.2em] uppercase">
              SAGAR SINGH // ARCHITECT
            </div>
            <div className="flex gap-6 font-sans text-[10px] uppercase tracking-widest font-bold">
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="mailto:sagar0308singh@gmail.com">Email</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="tel:7011048461">Phone</a>
            </div>
            <p className="font-sans text-[9px] text-[#555555] tracking-widest uppercase font-bold">
              © 2026 SAGAR SINGH. ALL RIGHTS RESERVED.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <div className="flex items-center gap-6 font-sans text-[10px] uppercase tracking-widest font-bold">
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="https://linkedin.com/in/sagar-singh0308/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="https://github.com/sagarsingh0001" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="mailto:sagar0308singh@gmail.com">Email</a>
              <a className="text-on-surface-variant hover:text-primary transition-all duration-300" href="tel:7011048461">Phone</a>
            </div>
            <p className="font-sans text-[9px] tracking-widest text-[#555555] font-extrabold uppercase">
              © 2026 SAGAR SINGH. ARCHITECT OF DATA.
            </p>
          </div>
        )}
        
      </div>
    </footer>
  );
}
