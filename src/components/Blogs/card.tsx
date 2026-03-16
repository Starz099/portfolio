import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const Card = (props: BlogCardProps) => {
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${props.slug}`}
      aria-label={`Read blog: ${props.title}`}
      className="group bg-background/80 hover:border-foreground/20 border-border hover:bg-background block overflow-hidden rounded-xl border px-5 py-3.5 transition-all duration-300"
    >
      <article>
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-foreground text-lg font-semibold tracking-tight sm:text-xl">
              {props.title}
            </h2>
            <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
              {props.description}
            </p>
          </div>

          <div className="text-muted-foreground group-hover:text-foreground hidden shrink-0 items-center gap-1.5 text-sm font-medium whitespace-nowrap transition-colors sm:inline-flex">
            <span>Read more</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div className="text-muted-foreground border-border mt-3 flex items-center justify-between border-t pt-2.5 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4" />
            <span>{formattedDate}</span>
          </div>

          <div className="text-muted-foreground group-hover:text-foreground inline-flex items-center gap-1.5 font-medium transition-colors sm:hidden">
            <span>Read more</span>
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
