import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsPage({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full Stack ERP Application', label: 'School ERP' },
    { id: 'Full Stack Web Application', label: 'E-Learning LMS' },
    { id: 'Full Stack Application', label: 'Business Management' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedFilter);

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 bg-[var(--bg)] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center reveal">
          <div className="font-hand text-2xl text-[var(--coral)] mb-2">— deep dive</div>
          <h1 className="hero-title text-4xl md:text-6xl mb-4">
            FEATURED <span className="title-stroke">WORK</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans text-lg opacity-80">
            Production platforms architected by Juin Piyada. Click on any project to inspect full case studies, system metrics, and source excerpts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`magnetic px-5 py-2.5 rounded-full font-bold font-sans text-sm transition-all border-2 border-[var(--ink)] ${
                selectedFilter === cat.id
                  ? 'bg-[var(--coral)] text-[var(--paper)] shadow-[4px_4px_0_var(--ink)] -translate-y-1'
                  : 'bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--mustard)] hover:shadow-[4px_4px_0_var(--ink)] hover:-translate-y-1'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {filteredProjects.map((project, idx) => {
            const bgColors = ['bg-[var(--paper)]', 'bg-[var(--mustard)]', 'bg-[var(--teal)]', 'bg-[var(--pink)]', 'bg-[var(--coral)]'];
            const bgColor = bgColors[idx % bgColors.length];
            const isDarkBg = bgColor === 'bg-[var(--teal)]' || bgColor === 'bg-[var(--coral)]';
            const textColorClass = isDarkBg ? 'text-[var(--paper)]' : 'text-[var(--ink)]';
            const strokeClass = isDarkBg ? 'border-[var(--paper)]' : 'border-[var(--ink)]';
            const tagBg = isDarkBg ? 'bg-[var(--ink)] text-[var(--paper)]' : 'bg-[var(--paper)] text-[var(--ink)]';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`sticky-note sketch-border-thick p-6 ${bgColor} ${textColorClass} flex flex-col cursor-pointer magnetic`}
                data-cursor="hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`font-hand text-xl ${isDarkBg ? 'text-[var(--mustard)]' : 'text-[var(--coral)]'}`}>
                    {project.period}
                  </div>
                  <div className={`text-xs font-bold px-3 py-1 rounded-full border-2 ${strokeClass}`}>
                    {project.category}
                  </div>
                </div>

                <h2 className="font-display text-3xl mb-2 leading-tight">
                  {project.title}
                </h2>
                <div className="font-sans font-bold opacity-90 mb-4">{project.subtitle}</div>
                
                <p className="font-sans text-sm opacity-90 mb-6 leading-relaxed flex-grow">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t-2 border-dashed" style={{ borderColor: isDarkBg ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.2)' }}>
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className={`text-xs font-bold px-2 py-1 rounded-md border-2 ${strokeClass} ${tagBg}`}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className={`text-xs font-bold px-2 py-1 rounded-md border-2 ${strokeClass} ${tagBg}`}>
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
