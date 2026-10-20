import { Project } from "contentlayer/generated";

export const OwnershipBadges = ({ project }: { project: Project }) => {
  if (!project.stage && !project.endToEnd) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {project.stage && (
        <span
          className={
            project.stage === "0 to 1"
              ? "rounded-full bg-accent px-3 py-1 text-xs font-bold text-white"
              : "rounded-full border border-accent px-3 py-1 text-xs font-bold text-accent"
          }
        >
          {project.stage === "0 to 1" ? "Built 0 to 1" : "Scaled"}
        </span>
      )}
      {project.endToEnd && (
        <span className="rounded-full border border-slate-400 px-3 py-1 text-xs font-bold dark:border-slate-400">
          Owned end to end
        </span>
      )}
    </div>
  );
};
