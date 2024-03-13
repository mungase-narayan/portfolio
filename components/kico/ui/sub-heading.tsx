import { cn } from "@/lib/utils";

type SubHeadingProps = {
  subHeading: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const SubHeading = ({
  subHeading,
  className,
  ...props
}: SubHeadingProps) => {
  return (
    <h5 className={cn("h5 py-4 md:py-6 xl:py-10", className)} {...props}>
      {subHeading}
    </h5>
  );
};
