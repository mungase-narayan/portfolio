import { SidebarNavItem } from "@/types/nav";

type BlogsConfigType = {
  sidebarNav: SidebarNavItem[];
};

const jsBlogConfig: BlogsConfigType = {
  sidebarNav: [
    {
      title: "JS Overview",
      items: [
        {
          title: "Introduction",
          href: "/blogs/dsa/js/introduction",
          items: [],
        },
      ],
    },
  ],
};

export default jsBlogConfig;
