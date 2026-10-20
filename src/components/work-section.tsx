import { siteConfig } from "@/site.config";
import { isUnlocked } from "@/lib/lock";
import { redactDeep } from "@/lib/redact";
import { Redacted } from "./redacted";
import { ArrowDownToLine } from "lucide-react";

export const WorkSection = async () => {
  const experience = (await isUnlocked()) ? siteConfig.experience : redactDeep(siteConfig.experience);
  return (
    <section className="my-24  px-5 xl:px-0">
      <h2 className="mb-8 max-w-lg font-serif text-5xl leading-tight text-accent md:mb-12 md:text-8xl">
        Experience
      </h2>
      {experience.map((e, id) => {
        return (
          <>
            <div className=" md:my-5  md:flex md:items-start md:p-3" key={id}>
              <div className="my-2 max-w-2xl">
                <h3 className="text-lg">{e.companyName}</h3>
                <h4 className="text-lg font-bold">{e.role}</h4>
                <div>
                  {e.description.split("\n").map((desc, id) => (
                    <p className="my-2 text-base" key={`desc-ex-${id}`}>
                      <Redacted text={desc} />
                    </p>
                  ))}
                </div>
              </div>
              <p className="my-4 ml-auto text-sm uppercase">{e.timePeriod}</p>
            </div>
            {id !== experience.length - 1 && (
              <hr className="my-4 dark:border-slate-500 md:my-8" />
            )}
          </>
        );
      })}

      <a
        href="/assets/RashiSrivastava-Resume.pdf"
        className="my-4 inline-flex items-center justify-center gap-1 rounded-full border-2 border-current bg-accent px-4 py-2 text-center text-base font-bold tracking-wide text-white transition-all hover:cursor-pointer hover:bg-transparent hover:text-accent dark:border-accent md:my-10"
      >
        Download CV <ArrowDownToLine size={20} />
      </a>
    </section>
  );
};
