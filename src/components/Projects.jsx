import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProjectCard from './ProjectCard';

const filters = ['ALL', 'AR & VR', 'ESPORTS', 'MARKETING'];

const projectsData = [
  {
    id: 1,
    title: "Liminal XR Solutions",
    category: "AR & VR",
    year: "Oct 2024 - Nov 2024",
    gridClass: "min-h-[300px] md:min-h-[400px] md:col-span-2 md:row-span-2",
    color: "from-blue-900 to-indigo-900",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    points: [
      "Produced a dynamic showcase video for a major VI event in Delhi, collaborating with event coordinators to match the required tone.",
      "Edited multiple videos highlighting immersive dome, VR, and AR experiences, significantly enhancing audience engagement.",
      "Partnered with a specialized Mumbai-based agency to tailor visual content for complex virtual reality and augmented reality projects."
    ]
  },
  {
    id: 2,
    title: "UES Esports",
    category: "ESPORTS",
    year: "May 2025 - Aug 2025",
    gridClass: "min-h-[250px] md:col-span-1 md:row-span-1",
    color: "from-purple-900 to-pink-900",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    points: [
      "Partnered closely with various content creators to enhance narrative storytelling and maximize viewer engagement.",
      "Produced and edited a high-profile creator reveal video for the organization's YouTube channel.",
      "Provided reliable technical support, creative guidance, and mentorship to team members across multiple concurrent projects."
    ]
  },
  {
    id: 3,
    title: "4shan Digital",
    category: "MARKETING",
    year: "Jan 2024 - Mar 2025",
    gridClass: "min-h-[250px] md:col-span-1 md:row-span-1",
    color: "from-emerald-800 to-teal-900",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    points: [
      "Edited high-performing short-form and long-form video content for top-tier YouTube creators.",
      "Managed end-to-end post-production workflows to ensure high-quality asset delivery within strict deadlines.",
      "Supported broader marketing agency initiatives by seamlessly integrating video assets into cross-channel campaigns."
    ]
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'ALL' ? true : project.category === activeFilter
  );

  return (
    <section id="work" className="px-6 py-24 md:px-12 bg-base">
      
      {/* Filters */}
      <div className="mb-16 flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
              activeFilter === filter
                ? 'border-white bg-white text-black'
                : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <motion.div layout className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={project.gridClass}
            >
              <ProjectCard project={project} onClick={setSelectedProject} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-sm"
          >
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-surface border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-accent"
              >
                <X size={24} />
              </button>

              {/* Video Player */}
              <div className="aspect-video w-full bg-black">
                <video 
                  src={selectedProject.videoSrc} 
                  autoPlay 
                  controls 
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Modal Details with Bullet Points */}
              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d97736]">
                  {selectedProject.category}
                </span>
                <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-white">
                  {selectedProject.title}
                </h3>
                
                {/* Dynamically rendering the bullet points inside the modal */}
                <ul className="mt-6 flex flex-col gap-3 text-sm text-white/70 max-w-3xl">
                  {selectedProject.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-[2px] font-bold">/</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}