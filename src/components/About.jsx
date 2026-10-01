import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="border-b border-white/10 px-6 py-24 md:px-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
        
        {/* Large Hook */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter sm:text-6xl lg:text-7xl">
            Five years of shaping the cut.
          </h2>
        </motion.div>

        {/* Detailed Description */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 text-sm text-white/70 sm:text-base md:pt-4"
        >
          <p>
            With six years of specialized post-production experience, I deliver end-to-end video editing solutions for top-tier fashion, gaming, and hospitality brands. Managing the workflow from structural edits to advanced color grading in DaVinci Resolve and Premiere Pro, I ensure a seamless and highly professional post-production cycle.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}