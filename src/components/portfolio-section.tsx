import { allProjects } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import { PortfolioCard } from "./portfolio-card";
import { isUnlocked } from "@/lib/lock";
import { toCard } from "@/lib/projects";

export const PortfolioSection = async () => {
  const locked = !(await isUnlocked());
  const projects = allProjects
    .sort((a, b) => a.order - b.order)
    .slice(0, 4)
    .map((p) => toCard(p, locked));

  return (
    <section className="my-24 px-5 xl:px-0">
      <h2 className="mb-4 max-w-2xl font-serif text-5xl leading-tight text-accent md:text-8xl">
        Product Portfolio
      </h2>
      <p className="mb-10 max-w-2xl md:text-xl">
        A few of the problems I have been solving, how I approached them, and
        the designs behind them.
      </p>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project._id}>
            <PortfolioCard project={project} />
          </li>
        ))}
      </ul>
      <a
        href="/portfolio"
        className="my-4 inline-flex items-center justify-center gap-1 rounded-full border-2 border-current bg-accent px-4 py-2 text-center text-base font-bold tracking-wide text-white transition-all hover:cursor-pointer hover:bg-transparent hover:text-accent md:my-10"
      >
        View Full Portfolio <ArrowUpRight />
      </a>
    </section>
  );
};
