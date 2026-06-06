import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ProjectsView from './components/ProjectsView';
import ExperienceView from './components/ExperienceView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import { projectsData } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { FileCheck, ArrowRight, Download, Eye } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Smooth scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleDownloadCV = () => {
  setToastMessage('Sagar Singh - Data Analyst Resume.pdf Download Initiated!');
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 4000);

  const link = document.createElement('a');
  link.href = './src/01_resume_sagar_singh_DA.pdf'; // Path to your resume file
  link.download = '01_resume_sagar_singh_DA.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setTab={setActiveTab} featuredProjects={projectsData} />;
      case 'projects':
        return <ProjectsView projects={projectsData} />;
      case 'experience':
        return <ExperienceView />;
      case 'about':
        return <AboutView setTab={setActiveTab} />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setTab={setActiveTab} featuredProjects={projectsData} />;
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen font-body flex flex-col selection:bg-primary-container selection:text-white transition-colors duration-300">
      
      {/* Dynamic Navigation Bar */}
      <Navbar currentTab={activeTab} setTab={setActiveTab} onDownloadCV={handleDownloadCV} />

      {/* Main Screen Content Flow with slide/fade entries */}
      <main className="flex-grow pt-28 pb-16 max-w-container-max mx-auto px-6 sm:px-12 w-full transition-all duration-500">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Universal Footer */}
      <Footer currentTab={activeTab} />

      {/* Premium Toast Interaction Banner */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-[100] bg-surface-container-highest border border-primary/40 text-on-surface px-6 py-4 rounded-lg shadow-looming max-w-sm flex items-center gap-4 border-l-4 border-l-primary"
            id="cv-download-toast"
          >
            <div className="bg-primary/20 p-2 rounded-full text-primary shrink-0">
              <FileCheck className="w-5 h-5 animate-bounce" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-headline text-xs font-bold uppercase tracking-wider text-primary">System Action</span>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
