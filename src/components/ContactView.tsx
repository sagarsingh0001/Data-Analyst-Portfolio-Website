import { useState, FormEvent } from 'react';
import { Mail, Phone, ArrowRight, Code, CheckCircle, Clipboard, ClipboardCheck, Trash2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Simulated email database storage
  const [submittedInquiries, setSubmittedInquiries] = useState<typeof formData[]>([]);

  const handleCopyClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) return;
    
    // Save to simulated portfolio database
    setSubmittedInquiries([formData, ...submittedInquiries]);
    setFormSubmitted(true);
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: ''
    });
  };

  const handleDeleteInquiry = (index: number) => {
    const updated = submittedInquiries.filter((_, i) => i !== index);
    setSubmittedInquiries(updated);
  };

  return (
    <div className="w-full relative overflow-hidden animate-fadeIn" id="contact-view">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>

      {/* Header Section */}
      <header className="text-center mb-16 relative z-10 max-w-3xl mx-auto pt-10 px-6">
        <span className="text-[10px] uppercase tracking-[0.35em] text-primary mb-4 block font-extrabold font-sans">ESTABLISH CHANNEL</span>
        <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase text-on-surface mb-6 leading-tight">
          Let's Build Something <span className="text-primary">Meaningful.</span>
        </h1>
        <p className="font-body text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed font-light">
          Seeking to construct robust data pipelines, uncover hidden insights, or architect scalable analytical solutions? I am currently accepting freelance inquiries.
        </p>
      </header>

      {/* Form Card */}
      <div className="w-full max-w-2xl bg-[#0c0c0c] border border-white/10 rounded-none shadow-looming relative z-10 p-8 sm:p-12 mx-auto mb-20">
        <AnimatePresence mode="wait">
          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6" id="portfolio-contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="font-sans text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/40">Name</label>
                  <input 
                    type="text" 
                    id="name-input" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" 
                    className="w-full h-12 px-4 rounded-none bg-[#050505] border border-white/10 text-on-surface focus:outline-none focus:border-primary placeholder-white/20 font-sans text-xs transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-input" className="font-sans text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/40">Email Address</label>
                  <input 
                    type="email" 
                    id="email-input" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com" 
                    className="w-full h-12 px-4 rounded-none bg-[#050505] border border-white/10 text-on-surface focus:outline-none focus:border-primary placeholder-white/20 font-sans text-xs transition-all"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="project-type" className="font-sans text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/40">Project Type</label>
                <div className="relative">
                  <select 
                    id="project-type" 
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full h-12 px-4 rounded-none bg-[#050505] border border-white/10 text-on-surface focus:outline-none focus:border-primary font-sans text-xs appearance-none cursor-pointer pr-10"
                  >
                    <option value="" disabled className="text-white/30 bg-[#050505]">Select an area of focus...</option>
                    <option value="Data Analysis & Modeling" className="bg-[#050505]">Data Analysis &amp; Modeling</option>
                    <option value="Interactive Visualization" className="bg-[#050505]">Interactive Visualization</option>
                    <option value="Architecture Consulting" className="bg-[#050505]">Architecture Consulting</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message-input" className="font-sans text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/40">Message</label>
                <textarea 
                  id="message-input" 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe the structural challenges of your project..." 
                  className="w-full px-4 py-3 rounded-none bg-[#050505] border border-white/10 text-on-surface focus:outline-none focus:border-primary placeholder-white/20 font-sans text-xs resize-none transition-all"
                />
              </div>

              {/* Submit */}
              <motion.button 
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                type="submit"
                className="mt-4 w-full h-14 bg-white text-black font-sans text-[10px] font-extrabold uppercase tracking-[0.25em] rounded-none hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-none"
              >
                <span>Initialize Inquiry</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform" />
              </motion.button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="text-center py-10 flex flex-col items-center"
              id="contact-form-success"
            >
              <CheckCircle className="w-16 h-16 text-emerald-400 mb-6 animate-pulse" />
              <h3 className="font-headline text-3xl font-bold uppercase text-on-surface mb-2">Inquiry Initiated</h3>
              <p className="font-body text-sm text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed font-light">
                Thank you! Your project coordinates have been logged securely. Sagar will initiate contact details back to you within 24 business hours.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="py-4 px-8 bg-[#050505] border border-white/10 text-on-surface font-sans text-[10px] font-extrabold uppercase tracking-widest rounded-none hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
              >
                Submit New Message
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <hr className="border-white/10 my-12" />

        {/* Direct contact Coordinates */}
        <div className="text-center flex flex-col items-center gap-8">
          <p className="font-sans text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/40">Direct Coordinates</p>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full justify-center">
            {/* Email link & Copy */}
            <div className="flex items-center gap-3">
              <a 
                href="mailto:sagar0308singh@gmail.com" 
                className="flex items-center gap-2 group text-on-surface hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-wider"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>sagar0308singh@gmail.com</span>
              </a>
              <button 
                onClick={() => handleCopyClipboard('sagar0308singh@gmail.com', 'email')}
                className="p-1.5 px-2.5 bg-[#050505] border border-white/10 rounded-none hover:border-primary hover:text-primary transition-colors cursor-pointer text-xs flex items-center gap-1.5 shrink-0"
                aria-label="Copy Email address"
              >
                {copiedField === 'email' ? <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Clipboard className="w-3.5 h-3.5" />}
                <span className="text-[9px] uppercase font-bold text-on-surface-variant font-mono">
                  {copiedField === 'email' ? 'Copied' : 'Copy'}
                </span>
              </button>
            </div>

            {/* Phone link & Copy */}
            <div className="flex items-center gap-3">
              <a 
                href="tel:7011048461" 
                className="flex items-center gap-2 group text-on-surface hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>7011048461</span>
              </a>
              <button 
                onClick={() => handleCopyClipboard('7011048461', 'phone')}
                className="p-1.5 px-2.5 bg-[#050505] border border-white/10 rounded-none hover:border-primary hover:text-primary transition-colors cursor-pointer text-xs flex items-center gap-1.5 shrink-0"
                aria-label="Copy Phone number"
              >
                {copiedField === 'phone' ? <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Clipboard className="w-3.5 h-3.5" />}
                <span className="text-[9px] uppercase font-bold text-on-surface-variant font-mono">
                  {copiedField === 'phone' ? 'Copied' : 'Copy'}
                </span>
              </button>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 mt-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile Reference" 
              className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary hover:bg-white/5 transition-colors group"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Repository Coordinate" 
              className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary hover:bg-white/5 transition-colors group"
            >
              <Code className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Simulated Active/Mock database logs table for client persistence testing! */}
      {submittedInquiries.length > 0 && (
        <section className="max-w-2xl mx-auto px-6 mb-20 relative z-10">
          <div className="bg-[#0e0e0e] border border-white/10 p-6 rounded-none shadow-looming">
            <h4 className="font-headline text-base font-bold uppercase tracking-widest text-[#00e0ff] mb-4 flex justify-between items-center flex-wrap gap-3">
              <span>Active Workspace Inquiries ({submittedInquiries.length})</span>
              <span className="text-[9px] uppercase font-sans font-bold bg-primary/10 border border-primary/20 text-primary py-1 px-2.5 rounded-none tracking-widest">Sandbox Sync</span>
            </h4>
            <div className="flex flex-col gap-4">
              {submittedInquiries.map((inq, idx) => (
                <div key={idx} className="bg-[#050505] border border-white/10 p-4 rounded-none flex justify-between items-start">
                  <div className="flex flex-col gap-1 text-sm font-body">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-on-surface uppercase font-sans text-xs tracking-wider">{inq.name}</span>
                      <span className="text-[10px] text-on-surface-variant font-mono">&lt;{inq.email}&gt;</span>
                    </div>
                    <span className="text-[8px] font-extrabold bg-[#111111] text-primary border border-primary/20 uppercase tracking-widest py-0.5 px-2 rounded-none w-fit mt-1">{inq.projectType}</span>
                    <p className="text-xs text-on-surface-variant mt-2 bg-[#0a0a0a] p-3 rounded-none italic border border-white/5">"{inq.message}"</p>
                  </div>
                  <button 
                    onClick={() => handleDeleteInquiry(idx)}
                    className="text-on-surface-variant hover:text-red-400 p-1.5 cursor-pointer transition-colors"
                    title="Remove logged enquiry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
