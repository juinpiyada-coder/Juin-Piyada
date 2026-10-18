import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger organic confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF5E3A', '#FFB627', '#2EC4B6', '#FF6B9D']
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12 reveal">
      
      {/* Left Direct Channels */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Email Card */}
        <div className="sketch-border-thick bg-[var(--mustard)] p-6 magnetic" data-cursor="hover">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-[var(--paper)] rounded-full border-2 border-[var(--ink)] flex items-center justify-center">
              <i className="fas fa-envelope text-xl text-[var(--ink)]"></i>
            </div>
            <button
              onClick={handleCopyEmail}
              className="tag bg-[var(--paper)]"
              title="Copy email"
            >
              {copiedEmail ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="font-hand text-xl text-[var(--ink)] mb-1">direct email</div>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="font-display text-xl hover:text-[var(--paper)] transition-colors line-clamp-1"
          >
            {portfolioData.personal.email}
          </a>
        </div>

        {/* Location / Meta */}
        <div className="sketch-border bg-[var(--teal)] text-[var(--paper)] p-6 magnetic" data-cursor="hover">
          <div className="w-12 h-12 bg-[var(--paper)] rounded-full border-2 border-[var(--ink)] flex items-center justify-center mb-4">
            <i className="fas fa-map-marker-alt text-xl text-[var(--teal)]"></i>
          </div>
          <div className="font-hand text-xl text-[var(--mustard)] mb-1">base of operations</div>
          <div className="font-display text-xl mb-2">{portfolioData.personal.location}</div>
          <div className="font-sans font-bold opacity-90 text-sm">Timezone: IST (UTC+5:30)</div>
        </div>

        {/* Socials Grid */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="sketch-border bg-[var(--paper)] p-4 text-center magnetic group hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all"
            data-cursor="hover"
          >
            <i className="fab fa-github text-3xl mb-2 group-hover:-translate-y-1 transition-transform"></i>
            <div className="font-display text-sm">GitHub</div>
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="sketch-border bg-[var(--paper)] p-4 text-center magnetic group hover:bg-[#0077B5] hover:text-[var(--paper)] transition-all"
            data-cursor="hover"
          >
            <i className="fab fa-linkedin text-3xl mb-2 group-hover:-translate-y-1 transition-transform"></i>
            <div className="font-display text-sm">LinkedIn</div>
          </a>
        </div>
      </div>

      {/* Right Form */}
      <div className="lg:col-span-7">
        <div className="sketch-border-thick bg-[var(--paper)] p-8">
          <h3 className="font-display text-3xl mb-6">Send a Message</h3>
          
          {submitted ? (
            <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4 reveal in">
              <div className="w-20 h-20 bg-[var(--teal)] rounded-full border-4 border-[var(--ink)] flex items-center justify-center wiggle">
                <i className="fas fa-check text-4xl text-[var(--paper)]"></i>
              </div>
              <h4 className="font-display text-2xl">Message Sent!</h4>
              <p className="font-sans text-[var(--ink-soft)] max-w-sm">
                Thanks for reaching out. I'll review your message and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-sans font-bold text-sm">Full Name <span className="text-[var(--coral)]">*</span></label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[var(--bg)] border-2 border-[var(--ink)] rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-[var(--coral)] transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-sans font-bold text-sm">Email Address <span className="text-[var(--coral)]">*</span></label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[var(--bg)] border-2 border-[var(--ink)] rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-[var(--coral)] transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-sans font-bold text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-[var(--bg)] border-2 border-[var(--ink)] rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-[var(--coral)] transition-colors"
                  placeholder="Project Inquiry / Job Opportunity"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-sans font-bold text-sm">Message <span className="text-[var(--coral)]">*</span></label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[var(--bg)] border-2 border-[var(--ink)] rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-[var(--coral)] transition-colors resize-none"
                  placeholder="Tell me about your project, team, or whatever is on your mind..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center text-lg magnetic"
                data-cursor="hover"
              >
                <span>Send Message</span>
                <i className="fas fa-paper-plane text-sm ml-2"></i>
              </button>
            </form>
          )}
        </div>
      </div>
      
    </div>
  );
}
