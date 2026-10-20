import { Lock } from "lucide-react";
import { UnlockButton } from "./unlock";

// Stands in for design screens, videos and Figma files while the site is locked.
export const LockedDesigns = () => (
  <div className="not-prose flex min-h-64 flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center text-slate-600 dark:border-slate-500 dark:text-slate-300">
    <Lock size={28} strokeWidth={1.5} />
    <p className="text-base font-semibold">Designs are hidden</p>
    <p className="max-w-sm text-sm">Enter the passcode to see the screens, videos and numbers for this case.</p>
    <UnlockButton />
  </div>
);
