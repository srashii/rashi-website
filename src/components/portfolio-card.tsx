import type { CardProject } from "@/lib/projects";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { OwnershipBadges } from "./ownership-badges";
import { firstMedia, isVideo, posterFor } from "./design-gallery";
import { Redacted } from "./redacted";

export const PortfolioCard = ({ project }: { project: CardProject }) => {
  const cover = project.cover ?? (project.media?.[0] && firstMedia(project.media[0]));
  const thumbnail = cover && (isVideo(cover) ? posterFor(cover) : cover);

  return (
    <Link
      href={`/portfolio/${project.slugAsParams}`}
      className="group flex h-full flex-col rounded-2xl border-2 border-slate-200 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl focus-visible:border-accent focus-visible:outline-none dark:border-slate-500"
    >
      {project.locked && (
        <div className="mb-5 flex h-56 w-full flex-col items-center justify-center gap-2 rounded-xl bg-[#f1eefe] text-sm text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          <Lock size={24} strokeWidth={1.5} />
          Designs hidden
        </div>
      )}
      {thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt=""
          loading="lazy"
          className="mb-5 h-56 w-full rounded-xl bg-[#f1eefe] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      )}
      <OwnershipBadges project={project} />
      <p className="mt-3 text-sm font-bold uppercase tracking-wide text-accent">
        {project.company}
      </p>
      <h3 className="my-3 text-xl font-bold">
        <Redacted text={project.title} />
      </h3>
      <p className="text-base">
        <Redacted text={project.problem} />
      </p>
      {project.result && (
        <p className="mt-4 border-l-4 border-accent pl-3 text-base font-bold">
          <Redacted text={project.result} />
        </p>
      )}
      {project.tags && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-auto pt-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition-all group-hover:gap-3">
          Read the case study <ArrowRight size={18} />
        </span>
      </span>
    </Link>
  );
};
