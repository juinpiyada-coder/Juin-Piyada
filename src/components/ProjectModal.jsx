import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Shield, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';


export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-black/10 flex items-center justify-between bg-[#F8F7F2]">
          <div className="flex items-center gap-3">
            <div className="hanko-seal">{project.kanji}</div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-[#1C1B19]">
                  {project.title}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#F4ECE6] text-[#B8764B]">
                  {project.period}
                </span>
              </div>
              <p className="text-xs text-[#5E725F] font-medium">{project.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#58544D] hover:text-[#1C1B19] transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Overview & Architecture Narrative */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#8E8980] uppercase tracking-wider">
              PROJECT OVERVIEW &amp; IMPACT
            </h4>
            <p className="text-base text-[#1C1B19] leading-relaxed font-sans-clean">
              {project.overview}
            </p>
          </div>

          {/* Role & Specific Engineering Contributions */}
          <div className="p-5 rounded-2xl bg-[#F6F4EE] border border-black/5 space-y-2">
            <span className="text-xs font-mono text-[#B8764B] font-bold uppercase tracking-wider block">
              JUIN'S ENGINEERING ROLE &amp; OWNERSHIP
            </span>
            <p className="text-sm text-[#58544D] leading-relaxed">
              {project.roleDetails}
            </p>
          </div>

          {/* Architecture Metrics Grid */}
          <div>
            <h4 className="text-xs font-mono text-[#8E8980] uppercase tracking-wider mb-3">
              SYSTEM METRICS &amp; CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(project.metrics).map(([k, v], i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-black/8 shadow-sm">
                  <span className="text-[11px] font-mono text-[#8E8980] uppercase block">
                    {k}
                  </span>
                  <span className="text-base font-bold text-[#1C1B19]">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#8E8980] uppercase tracking-wider">
              CORE ARCHITECTURAL HIGHLIGHTS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-black/5 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#5E725F] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1C1B19]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#8E8980] uppercase tracking-wider">
              COMPLETE TECH STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[#F6F4EE] text-[#1C1B19] border border-black/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code Excerpt */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#8E8980] uppercase tracking-wider">
                CORE SOURCE EXCERPT
              </h4>
              <div className="p-4 rounded-2xl bg-[#1E1D1B] text-[#ABB2BF] font-mono text-xs overflow-x-auto leading-relaxed border border-black/20">
                <pre><code>{project.codeSnippet}</code></pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 sm:px-8 py-4 border-t border-black/10 flex items-center justify-between bg-[#F8F7F2]">
          <span className="text-xs font-mono text-[#8E8980]">
            VERIFIED IN CV &bull; JUIN PIYADA
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="zen-btn-secondary text-xs"
            >
              Close
            </button>
            <a
              href="mailto:juinpiyada1@gmail.com"
              className="zen-btn-primary text-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Contact Juin</span>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}
