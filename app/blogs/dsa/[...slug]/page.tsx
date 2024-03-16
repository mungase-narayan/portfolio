import Link from "next/link";
import { notFound } from "next/navigation";
import { allCppBlogs } from "contentlayer/generated";
import type { Metadata, ResolvingMetadata } from "next";
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { getTableOfContents } from "@/lib/toc";

import Mdx from "@/components/mdx";
import { DashboardTableOfContents } from "@/components/toc";
import { DocsPager } from "@/components/pager";
import { badgeVariants } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

type BlogsParams = {
  params: {
    slug: string[];
  };
};

const getComponetFromParams = async ({ params }: BlogsParams) => {
  const slug = params.slug.join("/");
  const blog = allCppBlogs.find((blog) => blog.slug === slug);
  return blog ? blog : null;
};

export async function generateMetadata(
  { params }: BlogsParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await getComponetFromParams({ params });
  if (!blog)
    return { title: `${params.slug[0]} : ${params.slug.slice(1).join(" ")}` };
  return {
    title: params.slug[0].toLocaleUpperCase() + " : " + blog.title,
    description: blog?.description,
  };
}

const DsaPage = async ({ params }: BlogsParams) => {
  const blog = await getComponetFromParams({ params });
  if (!blog) return <h1>No blog found!</h1>;
  const toc = await getTableOfContents(blog.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="truncate">blogs</div>
          <ChevronRightIcon className="size-4" />
          <div className="font-medium text-foreground">{blog.breadcrumb}</div>
        </div>
        <div className="space-y-2">
          <h1
            className={cn(
              "scroll-m-20 text-xl md:text-3xl lg:text-4xl font-bold tracking-tight"
            )}
          >
            {blog.title}
          </h1>
          {blog.description && (
            <p className="text-sm mt-2 text-muted-foreground">
              {blog.description}
            </p>
          )}
        </div>

        {blog.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {blog.links?.doc && (
              <Link
                href={blog.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Docs
                <ExternalLinkIcon className="size-3" />
              </Link>
            )}
            {blog.links?.api && (
              <Link
                href={blog.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                API Reference
                <ExternalLinkIcon className="size-3" />
              </Link>
            )}
          </div>
        ) : null}

        <div className="pb-12 pt-8">
          <Mdx code={blog.body.code} />{" "}
        </div>
        <DocsPager doc={blog} />
      </div>
      {blog.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  );
};

export default DsaPage;
