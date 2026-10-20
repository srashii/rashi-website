import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { DesignGallery } from "@/components/design-gallery";
import { LockedDesigns } from "@/components/locked-designs";
import { Redacted } from "@/components/redacted";
import { UnlockButton } from "@/components/unlock";
import { isUnlocked } from "@/lib/lock";
import { redactText } from "@/lib/redact";
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

  // Link previews are fetched without the passcode, so they get the locked text and the site-wide image.
  const title = redactText(project.title);
  const description = redactText(project.problem);

  return {
    title,
    description,
    openGraph: { title, description },
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

  const locked = !(await isUnlocked());
  const show = (text: string) => (locked ? redactText(text) : text);

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
        </p>
        <h1 className="my-4 font-serif text-5xl  font-bold text-accent md:text-8xl">
          <Redacted text={show(project.title)} />
        </h1>
        <p className="text-xl">
          <Redacted text={show(project.problem)} />
        </p>
        {locked && (
          <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl bg-[#f1eefe] px-4 py-3 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200">
            Numbers and designs in this case are hidden.
            <UnlockButton label="Unlock" small />
          </div>
        )}

        <div className="prose mt-5 dark:prose-invert md:prose-xl">
          <Mdx code={project.body.code} locked={locked} />
          <h2>Design</h2>
        </div>
        <div className="mt-5">
          {locked ? (
            <LockedDesigns />
          ) : (
            <DesignGallery
              media={project.media}
              title={project.title}
            />
          )}
        </div>
      </article>
    </>
  );
}
