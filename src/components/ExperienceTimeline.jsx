import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimeline({ onOpenResume }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-node', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-8 bg-[#FCFCFA] border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="hanko-seal">歴</span>
              <span className="text-xs font-mono font-semibold tracking-widest text-[#B8764B] uppercase">
                // 04. EXPERIENCE &amp; PEDIGREE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif-title text-[#1C1B19] tracking-tight">
              Journey &amp; Milestones
            </h2>
          </div>
          <button
            onClick={onOpenResume}
            className="zen-btn-secondary text-xs"
          >
            <span>Download Verified CV (PDF)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-black/10">
              <div className="p-2 rounded-xl bg-[#F4ECE6] text-[#B8764B]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif-title text-[#1C1B19]">
                Professional Engineering
              </h3>
            </div>

            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="timeline-node relative p-7 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-black/10 shadow-sm hover:shadow-xl hover:border-[#B8764B]/30 transition-all duration-300 group"
              >
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#EBF0EC] text-[#5E725F]">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#8E8980]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#B8764B]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#5E725F]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Company & Role */}
                <h4 className="text-2xl font-bold font-serif-title text-[#1C1B19] group-hover:text-[#B8764B] transition-colors mb-1">
                  {exp.role}
                </h4>
                <p className="text-sm font-semibold text-[#5E725F] mb-6">
                  {exp.company}
                </p>

                {/* Key Accomplishments List */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#58544D] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B8764B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                  {exp.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F6F4EE] text-[#58544D]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Honors (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-black/10">
                <div className="p-2 rounded-xl bg-[#EBF0EC] text-[#5E725F]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-serif-title text-[#1C1B19]">
                  Academic Pedigree
                </h3>
              </div>

              {portfolioData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="timeline-node p-7 rounded-3xl bg-white/80 backdrop-blur-xl border border-black/10 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#F4ECE6] text-[#B8764B]">
                      {edu.gpa}
                    </span>
                    <span className="text-xs font-mono text-[#8E8980]">
                      {edu.year}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-serif-title text-[#1C1B19] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-[#5E725F] mb-1">
                    {edu.field}
                  </p>
                  <p className="text-xs text-[#8E8980] mb-4">
                    {edu.institution}, {edu.location}
                  </p>

                  <ul className="space-y-2">
                    {edu.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-[#58544D] leading-relaxed flex items-start gap-2">
                        <span className="text-[#B8764B] font-bold mt-0.5">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Honors & Innovation Block */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3 pb-3 border-b border-black/10">
                <div className="p-2 rounded-xl bg-[#F4ECE6] text-[#D3A762]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-serif-title text-[#1C1B19]">
                  Innovation &amp; Honors
                </h3>
              </div>

              {portfolioData.honors.map((hon, idx) => (
                <div
                  key={idx}
                  className="timeline-node p-6 rounded-3xl bg-gradient-to-br from-white/90 to-[#F6F4EE] border border-black/10 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-[#B8764B]">
                      {hon.organization}
                    </span>
                    <span className="text-xs font-mono text-[#8E8980]">
                      {hon.year}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-serif-title text-[#1C1B19] mb-2">
                    {hon.title}
                  </h4>
                  <p className="text-xs text-[#58544D] leading-relaxed">
                    {hon.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
