"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { isVenomMode } = useTheme();

  useEffect(() => {
    if (audioRef.current) {
      // Keep volume low as requested
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
        src="/Assets/Spider_Man.mpeg"
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
          <div className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 shrink-0">
            {isPlaying ? (
              <div className="flex items-end justify-center gap-0.5 w-full h-3.5 sm:h-4">
                <span className="w-1 bg-current rounded-full animate-[bounce_1s_infinite_100ms] h-full"></span>
                <span className="w-1 bg-current rounded-full animate-[bounce_1s_infinite_300ms] h-2/3"></span>
                <span className="w-1 bg-current rounded-full animate-[bounce_1s_infinite_200ms] h-4/5"></span>
              </div>
            ) : (
              <span className="text-sm sm:text-base">🎵</span>
            )}
          </div>

          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider inline-block">
            {isPlaying ? "MUSIC ON" : "PLAY THEME"}
          </span>

          {/* Keyboard shortcut hint badge */}
          <span className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-black rounded border opacity-75 border-current">
            SPACE
          </span>

          {/* Glowing dot indicator */}
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${
              isPlaying
                ? isVenomMode
                  ? "bg-purple-400 animate-pulse shadow-[0_0_8px_#a855f7]"
                  : "bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"
                : "bg-gray-400"
            }`}
          ></span>
        </button>
      </div>
    </>
  );
}
