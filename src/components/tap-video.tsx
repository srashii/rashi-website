"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

// A video with no control bar over the screens: a centre play button, tap the video to pause.
export const TapVideo = ({ src, poster, className }: { src: string; poster: string; className: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <div className="relative inline-block max-w-full">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className={`${className} max-w-full cursor-pointer rounded-lg`}
      />
      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white opacity-90 shadow-lg transition-transform hover:scale-110"
        >
          <Play size={28} className="ml-1 fill-white" />
        </button>
      )}
    </div>
  );
};
