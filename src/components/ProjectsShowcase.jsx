import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import { Layers, ExternalLink, Code2, ArrowUpRight, CheckCircle, Sparkles, Box, Shield, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsShowcase({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full-Stack & Marketplace', label: 'Marketplace & B2B' },
    { id: 'EdTech & Mobile Systems', label: 'EdTech & Mobile' },
    { id: 'Cloud CMS & Custom Domains', label: 'CMS & Cloud Infrastructure' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [selectedFilter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-8 bg-[#FCFCFA]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="hanko-seal hanko-seal-matcha">作</span>
              <span className="text-xs font-mono font-semibold tracking-widest text-[#5E725F] uppercase">
                // 02. FEATURED WORKS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif-title text-[#1C1B19] tracking-tight">
              Crafted Software Masterpieces
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#58544D] max-w-md font-sans-clean">
            Production ecosystems architected from ground up with deep role-based access control, sub-millisecond data pipelines, and responsive UX.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-4 border-b border-black/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedFilter === cat.id
                  ? 'bg-[#1C1B19] text-[#FCFCFA] shadow-md scale-105'
                  : 'bg-white/70 text-[#58544D] hover:bg-white hover:text-[#1C1B19] border border-black/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card-item flex"
            >
              <div
                className="w-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-black/10 shadow-[0_10px_30px_-10px_rgba(28,27,25,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(28,27,25,0.12)] hover:border-[#B8764B]/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                
                {/* Card Top: Category Badge, Kanji & Period */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#F4ECE6] text-[#B8764B] tracking-wider uppercase">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#8E8980]">
                        {project.period}
                      </span>
                      <span className="text-sm font-zen font-bold text-[#8E8980]/60">
                        {project.kanji}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#1C1B19] group-hover:text-[#B8764B] transition-colors duration-200 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-[#5E725F] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Overview Text */}
                  <p className="text-xs sm:text-sm text-[#58544D] leading-relaxed mb-6 font-sans-clean">
                    {project.overview}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-2 mb-6">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#58544D]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B8764B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F6F4EE] text-[#58544D] border border-black/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Metrics & Interactive Case Study Action */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-[#8E8980] uppercase">
                      ARCHITECTURE
                    </span>
                    <span className="text-xs font-bold text-[#1C1B19]">
                      {Object.values(project.metrics)[0]}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1C1B19] group-hover:text-[#B8764B] transition-colors"
                  >
                    <span>Deep Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
