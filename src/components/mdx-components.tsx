import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export { Mdx };
