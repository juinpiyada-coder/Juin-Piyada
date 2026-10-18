import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenResume }) {
  const [kolkataTime, setKolkataTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setKolkataTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[var(--ink)] text-[var(--paper)] pt-20 pb-10 px-6 md:px-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-3 bg-[var(--mustard)]" style={{maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'%3E%3Cpath d='M0 5 Q 25 10, 50 5 T 100 5 L 100 0 L 0 0 Z' fill='black'/%3E%3C/svg%3E\")", maskSize: "100% 100%"}}></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="font-display text-4xl mb-4">Let's build something<br/>unbreakable.</div>
            <p className="font-sans opacity-80 mb-8 max-w-sm leading-relaxed">
              Open for freelance opportunities and full-time roles starting early 2025.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary magnetic" style={{background: 'var(--coral)', borderColor: 'var(--coral)'}} data-cursor="hover">
                <span>Start a project</span>
              </Link>
              <button onClick={onOpenResume} className="btn-ghost text-[var(--paper)] border-[var(--paper)] magnetic" data-cursor="hover">
                <span>Read Resume</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:text-right font-sans">
            <div>
              <div className="font-hand text-xl text-[var(--mustard)] mb-3">navigation</div>
              <ul className="space-y-2 opacity-90 font-medium">
                <li><Link to="/" className="link-anim inline-block magnetic" data-cursor="hover">Overview</Link></li>
                <li><Link to="/projects" className="link-anim inline-block magnetic" data-cursor="hover">Projects</Link></li>
                <li><Link to="/experience" className="link-anim inline-block magnetic" data-cursor="hover">Experience</Link></li>
                <li><Link to="/skills" className="link-anim inline-block magnetic" data-cursor="hover">Skills</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-hand text-xl text-[var(--pink)] mb-3">connect</div>
              <ul className="space-y-2 opacity-90 font-medium">
                <li><a href="mailto:juinpiyada1@gmail.com" className="link-anim inline-block magnetic" data-cursor="hover">Email</a></li>
                <li><a href="tel:+918240345541" className="link-anim inline-block magnetic" data-cursor="hover">Phone</a></li>
                <li><a href="https://www.linkedin.com/in/juinpiyada/" target="_blank" rel="noopener noreferrer" className="link-anim inline-block magnetic" data-cursor="hover">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--paper)] border-opacity-20 opacity-60 text-sm font-sans">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Juin Piyada. No AI was harmed in the making of this site.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--teal)] animate-pulse" />
              <span>{kolkataTime || 'IST'}</span>
            </div>
            <button onClick={scrollToTop} className="font-hand text-lg magnetic" data-cursor="hover">
              back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
