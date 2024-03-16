import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdOutlineArrowCircleRight } from "react-icons/md";

type ButtonLinkProps = {
  className?: string;
  buttonHref: string;
  buttonTitle: string;
};

export const ButtonLink = ({
  className,
  buttonHref,
  buttonTitle,
}: ButtonLinkProps) => {
  return (
    <Link
      href={buttonHref}
      className={cn(
        "group w-fit flex items-center space-x-3 outline-none border border-foreground/50 rounded-lg bg-transparent px-7 py-2 font-thin text-xs tracking-wider text-foreground/90 hover:text-foreground transition-all",
        className
      )}
    >
      <span>{buttonTitle}</span>
      <span className="group-hover:translate-x-1">
        <MdOutlineArrowCircleRight className="size-4" />
      </span>
    </Link>
  );
};
