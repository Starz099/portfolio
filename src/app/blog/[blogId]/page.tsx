import { notFound } from "next/navigation";
import { BlogItems } from "@/components/Blogs/constants";
import { blogRegistry } from "@/content/blogs/blog-registry";
import BlogLayout from "@/components/BlogLayout/BlogLayout";

interface Props {
  params: Promise<{ blogId: string }>;
}

export async function generateStaticParams() {
  return BlogItems.map((blog) => ({ blogId: blog.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { blogId } = await params;
  const blog = BlogItems.find((b) => b.slug === blogId);
  if (!blog) return {};
  return { title: blog.title, description: blog.description };
}

export default async function BlogPage({ params }: Props) {
  const { blogId } = await params;

  const meta = BlogItems.find((b) => b.slug === blogId);
  const Content = blogRegistry[blogId];

  if (!meta || !Content) notFound();

  return (
    <BlogLayout {...meta}>
      <Content />
    </BlogLayout>
  );
}
