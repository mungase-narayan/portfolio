import { AIIcon } from "@/components/icons/ai";
import { WebIcon } from "@/components/icons/web";
import { DevopsIcon } from "@/components/icons/devops";
import { DatabaseIcon } from "@/components/icons/database";
import { CodeIcon } from "@/components/icons/code";
import { MobileIcon } from "@/components/icons/mobile";
import { DiJsBadge, DiMysql, DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGit, FaGithub } from "react-icons/fa6";

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

export const mySkills = [
  {
    title: "C++",
    icon: (
      <TbBrandCpp className="h-8 w-8 group-hover:scale-110 text-blue-500" />
    ),
  },

  {
    title: "Javascript",
    icon: (
      <DiJsBadge className="h-8 w-8 group-hover:scale-110 text-yellow-500" />
    ),
  },

  {
    title: "Typescript",
    icon: (
      <SiTypescript className="h-8 w-8 group-hover:scale-110 text-blue-500" />
    ),
  },

  {
    title: "Node Js",
    icon: (
      <TbBrandNodejs className="h-8 w-8 group-hover:scale-110 text-green-500" />
    ),
  },

  {
    title: "React Js",
    icon: <DiReact className="h-8 w-8 group-hover:scale-110 text-blue-500" />,
  },

  {
    title: "Next Js",
    icon: <SiNextdotjs className="h-8 w-8 group-hover:scale-110" />,
  },

  {
    title: "Docker",
    icon: <FaDocker className="h-8 w-8 group-hover:scale-110 text-blue-500" />,
  },

  {
    title: "MongoDb",
    icon: (
      <DiMongodb className="h-8 w-8 group-hover:scale-110 text-green-500" />
    ),
  },

  {
    title: "Firebase",
    icon: (
      <IoLogoFirebase className="h-8 w-8 group-hover:scale-110 text-orange-500" />
    ),
  },

  {
    title: "MySql",
    icon: <DiMysql className="h-8 w-8 group-hover:scale-110 text-blue-500" />,
  },

  {
    title: "Tailwindcss",
    icon: (
      <BiLogoTailwindCss className="h-8 w-8 group-hover:scale-110 text-blue-500" />
    ),
  },

  {
    title: "Git",
    icon: <FaGitAlt className="h-8 w-8 group-hover:scale-110 text-pink-500" />,
  },

  {
    title: "GitHub",
    icon: <FaGithub className="h-8 w-8 group-hover:scale-110" />,
  },
];
