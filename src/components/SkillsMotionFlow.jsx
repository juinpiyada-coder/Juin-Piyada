import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Server, Database, Code, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsMotionFlow() {
  const [activeTab, setActiveTab] = useState('frontend');
  const sectionRef = useRef(null);
  const flowCanvasRef = useRef(null);

  const tabs = [
    { id: 'frontend', label: 'Frontend & 3D', icon: Cpu, count: portfolioData.skills.frontend.length },
    { id: 'backend', label: 'Backend & APIs', icon: Server, count: portfolioData.skills.backend.length },
    { id: 'databasesCloud', label: 'Databases & Cloud', icon: Database, count: portfolioData.skills.databasesCloud.length },
    { id: 'languages', label: 'Core Languages', icon: Code, count: portfolioData.skills.languages.length }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-item-row', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out'
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  // Motion Flow Particle Canvas Background
  useEffect(() => {
    const canvas = flowCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const nodes = Array.from({ length: 24 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.5,
      color: Math.random() > 0.5 ? 'rgba(184, 118, 75, 0.4)' : 'rgba(94, 114, 95, 0.4)'
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connect nodes with flowing lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(184, 118, 75, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-8 bg-[#F6F4EE]/70 border-t border-black/5 overflow-hidden"
    >
      {/* Background Interactive Flow Canvas */}
      <canvas
        ref={flowCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="hanko-seal">技</span>
              <span className="text-xs font-mono font-semibold tracking-widest text-[#B8764B] uppercase">
                // 03. TECHNICAL CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif-title text-[#1C1B19] tracking-tight">
              Motion Flow &amp; Tech Arsenal
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#58544D] max-w-md font-sans-clean">
            A comprehensive, battle-tested stack spanning client-side kinetic interfaces to high-throughput backend services and cloud deployment.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 text-left flex items-center justify-between border ${
                  isActive
                    ? 'bg-white text-[#1C1B19] border-[#B8764B]/40 shadow-lg scale-[1.02]'
                    : 'bg-white/50 text-[#58544D] hover:bg-white hover:text-[#1C1B19] border-black/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-[#F4ECE6] text-[#B8764B]' : 'bg-[#F6F4EE] text-[#8E8980]'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                      {tab.label}
                    </h4>
                    <span className="text-[11px] font-mono text-[#8E8980]">
                      {tab.count} Technologies
                    </span>
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#B8764B]' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>

        {/* Skill Details Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills[activeTab].map((skill, idx) => (
            <div
              key={idx}
              className="skill-item-row p-6 rounded-3xl bg-white/85 backdrop-blur-xl border border-black/8 shadow-sm hover:shadow-xl hover:border-[#B8764B]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    <h4 className="text-base sm:text-lg font-bold font-serif-title text-[#1C1B19] group-hover:text-[#B8764B] transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#B8764B]">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Proficiency Bar */}
                <div className="w-full h-1.5 bg-[#F6F4EE] rounded-full mb-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#B8764B] to-[#D3A762] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {skill.description && (
                  <p className="text-xs text-[#58544D] leading-relaxed font-sans-clean">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Status footer inside card */}
              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-[#8E8980]">
                <span>PRODUCTION READY</span>
                <span className="text-[#5E725F] font-bold">VERIFIED &bull; KHANAOS &amp; AIMTECH</span>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Architecture Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#1C1B19] text-[#FCFCFA] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#D3A762]">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-serif-title text-white">
                Full-Stack End-to-End Synergy
              </h4>
              <p className="text-xs sm:text-sm text-white/70">
                Architecting from interactive React/Next.js/Flutter frontends directly into FastAPI/Node microservices and resilient PostgreSQL/MongoDB data lakes.
              </p>
            </div>
          </div>
          <a
            href="#codelab"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1C1B19] text-xs font-bold hover:bg-[#F4ECE6] transition-colors"
          >
            <span>Inspect Live Code</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
