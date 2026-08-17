"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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
      // Try to auto-play if previously enabled by user
      const playPromise = audioRef.current?.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay blocked by browser policy until user gesture
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem("bg_music_playing", "false");
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem("bg_music_playing", "true");
        })
        .catch((err) => {
          console.log("Audio playback prevented:", err);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/Assets/Spider_Man.mpeg"
        loop
        preload="auto"
      />

      {/* Floating Audio Control Button */}
      <div className="fixed bottom-6 left-6 z-[9999] pointer-events-auto">
        <button
          type="button"
          onClick={togglePlay}
          title={isPlaying ? "Pause Background Theme Music" : "Play Background Theme Music"}
          aria-label={isPlaying ? "Pause Background Theme Music" : "Play Background Theme Music"}
          className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border-2 shadow-2xl backdrop-blur-xl transition-all duration-300 active:scale-95 cursor-pointer ${
            isPlaying
              ? isVenomMode
                ? "bg-purple-950/90 border-purple-500 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                : "bg-black/90 border-[#a31515] text-white shadow-red-950/40"
              : isVenomMode
              ? "bg-black/80 border-purple-900/60 text-purple-400 hover:border-purple-500"
              : "bg-white/90 border-gray-300 text-gray-800 hover:border-[#a31515]"
          }`}
        >
          {/* Animated Equalizer / Icon indicator */}
          <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
            {isPlaying ? (
              <div className="flex items-end justify-center gap-0.5 w-full h-4">
                <span className="w-1 bg-current rounded-full animate-[bounce_1s_infinite_100ms] h-full"></span>
                <span className="w-1 bg-current rounded-full animate-[bounce_1s_infinite_300ms] h-2/3"></span>
                <span className="w-1 bg-current rounded-full animate-[bounce_1s_infinite_200ms] h-4/5"></span>
              </div>
            ) : (
              <span className="text-base">🎵</span>
            )}
          </div>

          <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">
            {isPlaying ? "MUSIC ON" : "PLAY THEME"}
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
