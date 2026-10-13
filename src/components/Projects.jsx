// src/components/Projects.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, X, Play } from 'lucide-react';
import { portfolioData, niches } from '../constants/data';
import ProjectCard from './ProjectCard';

const pad = (n) => String(n).padStart(2, '0');

const Projects = () => {
  const [activeNiche, setActiveNiche] = useState(niches[0]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const closeCompanyModal = () => {
    setSelectedCompany(null);
    setPreviewVideo(null);
    setActiveIndex(0);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340; // card width (300) + gap (40)
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Track which card is nearest the left edge for the "01 / 03" counter
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / 340));
  }, []);

  // Close modals with Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (previewVideo) setPreviewVideo(null);
      else if (selectedCompany) closeCompanyModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [previewVideo, selectedCompany]);

  const companies = portfolioData[activeNiche] ?? [];
  const total = selectedCompany?.projects.length ?? 0;

  return (
    <section id="work" className="min-h-screen border-b border-white/10 bg-base px-6 py-24 text-white md:px-12">
      {/* Section Header */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-5xl font-black uppercase tracking-tighter md:text-7xl">My Work</h2>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          [ {pad(niches.length)} Niches ]
        </span>
      </div>

      {/* Niche Navigation */}
      <div className="mb-16 flex flex-wrap gap-4">
        {niches.map((niche) => {
          const isActive = activeNiche === niche;
          return (
            <button
              key={niche}
              onClick={() => setActiveNiche(niche)}
              className={`border-2 border-white px-5 py-3 text-xs font-black uppercase tracking-widest transition-all duration-150 ${
                isActive
                  ? 'translate-x-[4px] translate-y-[4px] bg-accent text-black shadow-none'
                  : 'bg-base text-white shadow-[4px_4px_0_0_#ffffff] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_#ff3333]'
              }`}
            >
              {niche}
            </button>
          );
        })}
      </div>

      {/* Company Boxes */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((companyData, index) => (
          <button
            key={companyData.company}
            onClick={() => setSelectedCompany(companyData)}
            className="group flex flex-col items-start gap-8 border-2 border-white bg-surface p-8 text-left shadow-[8px_8px_0_0_#ff3333] transition-all duration-150 hover:-translate-x-[4px] hover:-translate-y-[4px] hover:bg-accent hover:text-black hover:shadow-[12px_12px_0_0_#ffffff] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            <div className="flex w-full items-start justify-between">
              <span className="flex h-20 w-20 items-center justify-center border-2 border-white bg-base text-5xl group-hover:border-black">
                {companyData.logo}
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-white/40 group-hover:text-black">
                {pad(index + 1)}
              </span>
            </div>
            <div className="w-full">
              <h3 className="text-3xl font-black uppercase leading-none tracking-tighter">
                {companyData.company}
              </h3>
              <p className="mt-3 border-t-2 border-white/20 pt-3 text-xs font-bold uppercase tracking-widest text-accent group-hover:border-black/30 group-hover:text-black">
                {pad(companyData.projects.length)} Projects →
              </p>
            </div>
          </button>
        ))}

        {companies.length === 0 && (
          <p className="col-span-full border-2 border-dashed border-white/30 py-16 text-center text-sm font-black uppercase tracking-widest text-white/40">
            [ Projects coming soon ]
          </p>
        )}
      </div>

      {/* Company Projects Modal (Horizontal Scroll) */}
      {selectedCompany && !previewVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4">
          <div className="relative flex h-[85vh] w-full max-w-6xl flex-col border-4 border-white bg-base shadow-[12px_12px_0_0_#ff3333]">
            {/* Modal Header */}
            <div className="flex items-stretch justify-between border-b-4 border-white bg-surface">
              <div className="flex flex-col justify-center px-6 py-4 md:px-8">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  [ {activeNiche} ]
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tighter md:text-4xl">
                  {selectedCompany.company}
                </h3>
              </div>
              <button
                onClick={closeCompanyModal}
                aria-label="Close"
                className="flex w-20 items-center justify-center border-l-4 border-white bg-accent text-black transition-colors hover:bg-white"
              >
                <X size={32} strokeWidth={3} />
              </button>
            </div>

            {/* Horizontal Scrolling Area */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="brutal-scroll flex flex-grow snap-x snap-mandatory items-center gap-10 overflow-x-auto p-8"
            >
              {selectedCompany.projects.map((project, idx) => (
                <div key={idx} className="shrink-0 snap-start">
                  <ProjectCard
                    project={project}
                    index={idx + 1}
                    onClick={() => setPreviewVideo(project)}
                  />
                </div>
              ))}
            </div>

            {/* Footer: counter + arrows */}
            <div className="flex items-stretch justify-between border-t-4 border-white bg-surface">
              <div className="flex items-center px-6 text-sm font-black uppercase tracking-widest md:px-8">
                <span className="text-accent">{pad(Math.min(activeIndex + 1, total))}</span>
                <span className="mx-2 text-white/40">/</span>
                <span>{pad(total)}</span>
              </div>
              <div className="flex">
                <button
                  onClick={() => scroll('left')}
                  aria-label="Scroll left"
                  className="flex h-16 w-16 items-center justify-center border-l-4 border-white bg-base text-white transition-colors hover:bg-white hover:text-black active:bg-accent"
                >
                  <ArrowLeft size={28} strokeWidth={3} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  aria-label="Scroll right"
                  className="flex h-16 w-16 items-center justify-center border-l-4 border-white bg-base text-white transition-colors hover:bg-accent hover:text-black active:bg-white"
                >
                  <ArrowRight size={28} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Preview Modal */}
      {previewVideo && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setPreviewVideo(null)}
            aria-label="Close preview"
            className="absolute right-6 top-6 z-10 flex h-14 w-14 items-center justify-center border-4 border-white bg-accent text-black shadow-[4px_4px_0_0_#ffffff] transition-all hover:bg-white active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            <X size={28} strokeWidth={3} />
          </button>
          <div className="relative aspect-[9/16] max-h-[85vh] w-full max-w-sm border-4 border-white bg-surface shadow-[12px_12px_0_0_#ff3333]">
            {/* Replace with actual video player */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center">
              <span className="flex h-24 w-24 items-center justify-center border-4 border-white bg-accent text-black">
                <Play size={44} strokeWidth={3} fill="currentColor" />
              </span>
              <p className="px-6 text-sm font-black uppercase tracking-widest">
                Playing: {previewVideo.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;