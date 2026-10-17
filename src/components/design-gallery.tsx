import { ArrowUpRight, Figma } from "lucide-react";

interface DesignGalleryProps {
  url?: string;
  images?: string[];
  title: string;
}

export const DesignGallery = ({ url, images, title }: DesignGalleryProps) => {
  if (!images?.length) {
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
        {images.map((src, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${title} design ${idx + 1}`}
            loading="lazy"
            className="max-w-full rounded-lg"
          />
        ))}
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
