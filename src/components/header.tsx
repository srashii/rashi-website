import {
  BadgeCheckIcon,
  NotebookPen,
  PaintBucket,
  Pen,
  Pencil,
  User,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/site.config";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white  px-5 py-5 transition-all dark:bg-slate-800 md:mt-5 xl:px-0">
      <a
        className="text-md flex items-center gap-1 font-bold uppercase text-accent transition-all md:hover:scale-125"
        href="/"
      >
        {siteConfig.header.logoName}{" "}
        <BadgeCheckIcon
          size={18}
          className="fill-green-600 stroke-white dark:stroke-slate-800"
        />
      </a>
      <div className="ml-auto flex  md:gap-5">
        <a
          href="/blog"
          className="flex items-center justify-end gap-2 whitespace-nowrap rounded-lg p-2 transition-colors lg:hover:bg-accent lg:hover:text-white"
        >
          <NotebookPen size={16} />
          <span className="text-xs md:text-base">My Product Journal</span>
        </a>

        <a
          href="/about"
          className="flex  items-center justify-end gap-1 rounded-lg p-2 transition-colors  md:gap-2 lg:hover:bg-accent lg:hover:text-white"
        >
          <User size={16} />
          <span className="text-xs md:text-base">About</span>
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
};

export { Header };
