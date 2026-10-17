import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { PortfolioCard } from "@/components/portfolio-card";

export const metadata: Metadata = {
  title: "Product Portfolio",
  description:
    "Problems I have been solving, how I approached them, and the designs behind them.",
};

export default function Portfolio() {
  const projects = allProjects.sort((a, b) => a.order - b.order);

  return (
    <div className="px-5 xl:px-0">
      <h1 className="my-4 font-serif text-5xl font-bold text-accent md:text-8xl">
        Product Portfolio
      </h1>
      <p className="text-xl">
        Problems I have been solving, how I approached them, and the designs
        behind them.
      </p>

      <ul className="my-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project._id}>
            <PortfolioCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
