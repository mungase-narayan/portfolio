import React from "react";
import { brackets } from "@/components/icons/bracketes";
import { cn } from "@/lib/utils";

export const TagLine = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("tagline flex items-center", className)}>
      {brackets("left")}
      <div className="mx-3 text-sm">{children}</div>
      {brackets("right")}
    </div>
  );
};

type HeadingProps = {
  title?: string;
  text?: string;
  tag?: string;
  underline?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Heading = ({
  className,
  title,
  text,
  tag,
  underline,
}: HeadingProps) => {
  return (
    <div
      className={cn(
        "max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center",
        className
      )}
    >
      {tag && (
        <TagLine className="mb-4 md:justify-center text-xs sm:text-md">
          {tag}
        </TagLine>
      )}
      {title && (
        <h2
          className={cn(
            underline &&
              "pb-2 border-b-2 border-active w-fit md:pb-0 md:border-none md:w-full",
            "h2"
          )}
        >
          {title}
        </h2>
      )}
      {text && <p className="body-2 mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
};
