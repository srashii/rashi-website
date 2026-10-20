import { NextRequest, NextResponse } from "next/server";
import { UNLOCK_COOKIE, hasValidToken } from "@/lib/unlock-token";

// Design screens, videos and the CV are only served once the passcode has been entered.
const isGated = (path: string) => path.startsWith("/assets/portfolio/") || path.endsWith(".pdf");

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  // next/image fetches the original through /_next/image?url=..., so check the real file too.
  const target = pathname === "/_next/image" ? searchParams.get("url") ?? "" : pathname;
  if (!isGated(target)) return NextResponse.next();
  if (await hasValidToken(request.cookies.get(UNLOCK_COOKIE)?.value)) return NextResponse.next();

  // A visitor opening the CV directly lands on the passcode prompt and then goes back to it.
  if (request.headers.get("accept")?.includes("text/html")) {
    const url = new URL("/", request.url);
    url.searchParams.set("unlock", target);
    return NextResponse.redirect(url);
  }
  return new NextResponse("Locked", { status: 403 });
}

export const config = {
  matcher: ["/assets/:path*", "/_next/image"],
};
