"use client";

import { PageActions } from "@/components/page-header";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/kico/ui/button";
import { useRouter } from "next/navigation";

export const PageActionLinks = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <PageActions className={cn("relative", className)}>
      <a
        href={siteConfig.links.linkedin}
        target="_blank"
        className="cursor-pointer"
      >
        <Button>Let&apos;s Connect</Button>
      </a>

      <Button onClick={() => router.push("/blogs")}>Check Blogs</Button>
    </PageActions>
  );
};
