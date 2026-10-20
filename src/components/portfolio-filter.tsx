"use client";

import type { CardProject } from "@/lib/projects";
import { useState } from "react";
import { PortfolioCard } from "./portfolio-card";

const filters = [
  { label: "All", match: () => true },
  { label: "Built 0 to 1", match: (p: CardProject) => p.stage === "0 to 1" },
  { label: "Owned end to end", match: (p: CardProject) => !!p.endToEnd },
];

export const PortfolioFilter = ({ projects }: { projects: CardProject[] }) => {
  const [active, setActive] = useState(filters[0].label);
  const filter = filters.find((f) => f.label === active) ?? filters[0];
  const shown = projects.filter(filter.match);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
        {filters.map((f) => (
          <button
            key={f.label}
            type="button"
            onClick={() => setActive(f.label)}
            aria-pressed={active === f.label}
            className={
              active === f.label
                ? "rounded-full border-2 border-accent bg-accent px-4 py-1.5 text-sm font-bold text-white"
                : "rounded-full border-2 border-slate-300 px-4 py-1.5 text-sm font-bold hover:border-accent dark:border-slate-500"
            }
          >
            {f.label} ({projects.filter(f.match).length})
          </button>
        ))}
      </div>

      <ul className="my-8 grid gap-6 md:grid-cols-2">
        {shown.map((project) => (
          <li key={project._id}>
            <PortfolioCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
};
