import { ArrowUpRight, Figma } from "lucide-react";

interface DesignGalleryProps {
  url?: string;
  media?: string[];
  title: string;
}

export const isVideo = (src: string) => src.endsWith(".mp4");

// Each video ships with a same-named .jpg cover frame.
export const posterFor = (src: string) => src.replace(/\.mp4$/, ".jpg");

// "a|b" in media renders a and b side by side.
export const firstMedia = (entry: string) => entry.split("|")[0];

const MediaItem = ({ src, title, className }: { src: string; title: string; className: string }) =>
  isVideo(src) ? (
    <video
      src={src}
      poster={posterFor(src)}
      controls
      muted
      playsInline
      preload="metadata"
      className={`${className} max-w-full rounded-lg`}
    />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={`${title} design`} loading="lazy" className={`${className} max-w-full rounded-lg`} />
  );

export const DesignGallery = ({ url, media, title }: DesignGalleryProps) => {
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
      <div className="flex flex-col items-start gap-6">
        {media.map((entry) => {
          const group = entry.split("|");
          return group.length > 1 ? (
            <div key={entry} className="flex flex-wrap items-start gap-6">
              {group.map((src) => (
                <MediaItem key={src} src={src} title={title} className="max-h-[600px]" />
              ))}
            </div>
          ) : (
            <MediaItem key={entry} src={entry} title={title} className="max-h-[700px]" />
          );
        })}
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase text-accent hover:underline"
        >
          Open in Figma <ArrowUpRight size={18} />
        </a>
      )}
    </>
  );
};
