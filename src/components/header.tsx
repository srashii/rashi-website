import {
  BriefcaseBusiness,
  NotebookPen,
  PaintBucket,
  Pen,
  Pencil,
  User,
} from "lucide-react";
import { Suspense } from "react";
import { ThemeToggle } from "./theme-toggle";
import { UnlockControl } from "./unlock";
import { isUnlocked } from "@/lib/lock";
import { siteConfig } from "@/site.config";

const Header = async () => {
  const unlocked = await isUnlocked();
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white  px-5 py-5 transition-all dark:bg-slate-800 md:mt-5 xl:px-0">
      <a
        className="text-md flex items-center gap-1 font-bold uppercase text-accent transition-all md:hover:scale-125"
        href="/"
      >
        {siteConfig.header.logoName}
      </a>
      <div className="ml-auto flex  md:gap-5">
        <a
          href="/portfolio"
          className="flex items-center justify-end gap-2 whitespace-nowrap rounded-lg p-2 transition-colors lg:hover:bg-accent lg:hover:text-white"
        >
          <BriefcaseBusiness size={16} />
          <span className="text-xs md:text-base">Portfolio</span>
        </a>
        <a
          href="/blog"
          className="flex items-center justify-end gap-2 whitespace-nowrap rounded-lg p-2 transition-colors lg:hover:bg-accent lg:hover:text-white"
        >
          <NotebookPen size={16} />
          <span className="text-xs md:hidden">Journal</span>
          <span className="hidden md:inline md:text-base">My Product Journal</span>
        </a>

        <a
          href="/about"
          className="flex  items-center justify-end gap-1 rounded-lg p-2 transition-colors  md:gap-2 lg:hover:bg-accent lg:hover:text-white"
        >
          <User size={16} />
          <span className="text-xs md:text-base">About</span>
        </a>

        <Suspense>
          <UnlockControl unlocked={unlocked} />
        </Suspense>
        <ThemeToggle />
      </div>
    </header>
  );
};

export { Header };
