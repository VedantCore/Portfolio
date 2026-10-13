// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative w-[300px] h-[533px] bg-[#151C2C] rounded-3xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform duration-300 shadow-lg border border-[#1A2235]"
    >
      {/* Thumbnail Image Placeholder */}
      <div className="absolute inset-0 bg-gray-800">
        {project.thumbnail ? (
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 bg-[#0F1423]">
            [Video Thumbnail]
          </div>
        )}
      </div>

      {/* Dark Overlay Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

      {/* Text Content overlay */}
      <div className="absolute top-8 left-6 pr-6">
        <h4 className="text-3xl font-bold text-white leading-tight mb-2">
          {project.title}
        </h4>
        <p className="text-gray-300 text-sm font-medium">
          {project.description}
        </p>
      </div>

      {/* Play Icon Indicator on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl">
          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;