import Link from "next/link";
import Card from "./card";
import { BlogItems } from "./constants";
import TextReveal from "../ui/TextReveal";
import { getBlogLikeCounts } from "@/lib/blog-likes";

const Blogs = async () => {
  const likesBySlug = await getBlogLikeCounts(
    BlogItems.slice(0, 3).map((blog) => blog.slug),
  );

  return (
    <div className="px-4" data-nosnippet>
      <TextReveal
        className="mb-8 text-3xl font-semibold tracking-tight"
        delay={100}
      >
        Blog
      </TextReveal>
      <div className="flex flex-col gap-6">
        {BlogItems.slice(0, 3).map((blog, index) => (
          <Card
            key={index}
            {...blog}
            likesCount={likesBySlug[blog.slug] ?? 0}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/blog"
          className="group border-border bg-card text-foreground hover:border-foreground/20 relative inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
        >
          Show all blogs
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
