import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export default function Blog() {
  const articles = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="px-5 xl:px-0">
      <h1 className="my-4 font-serif text-5xl  font-bold text-accent md:text-8xl">
        My Product Journal
      </h1>
      <p className="text-xl">
        Thoughts on building products, learning experiences, and insights on
        both real-world and imaginative product case studies.
      </p>

      <ul className="my-4 min-h-screen">
        {articles.map((article) => (
          <li
            className="group relative my-10 flex w-full transform items-center justify-between rounded-lg border p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            key={article._id}
          >
            <Link
              href={`/blog/${article.slugAsParams}`}
              className="my-4 items-center gap-4 md:my-5  md:flex md:py-3"
            >
              <div>
                <h3 className="my-2 text-xl font-bold">{article.title}</h3>
                <time
                  dateTime={article.date}
                  className="mb-4 block text-xs text-gray-600"
                >
                  {format(parseISO(article.date), "LLLL d, yyyy")}
                </time>
                <p className="line-clamp-2 text-lg">{article.description}</p>
              </div>
            </Link>
            <a
              href={`/blog/${article.slugAsParams}`}
              className="ml-12 mr-4 flex min-w-[150px] items-center justify-center gap-2 rounded-lg p-2 transition-colors lg:bg-accent lg:text-white"
            >
              <p className="text-base">Read more</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
