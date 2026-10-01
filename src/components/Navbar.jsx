import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  // This is React State. It defaults to 'false' (menu is closed).
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Work', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-base">
      
      {/* Main Header Bar */}
      <div className="relative z-50 flex w-full items-center justify-between px-6 py-5 bg-base md:px-12">
        <a href="#" className="text-xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors">
          Charuvind
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="text-white hover:text-accent md:hidden"
          onClick={() => setIsOpen(!isOpen)} // Flips between true and false
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-full flex h-screen w-full flex-col items-center justify-start gap-12 bg-base pt-24 md:hidden"
          >
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                className="text-5xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
}