import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { FigmaEmbed } from "@/components/figma-embed";
import { ArrowLeft } from "lucide-react";

interface ProjectProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectProps["params"]) {
  const slug = params?.slug?.join("/");
  return allProjects.find((project) => project.slugAsParams === slug);
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.problem,
  };
}

export async function generateStaticParams(): Promise<ProjectProps["params"][]> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return (
    <>
      <a
        href="/portfolio"
        className="my-4 inline-flex items-center gap-2 rounded-full p-2 px-5 text-sm  uppercase tracking-wide lg:hover:bg-accent lg:hover:text-white"
      >
        <ArrowLeft strokeWidth="1" /> Back to Portfolio
      </a>
      <article className="mb-32 px-5 xl:px-0">
        <p className="text-sm font-bold uppercase tracking-wide text-accent">
          {project.company}
          {project.period && ` · ${project.period}`}
        </p>
        <h1 className="my-4 font-serif text-5xl  font-bold text-accent md:text-8xl">
          {project.title}
        </h1>
        <p className="text-xl">{project.problem}</p>

        <div className="prose mt-5 dark:prose-invert md:prose-xl">
          <Mdx code={project.body.code} />
          <h2>Design</h2>
        </div>
        <div className="mt-5">
          <FigmaEmbed url={project.figma} title={project.title} />
        </div>
      </article>
    </>
  );
}
