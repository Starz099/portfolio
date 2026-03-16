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
      className="group block overflow-hidden rounded-xl border border-white/10 bg-black/80 p-5 transition-all duration-300 hover:border-white/20 hover:bg-black"
    >
      <article>
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {props.title}
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              {props.description}
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-1.5 text-base font-medium whitespace-nowrap text-zinc-200 transition-colors group-hover:text-white sm:inline-flex">
            <span>Read more</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4" />
            <span>{formattedDate}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 font-medium text-zinc-300 transition-colors group-hover:text-white sm:hidden">
            <span>Read more</span>
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
