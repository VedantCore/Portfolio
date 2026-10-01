import { motion } from 'framer-motion';

// Your professional experience structured chronologically
const timeline = [
  {
    year: "May 2025 – Aug 2025",
    role: "UES Esports",
    company: "Esports organization",
    points: [
      "Partnered closely with various content creators to enhance narrative storytelling and maximize viewer engagement.",
      "Produced and edited a high-profile creator reveal video for the organization's YouTube channel.",
      "Provided reliable technical support, creative guidance, and mentorship to team members across multiple concurrent projects."
    ]
  },
  {
    year: "Jan 2024 – Mar 2025",
    role: "4Shan Digital",
    company: "Marketing agency",
    points: [
      "Edited high-performing short-form and long-form video content for top-tier YouTube creators.",
      "Managed end-to-end post-production workflows to ensure high-quality asset delivery within strict deadlines.",
      "Supported broader marketing agency initiatives by seamlessly integrating video assets into cross-channel campaigns."
    ]
  },
  {
    year: "Oct 2024 – Nov 2024",
    role: "Liminal XR Solutions",
    company: "AR and VR Company",
    points: [
      "Produced a dynamic showcase video for a major VI event in Delhi, collaborating with event coordinators to match the required tone.",
      "Edited multiple videos highlighting immersive dome, VR, and AR experiences, significantly enhancing audience engagement.",
      "Partnered with a specialized Mumbai-based agency to tailor visual content for complex virtual reality and augmented reality projects."
    ]
  }
];

export default function Experience() {
  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12 bg-base">
      
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-7xl">
          Experience
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="mx-auto max-w-4xl">
        {timeline.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative border-l border-white/20 pl-8 pb-16 last:pb-0 hover:border-accent transition-colors"
          >
            {/* The little dot on the timeline */}
            <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-white/20 transition-colors group-hover:bg-accent" />
            
            {/* Year & Company Metadata */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {item.year}
              </span>
              <span className="hidden text-white/30 md:block">|</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                {item.company}
              </span>
            </div>
            
            {/* Role Title */}
            <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight sm:text-4xl text-white group-hover:text-white transition-colors">
              {item.role}
            </h3>
            
            {/* Bullet Points */}
            <ul className="mt-6 flex flex-col gap-3 text-sm text-white/70 max-w-2xl">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-[2px] font-bold">/</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}