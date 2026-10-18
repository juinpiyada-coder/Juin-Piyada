import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState('backend');
  const { skills } = portfolioData;

  const tabs = [
    { id: 'backend', label: 'Backend & APIs', count: skills.backend.length, color: 'bg-[var(--coral)]' },
    { id: 'databasesCloud', label: 'Databases & Tools', count: skills.databasesCloud.length, color: 'bg-[var(--teal)]' },
    { id: 'frontend', label: 'Frontend', count: skills.frontend.length, color: 'bg-[var(--mustard)]' },
    { id: 'languages', label: 'Languages', count: skills.languages.length, color: 'bg-[var(--pink)]' },
    { id: 'aiAgentic', label: 'AI & Agentic', count: (skills.aiAgentic || []).length, color: 'bg-[var(--coral)]' }
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 bg-[var(--bg)] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center reveal">
          <div className="font-hand text-2xl text-[var(--teal)] mb-2">— the toolkit</div>
          <h1 className="hero-title text-4xl md:text-6xl mb-4">
            TECH <span className="title-stroke">STACK</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans text-lg opacity-80">
            Battle-tested software stack spanning reactive user interfaces to scalable microservices, relational databases, and edge deployments.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 reveal">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`magnetic sketch-border px-6 py-3 font-display text-lg transition-all ${
                  isActive
                    ? `${tab.color} text-[var(--paper)] shadow-[6px_6px_0_var(--ink)] -translate-y-1`
                    : 'bg-[var(--paper)] text-[var(--ink)] hover:shadow-[4px_4px_0_var(--ink)]'
                }`}
                data-cursor="hover"
              >
                {tab.label}
                <span className="ml-2 font-hand text-xl opacity-80">({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {skills[activeTab].map((item, idx) => {
            const activeColor = tabs.find(t => t.id === activeTab).color.replace('bg-', 'var(--').replace(']', ')');
            
            return (
              <div
                key={idx}
                className="sketch-border bg-[var(--paper)] p-6 magnetic transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0_var(--ink)] flex flex-col h-full"
                data-cursor="hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 bg-[var(--cream)] rounded-full border-2 border-[var(--ink)] flex items-center justify-center p-2">
                    {item.icon && (
                      item.icon.startsWith('http') ? (
                        <img src={item.icon} alt={item.name} className="w-full h-full object-contain filter grayscale contrast-150" />
                      ) : (
                        <span className="text-2xl">{item.icon}</span>
                      )
                    )}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl">{item.name}</h2>
                    <div className="font-hand text-xl" style={{color: activeColor}}>{item.level}% mastery</div>
                  </div>
                </div>

                {/* Progress Bar (Sketch style) */}
                <div className="w-full h-3 bg-[var(--bg)] border-2 border-[var(--ink)] rounded-full overflow-hidden mb-4 p-0.5">
                  <div
                    className="h-full rounded-full w-0 transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%`, background: activeColor }}
                  />
                </div>

                {item.description && (
                  <p className="font-sans text-sm opacity-80 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                )}
                
                <div className="mt-4 pt-4 border-t-2 border-dashed border-[var(--ink)] opacity-60 text-xs font-bold uppercase flex justify-between">
                  <span>Status</span>
                  <span>Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
