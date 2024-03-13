import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type LinkedCardProps = {
  disabled?: boolean;
} & React.ComponentProps<typeof Link>;

export const LinkedCard = ({
  className,
  disabled = false,
  ...props
}: LinkedCardProps) => (
  <Button
    disabled={disabled}
    className="size-full bg-transparent hover:bg-transparent relative shadow-none border-none outline-none"
  >
    {disabled && (
      <Badge className="absolute top-6 left-8 bg-green-500/15 text-green-500">
        Planned
      </Badge>
    )}
    <Link
      className={cn(
        "flex w-full flex-col items-center rounded-xl border bg-transparent p-6 text-card-foreground shadow transition-colors hover:bg-muted/20 sm:p-10",
        className
      )}
      {...props}
    />
  </Button>
);
LinkedCard.displayName = "LinkedCard";
