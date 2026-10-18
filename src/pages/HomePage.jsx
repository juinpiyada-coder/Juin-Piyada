import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export default function HomePage({ onOpenResume, onSelectProject }) {
  const { personal, projects } = portfolioData;

  return (
    <div className="bg-[var(--bg)] text-[var(--ink)] font-sans">
      {/* ============== HERO ============== */}
      <section id="top" className="relative min-h-screen pt-28 pb-20 px-6 md:px-10 overflow-hidden flex flex-col justify-center">
        
        {/* Floating doodad background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-[8%] w-20 h-20 float-slow">
            <svg viewBox="0 0 80 80" className="w-full h-full doodle">
              <path d="M40 8 L48 32 L72 32 L52 48 L60 72 L40 56 L20 72 L28 48 L8 32 L32 32 Z" fill="var(--mustard)" stroke="var(--ink)"/>
            </svg>
          </div>
          <div className="absolute top-48 right-[10%] w-24 h-24 float-med">
            <svg viewBox="0 0 100 100" className="w-full h-full spin-slow">
              <circle cx="50" cy="50" r="35" fill="var(--teal)" stroke="var(--ink)" strokeWidth="2.5"/>
              <circle cx="50" cy="50" r="15" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5"/>
              <path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50" stroke="var(--ink)" strokeWidth="2.5"/>
            </svg>
          </div>
          <div className="absolute bottom-40 left-[12%] w-16 h-16 wiggle">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <path d="M30 5 L30 50 M15 20 L30 5 L45 20" stroke="var(--ink)" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <circle cx="30" cy="55" r="3" fill="var(--coral)"/>
            </svg>
          </div>
          <div className="absolute top-[55%] right-[15%] drift">
            <svg viewBox="0 0 80 80" className="w-20 h-20">
              <path d="M10 40 Q40 10, 70 40 T10 40" fill="var(--pink)" stroke="var(--ink)" strokeWidth="2.5"/>
              <path d="M10 50 Q40 20, 70 50 T10 50" fill="none" stroke="var(--ink)" strokeWidth="2.5"/>
            </svg>
          </div>
          {/* Tape pieces */}
          <div className="absolute top-24 right-[30%] w-24 h-8 bg-[var(--mustard)] opacity-70 rotate-12 border border-[var(--ink)]" style={{borderStyle: 'dashed'}}></div>
          <div className="absolute bottom-32 right-[8%] w-28 h-8 bg-[var(--pink)] opacity-60 -rotate-6 border border-[var(--ink)]" style={{borderStyle: 'dashed'}}></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative w-full">
          {/* Tag */}
          <div className="flex items-center gap-4 mb-10 reveal">
            <span className="tag magnetic" data-cursor="hover">
              <span className="w-2 h-2 bg-[var(--coral)] rounded-full animate-pulse"></span>
              Available for new projects — 2025
            </span>
            <span className="font-hand text-2xl text-[var(--coral)] hidden md:block">scroll, friend ↓</span>
          </div>

          {/* Big Title */}
          <h1 className="hero-title font-display reveal">
            <span className="block">SYSTEMS</span>
            <span className="block">
              THAT
              <span className="inline-block relative align-middle mx-2 md:mx-4">
                <svg viewBox="0 0 100 100" className="w-[0.85em] h-[0.85em] inline-block align-middle">
                  <circle cx="50" cy="50" r="42" fill="var(--mustard)" stroke="var(--ink)" strokeWidth="3"/>
                  <path d="M30 50 Q50 30, 70 50 Q50 70, 30 50" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2.5"/>
                  <circle cx="50" cy="50" r="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2"/>
                </svg>
              </span>
              <span className="title-stroke">SCALE.</span>
            </span>
          </h1>

          {/* Sub row */}
          <div className="grid md:grid-cols-12 gap-8 mt-16 reveal">
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl font-sans">
                I'm <span className="font-hand text-3xl text-[var(--coral)]">Juin</span> — I build scalable backend architectures,
                REST APIs, and <span className="squiggle font-semibold">database-driven systems</span> that don't break under high load.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/projects" className="btn-primary magnetic" data-cursor="hover">
                  <span>See selected work</span>
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
                <a href="#process" className="btn-ghost magnetic" data-cursor="hover">
                  <span>How we'll work</span>
                </a>
              </div>
            </div>

            {/* Right info card */}
            <div className="md:col-span-5 md:col-start-9">
              <div className="sketch-border-thick bg-[var(--paper)] p-6 relative float-slow">
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-[var(--coral)] rounded-full border-[2.5px] border-[var(--ink)] flex items-center justify-center text-[var(--paper)] text-xs font-bold wiggle">
                  ACTIVE
                </div>
                <div className="font-hand text-xl text-[var(--coral)] mb-2">currently</div>
                <div className="font-display text-2xl mb-4">Building systems for:</div>
                <ul className="space-y-3 text-[15px] font-sans">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-[var(--teal)] rounded-full border-2 border-[var(--ink)] shrink-0 mt-0.5"></span>
                    <span><strong>KhanaOS</strong> — Backend Developer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-[var(--mustard)] rounded-full border-2 border-[var(--ink)] shrink-0 mt-0.5"></span>
                    <span><strong>Aimtech Dynamics</strong> — Full Stack Developer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-[var(--pink)] rounded-full border-2 border-[var(--ink)] shrink-0 mt-0.5"></span>
                    <span><strong>AI &amp; Agentic Workflows</strong> — LLM &amp; Microservices</span>
                  </li>
                </ul>
                <div className="mt-5 pt-5 border-t-2 border-dashed border-[var(--ink)]">
                  <div className="flex justify-between items-baseline">
                    <span className="font-hand text-lg">availability</span>
                    <span className="font-display text-2xl text-[var(--coral)]">Open for Roles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee strip */}
          <div className="mt-24 -mx-6 md:-mx-10 overflow-hidden border-y-2 border-[var(--ink)] py-4 bg-[var(--mustard)]">
            <div className="marquee-track items-center gap-12 text-2xl md:text-3xl font-display whitespace-nowrap">
              <span>★ NODE.JS &amp; EXPRESS</span>
              <span className="text-[var(--coral)]">✦ POSTGRESQL &amp; PRISMA</span>
              <span>★ REACT.JS &amp; VITE</span>
              <span className="text-[var(--teal)]">✦ REST APIS</span>
              <span>★ PHP &amp; MYSQL</span>
              <span className="text-[var(--pink)]">✦ AI &amp; AGENTIC CODING</span>
              <span>★ NODE.JS &amp; EXPRESS</span>
              <span className="text-[var(--coral)]">✦ POSTGRESQL &amp; PRISMA</span>
              <span>★ REACT.JS &amp; VITE</span>
              <span className="text-[var(--teal)]">✦ REST APIS</span>
              <span>★ PHP &amp; MYSQL</span>
              <span className="text-[var(--pink)]">✦ AI &amp; AGENTIC CODING</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== INTRO / MANIFESTO ============== */}
      <section className="relative py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative reveal">
              {/* Polaroid-style image */}
              <div className="relative inline-block">
                <div className="sketch-border-thick bg-[var(--paper)] p-4 pb-16 rotate-[-3deg] transition-transform duration-500 hover:rotate-0">
                  <div className="w-full aspect-[4/5] bg-[var(--cream)] overflow-hidden relative">
                    <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-[var(--mustard)] mix-blend-multiply opacity-30"></div>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 text-center font-hand text-2xl text-[var(--ink)]">that's me, hi ✦</div>
                </div>
                {/* Sticker */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--coral)] rounded-full border-[2.5px] border-[var(--ink)] flex items-center justify-center text-center font-display text-[var(--paper)] text-xs leading-tight wiggle">
                  BCA<br/>'25
                </div>
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-[var(--teal)] opacity-80 border border-[var(--ink)] rotate-3"></div>
              </div>
            </div>

            <div className="md:col-span-7 reveal">
              <div className="font-hand text-2xl text-[var(--coral)] mb-3">— hello there</div>
              <h2 className="section-title font-display mb-6">
                I write code that<br/>
                <span className="text-[var(--coral)]">refuses</span> to break.
              </h2>
              <div className="space-y-5 text-lg leading-relaxed max-w-xl font-sans">
                <p>
                  Most web apps look great on the surface but are held together by duct tape under the hood. Boring.
                </p>
                <p>
                  I work differently. I dig into the <strong>complex, messy logic</strong> of your application,
                  then build an architecture around it — scalable databases, secure APIs, and interfaces that feel instant. 
                  The kind of system people <em>trust</em> without thinking about it.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-12 reveal-stagger">
                <div>
                  <div className="font-display text-5xl md:text-6xl text-[var(--ink)]">20+</div>
                  <div className="font-hand text-xl text-[var(--coral)] mt-1">projects shipped</div>
                </div>
                <div>
                  <div className="font-display text-5xl md:text-6xl text-[var(--teal)]">3+</div>
                  <div className="font-hand text-xl text-[var(--coral)] mt-1">years coding</div>
                </div>
                <div>
                  <div className="font-display text-5xl md:text-6xl text-[var(--coral)]">15+</div>
                  <div className="font-hand text-xl text-[var(--coral)] mt-1">happy clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="relative py-28 px-6 md:px-10 bg-[var(--bg-deep)] border-y-2 border-[var(--ink)]">
        {/* Decorative top edge */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--ink)]" style={{maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'%3E%3Cpath d='M0 5 Q 25 0, 50 5 T 100 5 L 100 10 L 0 10 Z' fill='black'/%3E%3C/svg%3E\")", maskSize: "100% 100%"}}></div>

        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
            <div>
              <div className="font-hand text-2xl text-[var(--coral)] mb-2">— what I do</div>
              <h2 className="section-title font-display">
                SERVICES<br/>
                <span className="title-stroke">(the goods)</span>
              </h2>
            </div>
            <p className="max-w-md text-lg font-sans">
              Pick a single capability, or bring me in for the whole stack. Either way — you leave with software you'll actually want to use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {/* Service 1 */}
            <div className="step-card sketch-border bg-[var(--coral)] p-7 text-[var(--paper)] relative magnetic" data-cursor="hover">
              <div className="absolute top-4 right-4 font-hand text-xl opacity-70">01</div>
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <circle cx="32" cy="32" r="26" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5"/>
                  <circle cx="32" cy="32" r="14" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2.5"/>
                  <circle cx="32" cy="32" r="5" fill="var(--paper)"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3">Frontend Architecture</h3>
              <p className="text-sm leading-relaxed opacity-90 mb-5 font-sans">
                The face of your app. I build accessible, extremely fast, and responsive user interfaces using modern React and Next.js.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-sans">
                <span className="px-2 py-1 bg-[var(--paper)] text-[var(--ink)] rounded-full">react</span>
                <span className="px-2 py-1 bg-[var(--paper)] text-[var(--ink)] rounded-full">tailwind</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="step-card sketch-border bg-[var(--mustard)] p-7 text-[var(--ink)] relative magnetic" data-cursor="hover">
              <div className="absolute top-4 right-4 font-hand text-xl opacity-70">02</div>
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path d="M14 14 L50 14 L50 50 L14 50 Z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5"/>
                  <path d="M22 26 L42 26 M22 32 L42 32 M22 38 L34 38" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="48" cy="20" r="6" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3">Backend Engineering</h3>
              <p className="text-sm leading-relaxed opacity-90 mb-5 font-sans">
                The engine room. Designing secure REST & GraphQL APIs, microservices, and high-performance server logic.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-sans">
                <span className="px-2 py-1 bg-[var(--ink)] text-[var(--paper)] rounded-full">node.js</span>
                <span className="px-2 py-1 bg-[var(--ink)] text-[var(--paper)] rounded-full">php</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="step-card sketch-border bg-[var(--teal)] p-7 text-[var(--paper)] relative magnetic" data-cursor="hover">
              <div className="absolute top-4 right-4 font-hand text-xl opacity-80">03</div>
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <rect x="10" y="20" width="44" height="28" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" rx="3"/>
                  <circle cx="22" cy="34" r="6" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2"/>
                  <path d="M32 28 L38 34 L44 28 L44 40 L32 40 Z" fill="var(--mustard)" stroke="var(--ink)" strokeWidth="2"/>
                  <rect x="26" y="16" width="12" height="6" fill="var(--ink)"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3">Database Design</h3>
              <p className="text-sm leading-relaxed opacity-90 mb-5 font-sans">
                The memory bank. Structuring complex data relationships, optimizing queries, and ensuring data integrity at scale.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-sans">
                <span className="px-2 py-1 bg-[var(--ink)] text-[var(--paper)] rounded-full">postgres</span>
                <span className="px-2 py-1 bg-[var(--ink)] text-[var(--paper)] rounded-full">mongodb</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="step-card sketch-border bg-[var(--pink)] p-7 text-[var(--ink)] relative magnetic" data-cursor="hover">
              <div className="absolute top-4 right-4 font-hand text-xl opacity-70">04</div>
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <path d="M16 14 L48 14 L48 50 L32 42 L16 50 Z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5"/>
                  <path d="M24 24 L40 24 M24 30 L40 30 M24 36 L34 36" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3">UI/UX Craftsmanship</h3>
              <p className="text-sm leading-relaxed opacity-90 mb-5 font-sans">
                The feel. Translating wireframes into beautiful, accessible interfaces with smooth micro-animations and polish.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-sans">
                <span className="px-2 py-1 bg-[var(--ink)] text-[var(--paper)] rounded-full">figma</span>
                <span className="px-2 py-1 bg-[var(--ink)] text-[var(--paper)] rounded-full">gsap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WORK ============== */}
      <section id="work" className="relative py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
            <div>
              <div className="font-hand text-2xl text-[var(--coral)] mb-2">— selected work</div>
              <h2 className="section-title font-display">
                SYSTEMS<br/>
                I'VE HELPED<br/>
                <span className="text-[var(--teal)]">BUILD.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-6" id="workGrid">
            
            {projects.slice(0, 4).map((proj, idx) => {
              // Alternate sizes for the sketch grid look
              const isLarge = idx === 0;
              const colSpan = isLarge ? 'md:col-span-7' : (idx === 1 ? 'md:col-span-5' : 'md:col-span-6');
              const bgColors = ['bg-[var(--mustard)]', 'bg-[var(--teal)]', 'bg-[var(--pink)]', 'bg-[var(--coral)]'];
              const bgColor = bgColors[idx % bgColors.length];

              return (
                <div key={proj.id} className={`project-card ${colSpan} reveal`} onClick={() => onSelectProject(proj)}>
                  <div className="sketch-border-thick bg-[var(--paper)] overflow-hidden magnetic" data-cursor="hover">
                    <div className={`project-thumb relative aspect-[16/10] ${bgColor} overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <h3 className="font-display text-4xl text-[var(--paper)] text-center drop-shadow-md">{proj.title}</h3>
                      </div>
                      <div className="project-overlay absolute inset-0 bg-[var(--ink)] bg-opacity-95 flex items-center justify-center">
                        <div className="text-center text-[var(--paper)]">
                          <div className="font-hand text-2xl text-[var(--mustard)] mb-2">view project</div>
                          <div className="font-display text-3xl">{proj.title}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t-2 border-[var(--ink)] gap-4">
                      <div>
                        <div className="font-display text-2xl">{proj.title}</div>
                        <div className="text-sm text-[var(--ink-soft)] mt-1 font-sans line-clamp-1">{proj.description}</div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <span className="tag text-xs">{proj.techStack[0]}</span>
                        {proj.techStack[1] && <span className="tag text-xs">{proj.techStack[1]}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* See all */}
          <div className="text-center mt-12 reveal">
            <Link to="/projects" className="btn-ghost magnetic" data-cursor="hover">
              <span>See the full archive</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <section id="process" className="relative py-28 px-6 md:px-10 bg-[var(--ink)] text-[var(--paper)] border-y-2 border-[var(--ink)] overflow-hidden">
        {/* Bg doodles */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute top-20 right-10 w-32 h-32 spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--mustard)" strokeWidth="2" strokeDasharray="6 6"/>
          </svg>
          <svg className="absolute bottom-20 left-10 w-24 h-24 float-slow" viewBox="0 0 100 100">
            <path d="M20 50 L80 50 M50 20 L50 80" stroke="var(--coral)" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 reveal">
            <div>
              <div className="font-hand text-2xl text-[var(--mustard)] mb-2">— how we'll work</div>
              <h2 className="section-title font-display">
                THE PROCESS,<br/>
                <span className="text-[var(--coral)]">STICKER-FIED.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg opacity-80 font-sans">
              Four steps. No corporate jargon. Just a clear path from "we have an idea" to "we have a scalable product."
            </p>
          </div>

          {/* Process steps */}
          <div className="grid md:grid-cols-4 gap-5 relative reveal-stagger">
            
            {/* Connecting path */}
            <svg className="hidden md:block absolute top-12 left-0 right-0 h-2 path-draw" viewBox="0 0 1000 10" preserveAspectRatio="none">
              <path d="M0 5 L1000 5" stroke="var(--mustard)" strokeWidth="2" strokeDasharray="8 8" fill="none"/>
            </svg>

            {/* Step 1 */}
            <div className="step-card relative magnetic" data-cursor="hover">
              <div className="step-num w-24 h-24 mx-auto bg-[var(--coral)] text-[var(--paper)] rounded-full border-[3px] border-[var(--paper)] flex items-center justify-center font-display text-5xl mb-5 relative z-10 transition-all duration-300">01</div>
              <div className="text-center">
                <div className="font-hand text-2xl text-[var(--mustard)] mb-1">discovery</div>
                <h3 className="font-display text-xl mb-3">We talk architecture.</h3>
                <p className="text-sm opacity-80 leading-relaxed font-sans">
                  Deep dive into requirements, database schemas, and long-term goals. We pick the right stack for the job, not just the trendiest one.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card relative magnetic" data-cursor="hover">
              <div className="step-num w-24 h-24 mx-auto bg-[var(--mustard)] text-[var(--ink)] rounded-full border-[3px] border-[var(--paper)] flex items-center justify-center font-display text-5xl mb-5 relative z-10 transition-all duration-300">02</div>
              <div className="text-center">
                <div className="font-hand text-2xl text-[var(--coral)] mb-1">design</div>
                <h3 className="font-display text-xl mb-3">Pixels & schemas.</h3>
                <p className="text-sm opacity-80 leading-relaxed font-sans">
                  Database design, API contracts, and UI wireframes. We plan how the data moves before writing a single line of feature code.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card relative magnetic" data-cursor="hover">
              <div className="step-num w-24 h-24 mx-auto bg-[var(--teal)] text-[var(--paper)] rounded-full border-[3px] border-[var(--paper)] flex items-center justify-center font-display text-5xl mb-5 relative z-10 transition-all duration-300">03</div>
              <div className="text-center">
                <div className="font-hand text-2xl text-[var(--mustard)] mb-1">build</div>
                <h3 className="font-display text-xl mb-3">Head down, building.</h3>
                <p className="text-sm opacity-80 leading-relaxed font-sans">
                  Clean, typed, testable code. Weekly sprint updates. Real progress you can click through on a staging server.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="step-card relative magnetic" data-cursor="hover">
              <div className="step-num w-24 h-24 mx-auto bg-[var(--pink)] text-[var(--ink)] rounded-full border-[3px] border-[var(--paper)] flex items-center justify-center font-display text-5xl mb-5 relative z-10 transition-all duration-300">04</div>
              <div className="text-center">
                <div className="font-hand text-2xl text-[var(--mustard)] mb-1">deploy</div>
                <h3 className="font-display text-xl mb-3">Off it goes.</h3>
                <p className="text-sm opacity-80 leading-relaxed font-sans">
                  CI/CD pipelines, production deployment, monitoring setup, and handing over the keys to the castle.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============== PLAY (Personal Hobbies Placeholder) ============== */}
      <section id="play" className="relative py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="font-hand text-2xl text-[var(--coral)] mb-2">— when i'm not coding</div>
            <h2 className="section-title font-display">
              THE STUFF THAT<br/>
              <span className="title-stroke">FUELS</span> THE WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            <div className="sticky-note sketch-border p-6 bg-[var(--mustard)]" style={{transform: 'rotate(-2deg)'}}>
              <div className="font-hand text-2xl text-[var(--coral)] mb-3">no. 01</div>
              <h3 className="font-display text-2xl mb-3">3D Prototyping</h3>
              <p className="text-sm leading-relaxed mb-4 font-sans">
                Building weird interactive experiences using Three.js and React Three Fiber. It teaches me that constraints make better design.
              </p>
            </div>

            <div className="sticky-note sketch-border p-6 bg-[var(--coral)] text-[var(--paper)]" style={{transform: 'rotate(1.5deg)'}}>
              <div className="font-hand text-2xl text-[var(--mustard)] mb-3">no. 02</div>
              <h3 className="font-display text-2xl mb-3">Open Source</h3>
              <p className="text-sm leading-relaxed mb-4 opacity-95 font-sans">
                Contributing to tools I use every day. It's the long tail of every production system I've ever made.
              </p>
            </div>

            <div className="sticky-note sketch-border p-6 bg-[var(--teal)] text-[var(--paper)]" style={{transform: 'rotate(-1deg)'}}>
              <div className="font-hand text-2xl text-[var(--mustard)] mb-3">no. 03</div>
              <h3 className="font-display text-2xl mb-3">Hackathons</h3>
              <p className="text-sm leading-relaxed mb-4 opacity-95 font-sans">
                Sleeping under desks and chugging coffee to build something ridiculous in 48 hours.
              </p>
            </div>

            <div className="sticky-note sketch-border p-6 bg-[var(--pink)] text-[var(--ink)]" style={{transform: 'rotate(2deg)'}}>
              <div className="font-hand text-2xl text-[var(--coral)] mb-3">no. 04</div>
              <h3 className="font-display text-2xl mb-3">Tech Meetups</h3>
              <p className="text-sm leading-relaxed mb-4 font-sans">
                Best ideas come from talking to other devs. Just me and whatever architecture problem we're chewing on.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
