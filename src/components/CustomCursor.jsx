import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ mouseX: 0, mouseY: 0, ringX: 0, ringY: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMouseMove = (e) => {
      posRef.current.mouseX = e.clientX;
      posRef.current.mouseY = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animateRing = () => {
      const { mouseX, mouseY, ringX, ringY } = posRef.current;
      const newRingX = ringX + (mouseX - ringX) * 0.18;
      const newRingY = ringY + (mouseY - ringY) * 0.18;
      posRef.current.ringX = newRingX;
      posRef.current.ringY = newRingY;
      ring.style.left = `${newRingX}px`;
      ring.style.top = `${newRingY}px`;
      animationFrameId.current = requestAnimationFrame(animateRing);
    };

    // Magnetic / Hover Logic using Event Delegation
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor="hover"], button, a');
      if (target) {
        ring.classList.add('hover');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('[data-cursor="hover"], button, a');
      if (target) {
        ring.classList.remove('hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animationFrameId.current = requestAnimationFrame(animateRing);

    // Magnetic buttons global listener
    const handleMagneticMove = (e) => {
      const target = e.target.closest('.magnetic');
      if (target) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = 0.25;
        target.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      }
    };

    const handleMagneticLeave = (e) => {
      const target = e.target.closest('.magnetic');
      if (target) {
        target.style.transform = '';
      }
    };

    document.addEventListener('mousemove', handleMagneticMove);
    document.addEventListener('mouseout', handleMagneticLeave, true); // Use capture phase for accurate leave events on children

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousemove', handleMagneticMove);
      document.removeEventListener('mouseout', handleMagneticLeave, true);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden sm:block" />
      <div ref={ringRef} className="cursor-ring hidden sm:block" />
    </>
  );
}
