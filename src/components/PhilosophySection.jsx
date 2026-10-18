import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';
import { Compass, Sparkles, CheckCircle2, Feather } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-card', {
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

      gsap.from('.about-story-block', {
        scrollTrigger: {
          trigger: '.about-story-block',
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-8 border-t border-black/5 bg-[#F8F7F2]/60"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="hanko-seal">道</span>
            <span className="text-xs font-mono font-semibold tracking-widest text-[#B8764B] uppercase">
              // PHILOSOPHY &amp; ETHOS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-title text-[#1C1B19] tracking-tight mb-4">
            The Japandi Code Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-[#58544D] font-sans-clean leading-relaxed">
            Where Japanese mindfulness meets Scandinavian functional pragmatism. Every API endpoint, microservice, and UI interaction is built with deliberate simplicity, enduring quality, and quiet confidence.
          </p>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {portfolioData.philosophy.map((item, idx) => (
            <div
              key={idx}
              className="philo-card relative p-7 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-black/8 shadow-sm hover:shadow-xl hover:border-[#B8764B]/30 hover:-translate-y-2 transition-all duration-400 group flex flex-col justify-between"
            >
              {/* Top Row: Kanji Seal & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F6F4EE] border border-black/5 flex items-center justify-center font-zen text-2xl font-bold text-[#1C1B19] group-hover:scale-110 group-hover:text-[#B8764B] group-hover:bg-[#F4ECE6] transition-all duration-300 shadow-inner">
                  {item.kanji}
                </div>
                <span className="text-xs font-mono font-medium text-[#8E8980]">
                  0{idx + 1}
                </span>
              </div>

              {/* Content */}
              <div>
                <span className="text-xs font-mono text-[#B8764B] tracking-wider uppercase block mb-1">
                  {item.concept}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-[#1C1B19] mb-3">
                  {item.english}
                </h3>
                <p className="text-sm text-[#58544D] leading-relaxed font-sans-clean">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="w-full h-1 bg-[#F4ECE6] rounded-full mt-6 overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-[#B8764B] transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Engineering Approach */}
        <div className="about-story-block relative p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-black/10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#5E725F]" />
                <span className="text-xs font-mono text-[#5E725F] font-semibold uppercase tracking-wider">
                  ENGINEERING DIARY &bull; JUIN
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#1C1B19]">
                Building dependable backend architectures and scalable APIs from first principles.
              </h3>
              <p className="text-sm sm:text-base text-[#58544D] leading-relaxed font-sans-clean">
                During my tenure at <strong className="text-[#1C1B19]">KhanaOS</strong>, <strong className="text-[#1C1B19]">Aimtech Dynamics</strong>, and through academic foundations at <strong className="text-[#1C1B19]">Swami Vivekananda Institute of Modern Science</strong>, I have engineered full-stack school ERP systems (CampusOne), e-learning platforms (Helping Learn LMS), and enterprise management systems (Diamond Pest Control).
              </p>
              <p className="text-sm sm:text-base text-[#58544D] leading-relaxed font-sans-clean">
                My approach prioritizes reliable Node.js and PHP REST APIs, relational PostgreSQL/MySQL schemas, transactional integrity with Prisma, and AI-assisted workflows for rapid testing and production debugging.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#F6F4EE] rounded-2xl p-6 border border-black/5 space-y-3">
              <span className="text-xs font-mono text-[#8E8980] uppercase tracking-wider block">
                CORE CAPABILITIES
              </span>
              <ul className="space-y-2.5">
                {[
                  "Full-Stack Architecture (React/Next.js + FastAPI/Node)",
                  "Granular Multi-Role Access Control (RBAC)",
                  "Real-time & Serverless Database Modeling (PostgreSQL, Prisma, MongoDB)",
                  "Native-Feel Mobile Engineering with Flutter",
                  "Performance Tuning & Microservice Optimizations"
                ].map((cap, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#1C1B19] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#5E725F] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
