import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      <h3 className="mb-1 italic">Blog Posts</h3>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 group"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-center  ">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight w-full underline group-hover:text-neutral-500">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 w-[90px] tabular-nums text-xs pt-0.5">
                {post.metadata.publishedAt}
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-xs pt-0.5">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  );
}
