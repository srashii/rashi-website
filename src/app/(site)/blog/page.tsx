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
      <p className="text-xl">Thoughts on building products, learning experiences, and insights on both real-world and imaginative product case studies.</p>

      <ul className="my-4 min-h-screen max-w-screen-md">
        {articles.map((article) => (
          <li className="my-10" key={article._id}>
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
                <p className="text-lg">{article.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
