"use client";

import { Lock, LockOpen, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";

const OPEN_EVENT = "open-unlock";

// Only follow same-site paths after unlocking (e.g. back to the CV).
const safeNext = (value: string | null) => (value && value.startsWith("/") && !value.startsWith("//") ? value : null);

// Every unlock button on the page opens the one dialog in the header.
export const openUnlock = () => window.dispatchEvent(new Event(OPEN_EVENT));

export const UnlockButton = ({ label = "Enter passcode", small = false }: { label?: string; small?: boolean }) => (
  <button
    type="button"
    onClick={openUnlock}
    className={`inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent font-bold text-white transition-colors hover:bg-transparent hover:text-accent ${small ? "px-3 py-1 text-xs" : "px-5 py-2 text-sm"}`}
  >
    <Lock size={small ? 12 : 16} /> {label}
  </button>
);

export const UnlockControl = ({ unlocked }: { unlocked: boolean }) => {
  const router = useRouter();
  const params = useSearchParams();
  const [open, setOpen] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const next = safeNext(params.get("unlock"));

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  // Arriving from a locked link (?unlock=/assets/...) opens the prompt straight away.
  useEffect(() => {
    if (params.has("unlock") && !unlocked) setOpen(true);
  }, [params, unlocked]);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const result: { ok: boolean; reason?: string } = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passcode }),
    })
      .then((res) => res.json())
      .catch(() => ({ ok: false, reason: "network" }));
    setBusy(false);
    if (!result.ok) {
      setError(
        result.reason === "not-configured"
          ? "Unlocking isn't switched on for this site yet."
          : result.reason === "network"
            ? "Couldn't reach the site. Please try again."
            : "That passcode is incorrect. You can keep browsing without it.",
      );
      setPasscode("");
      return;
    }
    setOpen(false);
    setPasscode("");
    if (next) window.location.assign(next);
    else router.refresh();
  };

  const lock = async () => {
    await fetch("/api/unlock", { method: "DELETE" });
    router.refresh();
  };

  return (
    <>
      <button
        type="button"
        onClick={unlocked ? lock : () => setOpen(true)}
        title={unlocked ? "Hide numbers and designs again" : "Enter passcode to see numbers and designs"}
        aria-label={unlocked ? "Lock" : "Unlock"}
        className="flex items-center gap-2 whitespace-nowrap rounded-lg p-2 transition-colors lg:hover:bg-accent lg:hover:text-white"
      >
        {unlocked ? <LockOpen size={16} /> : <Lock size={16} />}
        <span className="hidden md:inline md:text-base">{unlocked ? "Lock" : "Unlock"}</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 px-4"
          onClick={() => setOpen(false)}
        >
          <form
            onSubmit={submit}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-slate-500 hover:text-accent"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold">Enter passcode</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Numbers, designs and the CV are visible with a passcode.
            </p>
            <input
              ref={input}
              type="password"
              inputMode="numeric"
              autoComplete="off"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              aria-label="Passcode"
              className="mt-4 w-full rounded-lg border-2 border-slate-300 bg-transparent px-4 py-3 text-lg tracking-widest focus:border-accent focus:outline-none dark:border-slate-500"
            />
            {error && (
              <p role="alert" className="mt-2 text-sm font-semibold text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={busy || !passcode}
              className="mt-4 w-full rounded-full border-2 border-accent bg-accent px-5 py-3 font-bold text-white transition-colors hover:bg-transparent hover:text-accent disabled:opacity-60"
            >
              {busy ? "Checking…" : "Unlock"}
            </button>
            <p className="mt-4 text-center text-sm text-slate-600 dark:text-slate-300">
              Don&apos;t have a passcode?{" "}
              <a href={siteConfig.socialLinks.email} className="font-semibold text-accent underline">
                Email me
              </a>
            </p>
          </form>
        </div>
      )}
    </>
  );
};
