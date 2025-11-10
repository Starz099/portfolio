import Image from "next/image";

const Skills = () => {
  return (
    <div className="px-2 text-2xl mt-8">
      Skills
      <div className="flex flex-wrap gap-4 mt-4">
        <div className=" text-sm py-1 bg-accent px-2 flex items-center justify-center border border-muted-foreground rounded-xl border-dashed">
          <Image
            src="/logos/typescript.png"
            alt="Typescript"
            width={16}
            height={16}
            className="mr-1 object-contain"
          />
          Typescript
        </div>
      </div>
    </div>
  );
};

export default Skills;
