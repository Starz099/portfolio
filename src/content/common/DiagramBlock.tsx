import Image from "next/image";

type DiagramBlockProps = {
  src: string;
  alt: string;
  caption: string;
};

export const DiagramBlock = ({ src, alt, caption }: DiagramBlockProps) => {
  return (
    <figure className="border-border bg-muted/40 space-y-3 overflow-hidden rounded-2xl border p-3 sm:p-4">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="border-border bg-background h-auto w-full rounded-xl border object-cover"
      />
      <figcaption className="text-muted-foreground text-sm leading-6 sm:text-base">
        {caption}
      </figcaption>
    </figure>
  );
};
