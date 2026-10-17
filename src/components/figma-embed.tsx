import { ArrowUpRight, Figma } from "lucide-react";

interface FigmaEmbedProps {
  url?: string;
  title: string;
}

export const FigmaEmbed = ({ url, title }: FigmaEmbedProps) => {
  if (!url) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-300 p-6 text-center text-slate-500 dark:border-slate-500 dark:text-slate-300">
        <Figma size={32} strokeWidth={1} />
        <p className="text-base">Figma file coming soon</p>
        <p className="text-xs uppercase tracking-wide">
          [Placeholder: add the Figma link for this project]
        </p>
      </div>
    );
  }

  return (
    <>
      <iframe
        title={`${title} Figma design`}
        className="h-[450px] w-full rounded-lg border md:h-[600px] dark:border-slate-500"
        src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`}
        allowFullScreen
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase text-accent hover:underline"
      >
        Open in Figma <ArrowUpRight size={18} />
      </a>
    </>
  );
};
