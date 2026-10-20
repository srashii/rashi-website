import Image from "next/image";
import { Children, ReactNode, createElement } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { redactText } from "@/lib/redact";
import { LockedDesigns } from "./locked-designs";

const components = {
  Image,
};

const redactChildren = (children: ReactNode) =>
  Children.map(children, (child) => (typeof child === "string" ? redactText(child) : child));

// Every text-holding tag redacts its own text, so nested ones (a <strong> inside a <p>) are covered too.
const textTags = ["p", "li", "h1", "h2", "h3", "h4", "h5", "h6", "strong", "em", "a", "td", "th", "blockquote", "code", "span", "del"];

const lockedComponents = {
  ...Object.fromEntries(
    textTags.map((tag) => [
      tag,
      ({ children, ...props }: { children?: ReactNode }) => createElement(tag, props, redactChildren(children)),
    ]),
  ),
  Image: LockedDesigns,
  img: LockedDesigns,
};

interface MdxProps {
  code: string;
  locked?: boolean;
}

const Mdx = ({ code, locked = false }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={locked ? lockedComponents : components} />;
};

export { Mdx };
