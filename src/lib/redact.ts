// Locked visitors see the text but not the numbers: every figure becomes "•••".
// Kept: "0 to 1", years (2024 - Present) and "8+ years", which say nothing about results.
const NUMBER =
  /(\b0 to 1\b|0→1|\b(?:19|20)\d{2}\b(?![.,]?\d|%)|\b\d+\+ years)|((?:(?:AED|USD|INR|Rs\.?)\s?|[$₹~≈])*\d+(?:[.,]\d+)*(?:\s?(?:%|[KMBkx]\b|X\b|Mn\b|USD\b|AED\b|million\b|billion\b|lakh\b|crore\b))?(?:\s?[–-]\s?[$₹]?\d+(?:[.,]\d+)*(?:\s?(?:%|[KMB]\b))?)?\+?)/g;

export const HIDDEN = "•••";

export const redactText = (text: string) =>
  text.replace(NUMBER, (match, keep: string | undefined) => keep ?? HIDDEN);

// Redacts every string inside a value (objects, arrays), leaving its shape alone.
export function redactDeep<T>(value: T): T {
  if (typeof value === "string") return redactText(value) as T;
  if (Array.isArray(value)) return value.map(redactDeep) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, redactDeep(v)])) as T;
  }
  return value;
}
