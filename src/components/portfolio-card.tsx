import { Project } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const PortfolioCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/portfolio/${project.slugAsParams}`}
      className="group flex h-full flex-col rounded-lg border p-6 shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg dark:border-slate-500"
    >
      <p className="text-sm font-bold uppercase tracking-wide text-accent">
        {project.company}
        {project.period && (
          <span className="font-normal text-slate-500 dark:text-slate-300">
            {" "}
            · {project.period}
          </span>
        )}
      </p>
      <h3 className="my-3 text-xl font-bold">{project.title}</h3>
      <p className="text-base">{project.problem}</p>
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
      <span className="mt-auto inline-flex items-center pt-6 text-sm font-bold uppercase text-accent">
        See how I approached it <ArrowUpRight size={18} />
      </span>
    </Link>
  );
};
