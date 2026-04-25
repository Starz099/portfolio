type HighlightPathProps = {
  path: string;
};

export const HighlightPath = ({ path }: HighlightPathProps) => {
  return (
    <strong className="text-foreground inline max-w-full align-baseline leading-none font-medium">
      <span className="bg-muted text-foreground inline-block max-w-full rounded px-1.5 py-0 align-baseline text-xs leading-6 break-all sm:text-sm">
        {path}
      </span>
    </strong>
  );
};
