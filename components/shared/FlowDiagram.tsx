import { cn } from "@/lib/cn";

function Node({ label, variant }: { label: string; variant: "hero" | "compact" }) {
  return (
    <div
      className={cn(
        "shrink-0 rounded-lg border border-border-strong bg-bg-elevated/80 px-4 py-2.5 text-center font-mono-tight text-fg md:min-w-0 md:shrink",
        variant === "hero" ? "text-sm sm:text-base" : "text-xs sm:text-sm"
      )}
    >
      {label}
    </div>
  );
}

function Connector({ index }: { index: number }) {
  const delay = `${index * 0.32}s`;
  return (
    <div
      className="flex flex-none items-center justify-center md:min-w-[20px] md:flex-1"
      aria-hidden="true"
    >
      <div className="relative flex h-8 w-px flex-col items-center justify-center md:h-px md:w-full">
        <span className="h-full w-px bg-border-strong md:h-px md:w-full" />
        <span
          className="animate-flow-pulse absolute h-1.5 w-1.5 rounded-full bg-accent md:left-1/2 md:-translate-x-1/2"
          style={{ animationDelay: delay }}
        />
      </div>
    </div>
  );
}

export function FlowDiagram({
  nodes,
  variant = "compact",
  className,
}: {
  nodes: string[];
  variant?: "hero" | "compact";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`System flow: ${nodes.join(" → ")}`}
      className={cn("flex w-full flex-col items-center md:flex-row md:items-center", className)}
    >
      {nodes.flatMap((node, i) => {
        const parts = [<Node key={`n-${i}`} label={node} variant={variant} />];
        if (i < nodes.length - 1) parts.push(<Connector key={`c-${i}`} index={i} />);
        return parts;
      })}
    </div>
  );
}
