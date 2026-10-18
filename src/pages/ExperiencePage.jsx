import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperiencePage({ onOpenResume }) {
  const { experience, education, honors } = portfolioData;

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 bg-[var(--bg)] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center reveal">
          <div className="font-hand text-2xl text-[var(--mustard)] mb-2">— the timeline</div>
          <h1 className="hero-title text-4xl md:text-6xl mb-4">
            EXPERIENCE &amp;<br/><span className="title-stroke">MILESTONES</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans text-lg opacity-80">
            Full journey of backend &amp; full stack engineering at KhanaOS and Aimtech Dynamics, BCA degree, and professional industry certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Col: Experience */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6 border-b-2 border-[var(--ink)] pb-4 reveal">
              <h2 className="font-display text-3xl">Professional</h2>
              <button onClick={onOpenResume} className="magnetic tag" data-cursor="hover">
                <i className="fas fa-file-pdf mr-2"></i> Get PDF
              </button>
            </div>

            <div className="space-y-6 reveal-stagger">
              {experience.map((exp, idx) => (
                <div key={idx} className="sketch-border-thick p-8 bg-[var(--paper)] magnetic" data-cursor="hover">
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                    <div>
                      <div className="font-hand text-2xl text-[var(--coral)]">{exp.period}</div>
                      <h3 className="font-display text-2xl">{exp.role}</h3>
                      <div className="font-sans font-bold text-lg opacity-90 mt-1">{exp.company}</div>
                    </div>
                    <div className="text-right">
                      <span className="tag mb-2 inline-block bg-[var(--mustard)]">{exp.type}</span>
                      <div className="text-xs font-bold font-sans opacity-70">
                        <i className="fas fa-map-marker-alt mr-1 text-[var(--coral)]"></i>
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 font-sans opacity-90 mb-6">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm leading-relaxed">
                        <i className="fas fa-check-circle text-[var(--teal)] mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-[var(--ink)]">
                    {exp.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs font-bold px-2 py-1 bg-[var(--bg)] border-2 border-[var(--ink)] rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Education & Honors */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education */}
            <div className="reveal">
              <h2 className="font-display text-3xl mb-6 border-b-2 border-[var(--ink)] pb-4">Education</h2>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="sticky-note sketch-border p-6 bg-[var(--teal)] text-[var(--paper)] magnetic" data-cursor="hover">
                    <div className="font-hand text-xl text-[var(--mustard)] mb-1">{edu.period}</div>
                    <h3 className="font-display text-xl mb-1">{edu.degree}</h3>
                    <div className="font-sans font-bold opacity-90 mb-3">{edu.institution}</div>
                    
                    <ul className="space-y-2 opacity-90 text-sm">
                      {edu.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <i className="fas fa-star text-[var(--mustard)] mt-0.5 text-xs"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Honors */}
            <div className="reveal">
              <h2 className="font-display text-3xl mb-6 border-b-2 border-[var(--ink)] pb-4">Certifications</h2>
              <div className="space-y-4">
                {honors.map((honor, idx) => (
                  <div key={idx} className="sketch-border p-6 bg-[var(--coral)] text-[var(--paper)] magnetic" data-cursor="hover">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg leading-tight">{honor.title}</h3>
                      <span className="font-hand text-xl text-[var(--mustard)] whitespace-nowrap">{honor.year}</span>
                    </div>
                    <div className="font-sans font-bold opacity-90 text-sm mb-2">{honor.organization}</div>
                    <p className="font-sans text-sm opacity-90 leading-relaxed">{honor.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
