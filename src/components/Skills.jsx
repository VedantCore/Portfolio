import { motion } from 'framer-motion';

const skills = [
  { category: "Software", items: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Photoshop"] },
  { category: "Technique", items: ["Node-Based Color Grading", "Shot Matching", "Story Matchmaking"] },
  { category: "Generative AI", items: ["Veo 3", "Kling 2.6", "Luma AI", "Swish AI", "Nano Banana"] }
];

export default function Skills() {
  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12 bg-surface/50">
      <div className="mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-7xl">Toolkit</h2>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-accent">
              [ {skillGroup.category} ]
            </h3>
            <ul className="flex flex-col gap-4">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-xl font-bold uppercase tracking-tight sm:text-2xl text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}