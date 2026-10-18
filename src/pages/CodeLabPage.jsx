import React from 'react';
import ZenCodeLab from '../components/ZenCodeLab';

export default function CodeLabPage() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-10 bg-[var(--bg)] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 text-center reveal">
          <div className="font-hand text-2xl text-[var(--pink)] mb-2">— the lab</div>
          <h1 className="hero-title text-4xl md:text-6xl mb-4">
            CODE <span className="title-stroke">SANDBOX</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans text-lg opacity-80">
            Inspect authentic backend architectures, role-based authorization guards, and database transactions extracted from Juin's production systems.
          </p>
        </div>

        <ZenCodeLab />
      </div>
    </div>
  );
}
