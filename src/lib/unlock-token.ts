// Shared by middleware (edge) and server code, so it only uses Web Crypto.
export const UNLOCK_COOKIE = "srashi_unlock";

// The cookie holds a hash of the passcode, never the passcode itself.
export async function unlockToken(passcode: string) {
  const data = new TextEncoder().encode(`srashi-unlock:${passcode}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

// The passcode lives in the SITE_PASSCODE environment variable (set in Vercel), not in this public repo.
// Without it the site stays locked.
// Typed values often pick up spaces, a newline or quotes, so those are ignored on both sides.
export const normalizePasscode = (value: string) => value.trim().replace(/^["']|["']$/g, "").trim();

export async function expectedToken() {
  const passcode = normalizePasscode(process.env.SITE_PASSCODE ?? "");
  return passcode ? unlockToken(passcode) : null;
}

export async function hasValidToken(value: string | undefined) {
  const expected = await expectedToken();
  return !!expected && value === expected;
}
