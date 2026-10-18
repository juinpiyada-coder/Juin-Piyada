import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Mail, Sparkles, Code2, Layers, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function HeroSection({ onOpenResume, onOpenProject }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      })
      .from(titleRef.current?.querySelectorAll('.reveal-line'), {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15
      }, "-=0.5")
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, "-=0.6")
      .from(".hero-cta-btn", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
      }, "-=0.5")
      .from(cardRef.current, {
        scale: 0.95,
        opacity: 0,
        y: 25,
        duration: 1,
        ease: 'power2.out'
      }, "-=0.8")
      .from(".hero-floating-chip", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)'
      }, "-=0.6");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] pt-28 pb-16 px-4 sm:px-8 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Editorial Content (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Status Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F4ECE6] border border-[#B8764B]/20 shadow-xs mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8764B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8764B]"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-[#B8764B] uppercase font-sans-clean">
              Software Developer &bull; KhanaOS &amp; Aimtech Dynamics
            </span>
          </div>

          {/* Main Hero Headline */}
          <div ref={titleRef} className="space-y-1 mb-6">
            <div className="reveal-line flex items-baseline gap-3">
              <span className="text-xs font-mono font-medium text-[#8E8980] tracking-widest uppercase">
                // 01. INTRODUCING
              </span>
              <span className="h-[1px] w-12 bg-[#8E8980]/30 inline-block"></span>
            </div>
            <h1 className="reveal-line text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#1C1B19] font-serif-title leading-[1.08]">
              Crafting Serene Code &amp; Scalable Systems
            </h1>
            <p className="reveal-line text-lg sm:text-xl font-medium text-[#B8764B] font-sans-clean pt-1">
              Juin Piyada <span className="text-[#8E8980] font-normal font-zen">（樹陰）</span>
            </p>
          </div>

          {/* Bio Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg text-[#58544D] leading-relaxed max-w-2xl mb-8 font-sans-clean"
          >
            Software &amp; Backend Developer specializing in scalable web applications, REST APIs, database schemas, and AI-assisted workflows across Node.js, React.js, PHP, PostgreSQL, and MySQL.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="hero-cta-btn zen-btn-primary"
            >
              <Sparkles className="w-4 h-4 text-[#D3A762]" />
              <span>Explore Projects</span>
            </a>

            <button
              onClick={onOpenResume}
              className="hero-cta-btn zen-btn-secondary"
            >
              <Code2 className="w-4 h-4 text-[#B8764B]" />
              <span>Inspect CV / Resume</span>
            </button>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hero-cta-btn p-2.5 rounded-full bg-white/80 border border-black/5 text-[#58544D] hover:text-[#1C1B19] hover:border-black/20 transition-all shadow-xs"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero-cta-btn p-2.5 rounded-full bg-white/80 border border-black/5 text-[#58544D] hover:text-[#1C1B19] hover:border-black/20 transition-all shadow-xs"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hero-cta-btn p-2.5 rounded-full bg-white/80 border border-black/5 text-[#58544D] hover:text-[#1C1B19] hover:border-black/20 transition-all shadow-xs"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4 border-t border-black/5">
            {portfolioData.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold font-serif-title text-[#1C1B19]">
                    {m.value}
                  </span>
                  <span className="text-xs font-semibold text-[#B8764B] font-mono">
                    {m.suffix}
                  </span>
                </div>
                <span className="text-xs font-medium text-[#8E8980] tracking-tight">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Clean Japandi Card Showcase (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Decorative Zen Backdrop Circle */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#F4ECE6] to-[#EBF0EC] opacity-80 blur-3xl -z-10 animate-pulse-glow" />

          {/* Clean Card */}
          <div
            ref={cardRef}
            className="relative w-full max-w-sm sm:max-w-md p-4 sm:p-5 rounded-3xl bg-white/90 backdrop-blur-xl border border-black/10 shadow-[0_16px_40px_-12px_rgba(28,27,25,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(28,27,25,0.12)] hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Japandi Framing & Image Wrapper */}
            <div className="relative rounded-2xl overflow-hidden bg-[#F6F4EE] border border-black/5 p-2 shadow-inner">
              
              {/* Profile Image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#EFECE4]">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] group-hover:scale-103 transition-transform duration-500 ease-out"
                />

                {/* Subtle gradient overlay at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Japanese Hanko Seal on Image */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="hanko-seal bg-white/95 backdrop-blur-md shadow-xs">
                    匠
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/95 text-[#1C1B19] backdrop-blur-md shadow-xs">
                    TAKUMI CRAFT
                  </span>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <p className="text-xs font-mono text-[#D3A762] tracking-wider uppercase">
                    SVIMS Kolkata &bull; BCA 2025
                  </p>
                  <h3 className="text-xl font-bold font-serif-title tracking-wide text-white">
                    Juin Piyada
                  </h3>
                  <p className="text-xs text-white/80 font-sans-clean">
                    Software &amp; Backend Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Production Systems */}
            <div className="hero-floating-chip absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-md flex items-center gap-3 z-30">
              <div className="p-2 rounded-xl bg-[#F4ECE6] text-[#B8764B]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-[#8E8980]">
                  ARCHITECT OF
                </span>
                <span className="text-xs font-bold text-[#1C1B19]">
                  CampusOne &bull; Helping Learn
                </span>
              </div>
            </div>

            {/* Floating Badge 2: Tech Stack */}
            <div className="hero-floating-chip absolute -top-4 -right-3 sm:-right-6 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-md flex items-center gap-2 z-30">
              <div className="p-1.5 rounded-lg bg-[#EBF0EC] text-[#5E725F]">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold text-[#1C1B19]">
                Node.js + PostgreSQL + Prisma
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] font-mono tracking-widest text-[#8E8980] uppercase">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-[#B8764B] animate-bounce" />
      </div>
    </section>
  );
}
