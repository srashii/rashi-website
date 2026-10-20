// Locked visitors see the text but not the numbers: every figure becomes "•••".
// Kept, because they say nothing about results: "0 to 1", years (2024 - Present), "8+ years", B2B / P2P,
// 1:1, Fortune 500, school grade ranges and step numbers at the start of a line ("1. Fixed discovery first").
const NUMBER =
  /(\b0 to 1\b|0→1|\b[A-Z]\d[A-Z]\b|\b1:1\b|Fortune 500|grades \d+[–-]\d+|^\d{1,2}\.(?= )|\b(?:19|20)\d{2}\b(?![.,]?\d|%)|\b\d+\+ years)|((?:(?:AED|USD|INR|Rs\.?)\s?|[$₹~≈])*\d+(?:[.,]\d+)*(?:\s?(?:%|[KMBkx]\b|X\b|Mn\b|USD\b|AED\b|million\b|billion\b|lakh\b|crore\b))?(?:\s?[–-]\s?[$₹]?\d+(?:[.,]\d+)*(?:\s?(?:%|[KMB]\b))?)?\+?)/g;

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

const hasHidden = (text: string) => redactText(text) !== text;

// Page titles and link previews never show "•••": keep the leading clauses with no figures in them
// ("Live classes, from ~10K to ~200K paid students" → "Live classes"), or the sentences with none.
export const titleWithoutNumbers = (text: string) => {
  const clauses = text.split(/,\s|:\s|\s[–-]\s/);
  const kept = clauses.slice(0, clauses.findIndex(hasHidden) === -1 ? undefined : clauses.findIndex(hasHidden));
  return kept.length ? kept.join(", ") : redactText(text);
};

export const sentencesWithoutNumbers = (text: string) =>
  (text.match(/[^.!?]+[.!?]*/g) ?? [])
    .filter((s) => !hasHidden(s))
    .join("")
    .trim();
