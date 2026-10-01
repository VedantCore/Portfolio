import { ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end p-6 pb-20 pt-32 md:p-12 md:pb-24 border-b border-white/10 overflow-hidden">
      
      <div className="z-10 flex flex-col gap-6">
        
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] font-black uppercase leading-[0.8] tracking-tighter sm:text-[11vw]"
        >
          Charuvind<br />Mamodiya
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:gap-12"
        >
          <h2 className="text-lg font-bold uppercase tracking-widest text-accent sm:text-2xl">
            Video Editor / Post-Production
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Specializing in precision color grading, dynamic motion, and striking vertical and horizontal aesthetics. Crafting raw, intentional visual stories.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#work" className="flex items-center gap-2 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-accent hover:text-white">
            View Work <ArrowDownRight size={16} />
          </a>
          <a href="#contact" className="flex items-center gap-2 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white">
            Contact Me
          </a>
        </motion.div>
      </div>
      
    </section>
  );
}