"use client";

import { Lock } from "lucide-react";
import { Fragment, KeyboardEvent, MouseEvent } from "react";
import { HIDDEN } from "@/lib/redact";
import { openUnlock } from "./unlock";

// A hidden figure is itself the way in: tapping it opens the passcode prompt.
// It is a span, not a button, because it can sit inside a card's link; it stops the link from navigating.
const UnlockChip = () => {
  const open = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openUnlock();
  };
  return (
    <span
      role="button"
      tabIndex={0}
      title="Enter passcode to see this number"
      aria-label="Hidden number. Enter passcode to see it"
      onClick={open}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open(e)}
      className="mx-0.5 inline-flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-md border border-current px-1.5 align-baseline text-[0.9em] font-bold not-italic leading-snug text-accent no-underline transition-colors hover:bg-accent hover:text-white"
    >
      <Lock className="h-[0.75em] w-[0.75em]" strokeWidth={2.5} />
      {HIDDEN}
    </span>
  );
};

// Renders already-redacted text, turning each hidden figure into an unlock chip.
export const Redacted = ({ text }: { text: string }) => {
  if (!text.includes(HIDDEN)) return <>{text}</>;
  return (
    <>
      {text.split(HIDDEN).map((part, i) => (
        <Fragment key={i}>
          {i > 0 && <UnlockChip />}
          {part}
        </Fragment>
      ))}
    </>
  );
};
