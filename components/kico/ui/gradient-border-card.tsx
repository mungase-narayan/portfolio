import { cn } from "@/lib/utils";
import { GridEffect } from "@/components/kico/effects/grid-effect";
import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { DotEffect } from "@/components/kico/effects/dot-effect";

type ProjectCardProps = {
  borderGradient?: boolean;
  blurEffect?: boolean;
  gridEffect?: boolean;
  dotEffect?: boolean;
  children: React.ReactNode;
};

export const GradientBorderCard = ({
  borderGradient = false,
  blurEffect,
  gridEffect,
  dotEffect,
  children,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "p-[1px] h-fit rounded-lg",
        borderGradient ? "bg-conic-gradient" : "bg-stroke"
      )}
    >
      <div className="relative bg-card overflow-hidden rounded-lg p-4">
        {blurEffect && <BlurEffect />}
        {dotEffect && <DotEffect />}
        {gridEffect && <GridEffect />}
        {children}
      </div>
    </div>
  );
};
