import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { BlogItems } from "@/components/Blogs/constants";
import Card from "@/components/Blogs/card";
import { getBlogLikeCounts } from "@/lib/blog-likes";

const page = async () => {
  const likesBySlug = await getBlogLikeCounts(
    BlogItems.map((item) => item.slug),
  );

  return (
    <Container className="px-4 py-16 sm:px-6 md:px-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Blogs
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-base sm:text-lg">
            Thoughts, Learnings and Experiences from my journey in software
            development.
          </p>
        </div>
        <Separator />

        {BlogItems.slice()
          .reverse()
          .map((item, index) => (
            <Card
              key={index}
              slug={item.slug}
              title={item.title}
              description={item.description}
              date={item.date}
              likesCount={likesBySlug[item.slug] ?? 0}
            />
          ))}
      </div>
    </Container>
  );
};

export default page;
