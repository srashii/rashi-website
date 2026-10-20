import { cookies } from "next/headers";
import { UNLOCK_COOKIE, hasValidToken } from "./unlock-token";

// True when this visitor has entered the passcode. Reading cookies makes the page render per request.
export async function isUnlocked() {
  return hasValidToken(cookies().get(UNLOCK_COOKIE)?.value);
}
