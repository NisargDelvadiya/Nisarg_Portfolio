"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

/**
 * AudioPlayer Component
 * 
 * Features:
 * - Floating background theme song player (Spider-Man theme score)
 * - Persisted playback state across page visits via localStorage
 * - Spacebar keyboard shortcut toggling music on/off without interrupting inputs
 * - Animated sound wave equalizer indicators
 * - Full Spider-Man / Venom symbiote styling
 */
export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { isVenomMode } = useTheme();

  useEffect(() => {
    if (audioRef.current) {
      // Keep volume comfortable for ambient listening
      audioRef.current.volume = 0.25;
    }

    // Check saved music preference in localStorage
    const savedState = localStorage.getItem("bg_music_playing");
    if (savedState === "true") {
      const playPromise = audioRef.current?.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem("bg_music_playing", "true");
        })
        .catch((err) => {
          console.log("Audio playback prevented:", err);
        });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem("bg_music_playing", "false");
    }
  };

  // Keyboard shortcut listener for Spacebar
  useEffect(() => {
    const handleKeyDown = (e) => {
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
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/Assets/Spider_Man.mp3"
        loop
        preload="auto"
      />

      {/* Floating Audio Control Button - Responsive & High Z-Index */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[999999] pointer-events-auto select-none">
        <button
          type="button"
          onClick={togglePlay}
          title={isPlaying ? "Pause Background Theme Music (Spacebar)" : "Play Background Theme Music (Spacebar)"}
          aria-label={isPlaying ? "Pause Background Theme Music (Spacebar)" : "Play Background Theme Music (Spacebar)"}
          className={`group relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 active:scale-95 cursor-pointer ${
            isPlaying
              ? isVenomMode
                ? "bg-purple-950 border-purple-500 text-purple-200 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                : "bg-black border-[#a31515] text-white shadow-red-950/50"
              : isVenomMode
              ? "bg-[#0b0b14]/95 border-purple-700 text-purple-300 hover:border-purple-500"
              : "bg-white/95 border-gray-400 text-gray-900 hover:border-[#a31515]"
          }`}
        >
          {/* Animated Equalizer / Icon indicator */}
          <div className="flex items-center gap-1 h-3.5 w-3.5 justify-center">
            {isPlaying ? (
              <span className="flex items-end gap-0.5 h-3">
                <span className={`w-0.5 h-full animate-[bounce_0.6s_ease-in-out_infinite] ${isVenomMode ? "bg-purple-400" : "bg-[#a31515]"}`}></span>
                <span className={`w-0.5 h-2/3 animate-[bounce_0.8s_ease-in-out_infinite_0.2s] ${isVenomMode ? "bg-purple-400" : "bg-[#a31515]"}`}></span>
                <span className={`w-0.5 h-full animate-[bounce_0.7s_ease-in-out_infinite_0.4s] ${isVenomMode ? "bg-purple-400" : "bg-[#a31515]"}`}></span>
              </span>
            ) : (
              <span className="text-xs">▶</span>
            )}
          </div>

          <span className="font-extrabold text-[10px] sm:text-xs tracking-wider uppercase">
            {isPlaying ? "MUSIC ON" : "PLAY THEME"}
          </span>

          <span className="hidden lg:inline text-[9px] opacity-60 font-semibold border border-current px-1 rounded">
            SPACE
          </span>
        </button>
      </div>
    </>
  );
}
