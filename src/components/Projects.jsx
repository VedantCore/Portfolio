// src/components/Projects.jsx
import React, { useState, useRef } from 'react';
import { portfolioData, niches } from '../constants/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeNiche, setActiveNiche] = useState(niches[0]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null);
  const scrollRef = useRef(null);

  const handleCompanyClick = (companyData) => {
    setSelectedCompany(companyData);
  };

  const closeCompanyModal = () => {
    setSelectedCompany(null);
    setPreviewVideo(null); // Ensure video closes if modal closes
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-16 bg-[#0B1120] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">My Work</h2>
        
        {/* Niche Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {niches.map((niche) => (
            <button
              key={niche}
              onClick={() => setActiveNiche(niche)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeNiche === niche 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-[#1A2235] text-gray-400 hover:bg-[#252F45]'
              }`}
            >
              {niche}
            </button>
          ))}
        </div>

        {/* Company Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData[activeNiche]?.map((companyData, index) => (
            <div 
              key={index}
              onClick={() => handleCompanyClick(companyData)}
              className="bg-[#151C2C] p-10 rounded-2xl cursor-pointer hover:bg-[#1A2235] transition-colors flex flex-col items-center justify-center text-center group"
            >
              <div className="text-6xl mb-6">{companyData.logo}</div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{companyData.company}</h3>
              <p className="text-gray-500 text-sm">{companyData.projects.length} Projects</p>
            </div>
          ))}
          {portfolioData[activeNiche]?.length === 0 && (
            <p className="col-span-full text-center text-gray-600 py-12">Projects coming soon...</p>
          )}
        </div>
      </div>

      {/* Company Projects Modal (Horizontal Scroll) */}
      {selectedCompany && !previewVideo && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#070A14]/90 backdrop-blur-sm p-4">
          <div className="bg-[#0B1120] rounded-3xl w-full max-w-6xl h-[80vh] flex flex-col relative border border-[#1A2235] shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-8 py-6 flex justify-between items-center border-b border-[#1A2235]">
              <h3 className="text-2xl font-bold">{selectedCompany.company}</h3>
              <button 
                onClick={closeCompanyModal}
                className="text-gray-500 hover:text-white text-4xl leading-none transition-colors"
              >
                &times;
              </button>
            </div>
            
            {/* Horizontal Scrolling Area */}
            <div 
              ref={scrollRef}
              className="flex-grow flex gap-6 overflow-x-auto p-8 snap-x snap-mandatory hide-scrollbar items-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {selectedCompany.projects.map((project, idx) => (
                <div key={idx} className="snap-center shrink-0">
                  <ProjectCard 
                    project={project} 
                    onClick={() => setPreviewVideo(project)} 
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full bg-[#1A2235] flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                &#8592;
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-[#1A2235] flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Preview Modal */}
      {previewVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">
          <button 
            onClick={() => setPreviewVideo(null)}
            className="absolute top-8 right-8 text-white text-4xl hover:text-gray-400 z-50"
          >
            &times;
          </button>
          <div className="w-full max-w-lg aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden relative">
            {/* Replace with actual video player */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
              <span className="text-6xl mb-4">▶️</span>
              <p>Playing: {previewVideo.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;