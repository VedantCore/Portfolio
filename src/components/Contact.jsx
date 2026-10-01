import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 md:py-32 bg-surface">
      <div className="flex flex-col items-center justify-center text-center">
        
        {/* Massive Call to Action */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[12vw] font-black uppercase leading-[0.85] tracking-tighter sm:text-[10vw]"
        >
          Let's Make<br />
          <span className="text-accent">Something</span><br />
          Worth Watching.
        </motion.h2>

        {/* Contact Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-8"
        >
          {/* Replace this with your actual email later */}
          <a 
            href="mailto:charuvind.work@gmail.com" 
            className="group flex items-center gap-3 text-2xl font-bold uppercase tracking-tight hover:text-accent transition-colors md:text-4xl"
          >
            charuvind.work@gmail.com
            <ArrowUpRight size={36} className="text-white/30 group-hover:text-accent transition-colors" />
          </a>

          {/* Social Links */}
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-white/50">
            <a href="https://www.instagram.com/maddyfps17/" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/charuvind-mamodiya/" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </div>

      {/* Tiny Brutalist Footer */}
      <div className="mt-32 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs font-bold uppercase tracking-widest text-white/30 sm:flex-row">
        <span>© {new Date().getFullYear()} Charuvind</span>
        <span className="mt-4 sm:mt-0">Based in India • Working Worldwide</span>
      </div>
    </section>
  );
}