import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { ArrowLeft } from "lucide-react";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <a
        href="/blog"
        className="my-4 inline-flex items-center gap-2 rounded-full p-2 px-5 text-sm  uppercase tracking-wide lg:hover:bg-accent lg:hover:text-white"
      >
        <ArrowLeft strokeWidth="1" /> Back to blog
      </a>
      <article className="mb-32 px-5 xl:px-0">
        <h1 className="my-4 font-serif text-5xl  font-bold text-accent md:text-8xl">
          {post.title}
        </h1>
        <p className="text-xl">{post.description}</p>

        <div className="prose mt-5 dark:prose-invert md:prose-xl">
          <Mdx code={post.body.code} />
        </div>
      </article>
    </>
  );
}
