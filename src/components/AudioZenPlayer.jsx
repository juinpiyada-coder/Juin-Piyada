import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AudioZenPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Play a soft Japanese singing bowl chime using Web Audio API
  const playSingingBowlChime = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const fundamental = 261.63; // C4 note - calming frequency
      const harmonics = [1, 2.76, 5.4, 8.9];
      const gains = [0.15, 0.08, 0.04, 0.02];

      harmonics.forEach((h, index) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamental * h, now);

        // Gentle vibrato / frequency modulation
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(3.5, now);
        lfoGain.gain.setValueAtTime(1.5, now);
        lfo.connect(osc.frequency);
        lfo.start(now);
        lfo.stop(now + 6.0);

        // Lowpass filter for warm tone
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1800, now);
        filter.frequency.exponentialRampToValueAtTime(300, now + 5.5);

        // Exponential decay envelope
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.exponentialRampToValueAtTime(gains[index], now + 0.08);
        gainNode.gain.exponentialRampToValueAtTime(0.00001, now + 5.8);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 6.0);
      });
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  const toggleZenSound = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      playSingingBowlChime();
      setIsPlaying(true);
      // Play a periodic soft chime every 14 seconds
      intervalRef.current = setInterval(() => {
        playSingingBowlChime();
      }, 14000);
    }
  };

  return (
    <button
      onClick={toggleZenSound}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-2xl text-[10px] sm:text-xs font-semibold transition-all duration-300 ${
        isPlaying
          ? 'bg-[#EBF0EC] text-[#5E725F] border border-[#5E725F]/30 shadow-sm'
          : 'bg-white border border-black/5 text-[#58544D] hover:bg-black/5 shadow-sm'
      }`}
      title={isPlaying ? "Mute Zen Garden Sound" : "Listen to Zen Garden Singing Bowl"}
      aria-label="Toggle Zen audio atmosphere"
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5E725F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5E725F]"></span>
          </span>
          <div className="flex flex-col items-start leading-tight">
            <span>Zen Audio</span>
            <span>Active</span>
          </div>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#8E8980] shrink-0" />
          <div className="flex flex-col items-start leading-tight">
            <span>Zen Audio</span>
            <span>Off</span>
          </div>
        </>
      )}
    </button>
  );
}
