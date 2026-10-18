import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 sm:px-8 py-4 border-b border-black/10 flex items-center justify-between bg-[#F8F7F2]">
          <div className="flex items-center gap-3">
            <div className="hanko-seal">履</div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-[#1C1B19]">
                JUIN PIYADA &bull; Curriculum Vitae
              </h3>
              <p className="text-xs text-[#5E725F] font-mono">
                Juin_Piyada_Resume.pdf &bull; Verified &amp; Shipped
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Juin_Piyada_Resume.pdf"
              download="Juin_Piyada_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1C1B19] text-white hover:bg-[#33312D] shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 text-[#58544D] hover:text-[#1C1B19] transition-colors"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split Grid with PDF Viewer & Quick Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full overflow-hidden">
          
          {/* Left Column: Quick Profile & Credentials Summary (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 overflow-y-auto bg-[#FBFBF9] border-r border-black/10 space-y-6">
            
            {/* Candidate Header */}
            <div>
              <span className="text-[11px] font-mono text-[#B8764B] font-bold uppercase tracking-wider block mb-1">
                SOFTWARE &amp; BACKEND DEVELOPER
              </span>
              <h4 className="text-2xl font-bold font-serif-title text-[#1C1B19]">
                Juin Piyada
              </h4>
              <p className="text-xs text-[#58544D] font-sans-clean mt-1">
                Kolkata, West Bengal, India &bull; Backend &amp; Full Stack
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-2 text-xs font-mono text-[#58544D]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B8764B]" />
                <a href="mailto:juinpiyada1@gmail.com" className="hover:underline text-[#1C1B19]">
                  juinpiyada1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#5E725F]" />
                <a href="tel:+918240345541" className="hover:underline text-[#1C1B19]">
                  +91 8240345541
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8E8980]" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>

            {/* Experience Snapshot */}
            <div className="space-y-3 pt-4 border-t border-black/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1C1B19]">
                <Briefcase className="w-3.5 h-3.5 text-[#B8764B]" />
                <span>EXPERIENCE</span>
              </div>
              
              <div className="p-3 rounded-xl bg-white border border-black/5 shadow-2xs space-y-1">
                <div className="flex justify-between items-baseline">
                  <p className="text-xs font-bold text-[#1C1B19]">KhanaOS</p>
                  <span className="text-[10px] font-mono text-[#B8764B]">May 2026 – Present</span>
                </div>
                <p className="text-[11px] text-[#5E725F]">Backend Developer &bull; Kolkata, India</p>
                <p className="text-[11px] text-[#58544D] leading-relaxed">
                  Node.js REST APIs, Prisma, PostgreSQL, database schemas, API optimization, and AI-assisted workflows.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-black/5 shadow-2xs space-y-1">
                <div className="flex justify-between items-baseline">
                  <p className="text-xs font-bold text-[#1C1B19]">Aimtech Dynamics</p>
                  <span className="text-[10px] font-mono text-[#B8764B]">Jun 2025 – Present</span>
                </div>
                <p className="text-[11px] text-[#5E725F]">Full Stack Developer &bull; Kolkata, India</p>
                <p className="text-[11px] text-[#58544D] leading-relaxed">
                  React.js, Node.js, PHP, PostgreSQL, MySQL, responsive UI, database design, and end-to-end testing.
                </p>
              </div>
            </div>

            {/* Education Snapshot */}
            <div className="space-y-3 pt-2 border-t border-black/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1C1B19]">
                <GraduationCap className="w-3.5 h-3.5 text-[#5E725F]" />
                <span>EDUCATION (2022 – 2025)</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-black/5 shadow-2xs">
                <p className="text-xs font-bold text-[#1C1B19]">Swami Vivekananda Institute of Modern Science</p>
                <p className="text-[11px] text-[#5E725F]">Bachelor of Computer Applications (BCA)</p>
                <p className="text-[11px] font-mono text-[#B8764B] mt-0.5">Aug 2022 – Jul 2025 &bull; Kolkata</p>
              </div>
            </div>

            {/* Certifications Snapshot */}
            <div className="space-y-2 pt-2 border-t border-black/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1C1B19]">
                <Award className="w-3.5 h-3.5 text-[#B8764B]" />
                <span>CERTIFICATIONS</span>
              </div>
              <ul className="text-xs text-[#58544D] space-y-1">
                <li>&bull; AWS — DevOps Engineer Learning Plan</li>
                <li>&bull; Coursera — WordPress Website Development</li>
                <li>&bull; NVIDIA — AI for All</li>
                <li>&bull; HP LIFE — Cybersecurity Awareness</li>
              </ul>
            </div>

            {/* Core Skills Snapshot */}
            <div className="space-y-2 pt-2 border-t border-black/5">
              <span className="text-[11px] font-mono font-bold text-[#1C1B19] block">
                TECHNICAL SKILLS
              </span>
              <p className="text-xs text-[#58544D] leading-relaxed">
                JavaScript, Node.js, Express.js, React.js, PHP, PostgreSQL, MySQL, Prisma, REST APIs, Python, C, HTML5, CSS3, Vite, UI/UX, AI Agents &amp; Agentic Workflows.
              </p>
            </div>

          </div>

          {/* Right Column: Embedded PDF Viewer (7 cols) */}
          <div className="lg:col-span-7 h-[65vh] lg:h-auto bg-[#EFECE4] flex flex-col">
            <iframe
              src="/Juin_Piyada_Resume.pdf#toolbar=0&navpanes=0"
              title="Juin Piyada Resume PDF"
              className="w-full h-full border-none"
            />
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-3 border-t border-black/10 flex items-center justify-between bg-[#F8F7F2] text-xs font-mono text-[#8E8980]">
          <span>Authentic Document from Local Workspace</span>
          <a
            href="/Juin_Piyada_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[#1C1B19] hover:underline"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
