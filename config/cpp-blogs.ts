import { SidebarNavItem } from "@/types/nav";

type BlogsConfigType = {
  sidebarNav: SidebarNavItem[];
};

const cppBlogConfig: BlogsConfigType = {
  sidebarNav: [
    {
      title: "CPP Overview",
      items: [
        {
          title: "Introduction",
          href: "/blogs/dsa/cpp/introduction",
          items: [],
        },
      ],
    },
  ],
};

export default cppBlogConfig;
