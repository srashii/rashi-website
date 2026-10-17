import { Figma } from "lucide-react";
import { TapVideo } from "./tap-video";

interface DesignGalleryProps {
  media?: string[];
  title: string;
}

export const isVideo = (src: string) => src.endsWith(".mp4");

// Each video ships with a same-named .jpg cover frame.
export const posterFor = (src: string) => src.replace(/\.mp4$/, ".jpg");

// "a|b" in media renders a and b side by side; "Caption :: a" adds a caption above.
// A "#full" suffix shows a full-length scrolling screen at a fixed width instead of capping its height.
export const firstMedia = (entry: string) => entry.split("::").pop()!.trim().split("|")[0].replace(/#full$/, "");

const MediaItem = ({ src: raw, title, className }: { src: string; title: string; className: string }) => {
  const full = raw.endsWith("#full");
  const src = raw.replace(/#full$/, "");
  return isVideo(src) ? (
    <TapVideo src={src} poster={posterFor(src)} className={className} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={`${title} design`} loading="lazy" className={`${full ? "w-[260px]" : className} max-w-full rounded-lg`} />
  );
};

export const DesignGallery = ({ media, title }: DesignGalleryProps) => {
  if (!media?.length) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-300 p-6 text-center text-slate-500 dark:border-slate-500 dark:text-slate-300">
        <Figma size={32} strokeWidth={1} />
        <p className="text-base">Designs coming soon</p>
        <p className="text-xs uppercase tracking-wide">
          [Placeholder: add Figma screens for this project]
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="mb-4 text-sm font-bold uppercase tracking-wide text-accent">
        Figma snapshots · {title}
      </p>
      <div className="flex flex-col items-start gap-6">
        {media.map((raw) => {
          const [caption, entry] = raw.includes("::") ? raw.split("::").map((part) => part.trim()) : [undefined, raw];
          const group = entry.split("|");
          return (
            <figure key={raw} className="m-0 flex flex-col gap-3">
              {caption && (
                <figcaption className="text-sm font-semibold text-slate-600 dark:text-slate-300">{caption}</figcaption>
              )}
              {group.length > 1 ? (
                <div className="flex flex-wrap items-start gap-6">
                  {group.map((src) => (
                    <MediaItem key={src} src={src} title={title} className="max-h-[600px]" />
                  ))}
                </div>
              ) : (
                <MediaItem src={entry} title={title} className="max-h-[700px]" />
              )}
            </figure>
          );
        })}
      </div>
    </>
  );
};
