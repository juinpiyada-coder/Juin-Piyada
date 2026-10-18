import React from 'react';
import ContactSection from '../components/ContactSection';
import { portfolioData } from '../data/portfolioData';

export default function ContactPage({ onOpenResume }) {
  return (
    <div className="pt-32 pb-20 px-6 md:px-10 bg-[var(--bg)] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 text-center reveal">
          <div className="font-hand text-2xl text-[var(--teal)] mb-2">— let's talk</div>
          <h1 className="hero-title text-4xl md:text-6xl mb-4">
            GET IN <span className="title-stroke">TOUCH</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans text-lg opacity-80 mb-6">
            Have an exciting role, software project, or architectural challenge? Send a message or download Juin's verified curriculum vitae.
          </p>
          <button onClick={onOpenResume} className="btn-primary magnetic" style={{background: 'var(--coral)', borderColor: 'var(--coral)'}} data-cursor="hover">
            <i className="fas fa-file-pdf mr-2"></i> Open Verified CV PDF
          </button>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}
