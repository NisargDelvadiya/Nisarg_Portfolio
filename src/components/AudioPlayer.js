"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

/**
 * AudioPlayer Component
 * 
 * Features:
 * - Plays the new Iron Man / JARVIS theme audio
 * - Plays once without looping
 * - Reset on stop: pausing resets playback to the beginning (0:00)
 * - Reset on finish: ending resets playback to the beginning (0:00) so next click starts fresh
 * - Reset on refresh/reload: always starts in stopped/reset state on page load without auto-resuming
 * - Spacebar keyboard shortcut toggling music on/off without interrupting inputs
 * - Animated sound wave equalizer indicators
 */
export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const barRefs = useRef([]);

  // Initialize Web Audio API Analyser on user interaction
  const initAudioContext = useCallback(() => {
    if (audioContextRef.current || !audioRef.current || typeof window === "undefined") return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyser.smoothingTimeConstant = 0.75;

      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioContextRef.current = ctx;
      analyserRef.current = analyser;
    } catch (err) {
      console.warn("AudioPlayer: Web Audio API init error:", err);
    }
  }, []);

  // Play / Stop toggle with immediate reset on stop
  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        initAudioContext();
        if (audioContextRef.current && audioContextRef.current.state === "suspended") {
          try {
            await audioContextRef.current.resume();
          } catch (_) {}
        }

        // Always ensure playback starts from beginning when starting
        audioRef.current.currentTime = 0;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              setIsPlaying(false);
              console.warn("AudioPlayer: Playback attempt was prevented:", err);
            });
        }
      } else {
        // When user stops while playing, pause and RESET to beginning (0:00)
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn("AudioPlayer: Unexpected audio playback error:", err);
      setIsPlaying(false);
    }
  }, [initAudioContext]);

  // Real-time audio waveform synchronization loop
  useEffect(() => {
    let animId;
    const idleHeights = [4, 8, 14, 11, 7, 4];

    if (isPlaying && analyserRef.current) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      const ranges = [
        [1, 2],
        [3, 5],
        [6, 9],
        [10, 14],
        [15, 20],
        [21, 28],
      ];

      const renderFrame = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);

        ranges.forEach(([start, end], idx) => {
          let sum = 0;
          for (let i = start; i <= end; i++) {
            sum += dataArray[i] || 0;
          }
          const avg = sum / (end - start + 1);
          const normalized = Math.min(1, Math.max(0, avg / 210));
          const height = Math.round(3 + Math.pow(normalized, 0.75) * 16);

          if (barRefs.current[idx]) {
            barRefs.current[idx].style.height = `${height}px`;
          }
        });

        animId = requestAnimationFrame(renderFrame);
      };

      animId = requestAnimationFrame(renderFrame);
    } else {
      barRefs.current.forEach((bar, idx) => {
        if (bar) {
          bar.style.height = `${idleHeights[idx]}px`;
        }
      });
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isPlaying]);

  // Clean up AudioContext on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        try {
          audioContextRef.current.close();
        } catch (_) {}
      }
    };
  }, []);

  // When track ends naturally: reset to start and set isPlaying to false (no looping)
  const handleEnded = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, []);

  // Always reset on initial mount / page refresh / reload
  useEffect(() => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.75;
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
      }

      // Clean up any stale localStorage music states
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("bg_music_playing");
      }
    } catch (err) {
      console.warn("AudioPlayer: Reset exception:", err);
    }
  }, []);

  // Keyboard shortcut listener for Spacebar with input safety
  useEffect(() => {
    const handleKeyDown = (e) => {
      try {
        const target = e.target;
        const isInput =
          target &&
          (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.tagName === "SELECT" ||
            target.isContentEditable);

        if ((e.code === "Space" || e.key === " ") && !isInput) {
          e.preventDefault();
          togglePlay();
        }
      } catch (err) {
        console.warn("AudioPlayer: Key handler error:", err);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePlay]);

  return (
    <>
      <audio
        ref={audioRef}
        src={encodeURI("/Assets/JARVIS - Marvel's Iron Man 3 Second Screen Experience - Trailer.mp3")}
        preload="none"
        onEnded={handleEnded}
        onError={(e) => {
          console.warn("AudioPlayer: Audio resource failed to load:", e);
          if (audioRef.current && !audioRef.current.src.includes("/Assets/jarvis.mp3")) {
            audioRef.current.src = "/Assets/jarvis.mp3";
            audioRef.current.load();
            audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            setIsPlaying(false);
          }
        }}
      />

      {/* Floating Audio Control Button - Responsive & High Z-Index */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[999999] pointer-events-auto select-none">
        <button
          type="button"
          onClick={togglePlay}
          title={isPlaying ? "Jarvis Sleep (Spacebar)" : "Jarvis Wake Up (Spacebar)"}
          aria-label={isPlaying ? "Jarvis Sleep (Spacebar)" : "Jarvis Wake Up (Spacebar)"}
          className={`group relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 active:scale-95 cursor-pointer ${
            isPlaying
              ? "bg-black/95 border-[#67C7EB] text-white shadow-[0_0_25px_rgba(103,199,235,0.4)]"
              : "bg-white/95 border-[#B97D10]/40 text-gray-900 hover:border-[#AA0505] hover:shadow-[0_4px_15px_rgba(170,5,5,0.25)]"
          }`}
        >
          {/* Waveform Visualizer & Play Icon */}
          <div className="flex items-center gap-1.5 h-5">
            <span className={`text-[10px] font-bold ${isPlaying ? "text-[#67C7EB]" : "text-[#AA0505]"}`}>
              {isPlaying ? "■" : "▶"}
            </span>

            {/* Real-time audio frequency synchronized waveforms */}
            <div className="flex items-center gap-[2.5px] h-5 px-0.5">
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <span
                  key={idx}
                  ref={(el) => {
                    barRefs.current[idx] = el;
                  }}
                  style={{ height: `${[4, 8, 14, 11, 7, 4][idx]}px` }}
                  className={`w-[2.5px] rounded-full transition-[height] duration-75 ease-out ${
                    isPlaying
                      ? idx === 2 || idx === 3
                        ? "bg-[#FBCA03] shadow-[0_0_8px_#FBCA03]"
                        : "bg-[#67C7EB] shadow-[0_0_6px_#67C7EB]"
                      : idx === 2 || idx === 3
                        ? "bg-[#B97D10] group-hover:bg-[#AA0505]"
                        : "bg-[#AA0505]/60 group-hover:bg-[#AA0505]"
                  }`}
                />
              ))}
            </div>
          </div>

          <span className="font-extrabold text-[10px] sm:text-xs tracking-wider uppercase">
            {isPlaying ? "Jarvis Sleep" : "Jarvis Wake Up"}
          </span>

          <span className="hidden lg:inline text-[9px] opacity-60 font-semibold border border-current px-1 rounded">
            SPACE
          </span>
        </button>
      </div>
    </>
  );
}
