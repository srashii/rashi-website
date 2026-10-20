import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { isUnlocked } from "@/lib/lock";
import { toCard } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Product Portfolio",
  description:
    "Problems I have been solving, how I approached them, and the designs behind them.",
};

export default async function Portfolio() {
  const locked = !(await isUnlocked());
  const projects = allProjects.sort((a, b) => a.order - b.order).map((p) => toCard(p, locked));

  return (
    <div className="px-5 xl:px-0">
      <h1 className="my-4 font-serif text-5xl font-bold text-accent md:text-8xl">
        Product Portfolio
      </h1>
      <p className="text-xl">
        Problems I have been solving, how I approached them, and the designs
        behind them.
      </p>

      <PortfolioFilter projects={projects} />
    </div>
  );
}
