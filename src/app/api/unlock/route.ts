import { NextResponse } from "next/server";
import { UNLOCK_COOKIE, expectedToken, normalizePasscode, unlockToken } from "@/lib/unlock-token";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function POST(request: Request) {
  const { passcode } = await request.json().catch(() => ({ passcode: "" }));
  const expected = await expectedToken();
  // Says whether the server has a passcode at all, so a missing variable isn't mistaken for a wrong passcode.
  if (!expected) {
    return NextResponse.json({ ok: false, reason: "not-configured" }, { status: 503 });
  }

  const token = await unlockToken(normalizePasscode(String(passcode ?? "")));

  if (token !== expected) {
    // Slow down guessing.
    await new Promise((resolve) => setTimeout(resolve, 800));
    return NextResponse.json({ ok: false, reason: "incorrect" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(UNLOCK_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: THIRTY_DAYS,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(UNLOCK_COOKIE);
  return response;
}
