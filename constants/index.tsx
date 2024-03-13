import { AIIcon } from "@/components/icons/ai";
import { WebIcon } from "@/components/icons/web";
import { DevopsIcon } from "@/components/icons/devops";
import { DatabaseIcon } from "@/components/icons/database";
import { CodeIcon } from "@/components/icons/code";
import { MobileIcon } from "@/components/icons/mobile";

export const blogCategories = [
  {
    category: "Data Structure and Algorithm",
    icon: <CodeIcon className="h-10" />,
    href: "/blogs/dsa",
  },
  {
    category: "Web Development",
    icon: <WebIcon className="h-10" />,
    href: "/blogs/web-development",
  },
  {
    category: "App Development",
    icon: <MobileIcon className="h-10" />,
    href: "/blogs/app-development",
  },
  {
    category: "Artificial Intelligence",
    icon: <AIIcon className="h-10" />,
    href: "/blogs/ai",
  },
  {
    category: "Database",
    icon: <DatabaseIcon className="h-10" />,
    href: "/blogs/database",
  },
  {
    category: "DevOps",
    icon: <DevopsIcon className="h-10" />,
    href: "/blogs/devops",
  },
];
