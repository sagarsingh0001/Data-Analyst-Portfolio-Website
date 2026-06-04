import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onDownloadCV: () => void;
}

export default function Navbar({ currentTab, setTab, onDownloadCV }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const getLogoText = () => {
    return 'SAGAR SINGH';
  };

  return (
    <nav className="bg-surface/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/10 transition-colors duration-300">
      <div className="mx-auto flex justify-between items-center h-20 max-w-container-max px-6 sm:px-12">
        <div className="flex items-center gap-6 sm:gap-8">
          <button 
            onClick={() => setTab('home')} 
            className="font-headline text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-on-surface hover:text-primary transition-all duration-300 cursor-pointer"
            id="nav-logo"
          >
            {getLogoText()}
          </button>
          <div className="hidden sm:block h-[1px] w-8 bg-white/20"></div>
          <span className="hidden sm:inline text-[9px] tracking-[0.25em] text-white/40 uppercase">DATA • INSIGHT</span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8" id="desktop-tabs">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setTab(tab.id)}
                className={`font-sans text-[10px] uppercase tracking-[0.25em] font-bold transition-colors cursor-pointer hover:text-primary ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-on-surface-variant'
                }`}
                id={`tab-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Download CV button */}
        <button 
          onClick={onDownloadCV}
          className="hidden md:inline-flex border border-white/20 hover:border-primary hover:text-primary rounded-full px-5 py-2.5 transition-all duration-300 font-sans text-[10px] font-semibold tracking-widest uppercase cursor-pointer items-center gap-2"
          id="btn-download-cv"
        >
          <Download className="w-3.5 h-3.5 text-primary" />
          Download CV
        </button>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-on-surface hover:text-primary transition-colors cursor-pointer p-2"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav dropdown overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden border-t border-white/10 bg-surface-container py-6 px-8 flex flex-col gap-4 animate-fadeIn"
          id="mobile-nav-panel"
        >
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 font-sans text-[10px] uppercase tracking-[0.25em] font-semibold transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
          <button 
            onClick={() => {
              onDownloadCV();
              setMobileMenuOpen(false);
            }}
            className="mt-2 w-full justify-center bg-transparent border border-white/20 hover:border-primary/50 text-on-surface py-3 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-primary" />
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
}
