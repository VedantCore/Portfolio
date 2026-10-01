import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layoutId={`card-container-${project.id}`}
      onClick={() => onClick(project)}
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`group relative cursor-pointer overflow-hidden rounded-xl bg-surface ${project.gridClass}`}
    >
      {/* Background Gradient / Image Placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity group-hover:opacity-100 ${project.color}`} />

      {/* Text Content */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#d97736]">
              {project.niche}
            </span>
            <h3 className="mt-1 text-lg font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <span className="text-xs font-bold text-white/30">{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
}