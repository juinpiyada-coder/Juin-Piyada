import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

// Multi-Page Views
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import CodeLabPage from './pages/CodeLabPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Global scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          // Trigger path draw
          entry.target.querySelectorAll('.path-draw').forEach(p => p.classList.add('in'));
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    // Since this runs once, we observe initially.
    // In a React SPA, it's better to observe elements via refs or component-level effects,
    // but a global timeout to catch newly mounted nodes is a quick patch for this design.
    const observeNodes = () => {
      document.querySelectorAll('.reveal, .reveal-stagger, .path-draw').forEach(el => observer.observe(el));
    };
    
    observeNodes();
    // A simple interval to re-observe if DOM changes (or call this on route change)
    const interval = setInterval(observeNodes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* Background is handled by index.css body { background: var(--bg); } */}
      <div className="min-h-screen flex flex-col justify-between">
        
        {/* Subtle Grain Texture from the new theme */}
        <div className="grain" />

        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Persistent Multi-Page Navigation Header */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Multi-Page Routes Container */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenResume={() => setResumeModalOpen(true)}
                  onSelectProject={(proj) => setSelectedProject(proj)}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  onSelectProject={(proj) => setSelectedProject(proj)}
                />
              }
            />
            <Route
              path="/experience"
              element={
                <ExperiencePage
                  onOpenResume={() => setResumeModalOpen(true)}
                />
              }
            />
            <Route
              path="/skills"
              element={<SkillsPage />}
            />
            <Route
              path="/codelab"
              element={<CodeLabPage />}
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenResume={() => setResumeModalOpen(true)}
                />
              }
            />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer onOpenResume={() => setResumeModalOpen(true)} />

        {/* Global Modals */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {resumeModalOpen && (
          <ResumeModal onClose={() => setResumeModalOpen(false)} />
        )}

      </div>
    </Router>
  );
}
