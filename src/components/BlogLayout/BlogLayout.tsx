import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import ShareButton from "@/components/BlogLayout/ShareButton";

export interface BlogLayoutProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTimeMinutes?: number;
  children: React.ReactNode;
}

const BlogLayout = ({
  title,
  description,
  date,
  readingTimeMinutes,
  children,
}: BlogLayoutProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Container className="px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between sm:mb-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="size-4" />
            All posts
          </Link>

          <ShareButton />
        </div>

        {/* Header */}
        <header className="mb-6 space-y-4 sm:mb-8 sm:space-y-5">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
            {description}
          </p>

          {/* Meta row */}
          <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm sm:gap-4">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="size-4" />
              <span>{formattedDate}</span>
            </div>
            {readingTimeMinutes && (
              <div className="flex items-center gap-1.5">
                <Clock className="size-4" />
                <span>{readingTimeMinutes} min read</span>
              </div>
            )}
          </div>
        </header>

        <Separator className="mb-8 sm:mb-10" />

        {/* Blog content — authors write here */}
        <div className="prose prose-invert prose-zinc prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-white prose-a:underline-offset-4 prose-code:rounded prose-code:bg-zinc-800 prose-code:px-1 prose-code:py-0.5 prose-code:text-sm prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 max-w-none">
          {children}
        </div>
      </div>
    </Container>
  );
};

export default BlogLayout;
