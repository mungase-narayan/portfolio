import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type LinkedCardProps = {
  disabled?: boolean;
  src: string;
  className?: string;
  children: React.ReactNode;
};

export const LinkedCard = ({
  className,
  src,
  children,
  disabled = false,
  ...props
}: LinkedCardProps) => (
  <Link
    href={src}
    className={cn(
      "flex w-full flex-col cursor-pointer items-center rounded-xl border bg-transparent p-6 text-card-foreground shadow transition-colors hover:bg-muted/20 sm:p-10",
      className
    )}
    {...props}
  >
    {children}
  </Link>
);
LinkedCard.displayName = "LinkedCard";
