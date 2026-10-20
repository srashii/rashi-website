import type { Project } from "contentlayer/generated";
import { redactText } from "./redact";

// Only what a portfolio card needs, so case-study bodies never reach the browser through card props.
export type CardProject = Pick<
  Project,
  "_id" | "slugAsParams" | "title" | "company" | "problem" | "result" | "tags" | "stage" | "endToEnd" | "cover" | "media"
> & { locked?: boolean };

export const toCard = (p: Project, locked: boolean): CardProject => {
  const card = {
    _id: p._id,
    slugAsParams: p.slugAsParams,
    title: p.title,
    company: p.company,
    problem: p.problem,
    result: p.result,
    tags: p.tags,
    stage: p.stage,
    endToEnd: p.endToEnd,
    cover: p.cover,
    media: p.media,
  };
  if (!locked) return card;
  return {
    ...card,
    title: redactText(card.title),
    problem: redactText(card.problem),
    result: card.result && redactText(card.result),
    tags: card.tags?.map(redactText),
    cover: undefined,
    media: undefined,
    locked: true,
  };
};
