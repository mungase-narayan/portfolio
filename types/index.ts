import { SidebarNavItem } from "@/types/nav";

export type LanguageType = "cpp" | "js" | "py";

export type BlogsConfigType = {
  sidebarNav: SidebarNavItem[];
};

export type DSABlogConfigsType = {
  [key: string]: BlogsConfigType;
};
