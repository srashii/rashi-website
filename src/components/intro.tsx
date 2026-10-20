import Image from "next/image";
import { Download, LinkedinIcon, Mail } from "lucide-react";
import { siteConfig } from "@/site.config";

const Intro = () => {
  const { hero } = siteConfig;
  return (
    <section className="mb-24 px-5 pt-6 xl:px-0">
      <div className="flex items-center gap-5">
        {hero.photo && (
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full md:h-28 md:w-28">
            <Image
              src={hero.photo}
              alt={siteConfig.siteTitle}
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="112px"
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold md:text-5xl">
            {siteConfig.siteTitle}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {hero.role}
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
        {hero.headline} <span className="text-accent">{hero.headlineAccent}</span>
      </p>
      <p className="mt-6 max-w-3xl text-base text-slate-600 md:text-lg dark:text-slate-300">
        {hero.summary}
      </p>

      {[
        { title: hero.highlightsTitle, proof: hero.proof },
        { title: hero.earlierTitle, proof: hero.earlierProof },
      ].map((group) => (
        <div key={group.title}>
          <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-accent">
            {group.title}
          </h2>
          <ul className="mt-3 grid list-none gap-3 p-0 md:grid-cols-3 md:gap-4">
            {group.proof.map((p) => (
              <li key={p.figure} className="rounded-2xl bg-[#f1eefe] p-4 dark:bg-slate-700 md:p-5">
                <p className="whitespace-nowrap text-2xl font-bold tabular-nums text-accent md:text-4xl">
                  {p.figure}
                </p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200 md:mt-2 md:text-base">{p.label}</p>
                {"revenue" in p && p.revenue && (
                  <p className="mt-3 border-t border-accent/30 pt-3 text-sm font-bold text-slate-900 dark:text-white md:text-base">
                    {p.revenue}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={hero.cv}
          className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-transparent hover:text-accent"
        >
          <Download size={18} /> Download CV
        </a>
        <a
          href={siteConfig.socialLinks.email}
          className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-6 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        >
          <Mail size={18} /> Email me
        </a>
        <a
          href={siteConfig.socialLinks.linkedIn}
          className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:text-slate-200"
        >
          <LinkedinIcon size={18} /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export { Intro };
