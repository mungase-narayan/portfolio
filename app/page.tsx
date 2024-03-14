import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { Heading } from "@/components/kico/ui/heading";
import { Section } from "@/components/kico/ui/section";
import { PageActionLinks } from "@/components/page-actions";
import { LightBGAnimation } from "@/components/kico/animations/light-bg-animation";
import { DotEffect } from "@/components/kico/effects/dot-effect";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { WebIcon } from "@/components/icons/web";
import { MobileIcon } from "@/components/icons/mobile";
import { CodeIcon } from "@/components/icons/code";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ProjectCard } from "@/components/kico/ui/project-card";
import { ButtonLink } from "@/components/kico/ui/button-link";
import LineAnimation from "@/components/kico/animations/line-animation";

import { mySkills } from "@/constants";

const Home = () => {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <Section crosses>
        <div className="container sm:w-[90%] mx-auto">
          <div className="pb-10 md:pb-0 relative md:p-6">
            <Heading
              title="Hi, I'am Rushikesh Mungse"
              tag="welcome to my portfolio"
              text="I specialize in creating engaging and user-friendly websites that leave a lasting impression."
              className="mb-6 lg:mb-8"
              underline
            />
            <PageActionLinks className="mb-6 lg:mb-10" />
            <BlurEffect className="dark:bg-blue-400 z-0" />
          </div>

          <div className="md:flex items-center flex-col space-y-8 md:flex-row md:space-y-0 gap-8">
            <div className="glass-effect overflow-hidden">
              <Image
                src={"/assets/leetcode.png"}
                className="border rounded-2xl p-3 bg-[#17171E]"
                width={900}
                height={100}
                alt="AI"
              />
            </div>

            <div className="relative md:flex items-center justify-center flex-col md:p-10">
              <BlurEffect />
              <LineAnimation
                lines={["bottom", "left", "top", "right"]}
                linePosition={10}
                className="hidden md:block"
              />

              <Heading
                tag="CP"
                title="Competitive Programming Profile"
                className="mb-0 lg:mb-0"
              />

              <Link
                href={siteConfig.links.leetcode}
                className={cn(
                  "flex items-center space-x-4 mt-8",
                  buttonVariants()
                )}
              >
                <span>Leetcode Coding Profile</span>
                <MdOutlineArrowCircleRight />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section crosses topBorder>
        <LightBGAnimation className="absolute left-0" />
        <LightBGAnimation className="absolute right-0" />
        <div className="container sm:w-[90%] mx-auto">
          <Heading title="About Me" underline />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center lg:px-[4rem]">
            <div className="relative">
              <div className="rounded-[50%] h-[300px] w-[300px] overflow-hidden bg-[#682bb3] backdrop-blur-sm z-10">
                <Image
                  src={"/assets/rushi-mungse.png"}
                  alt="rushi-mungse"
                  height={500}
                  width={500}
                />
              </div>
            </div>

            <div className="relative px-[2rem] lg:px-0">
              <Heading tag="full stack developer" className="mb-2 lg:mb-2" />

              <ul className="list-disc space-y-4">
                <li className="body-2 text-md">
                  I&apos;m a results-driven{" "}
                  <span className="text-gradient">
                    Full Stack Web Developer
                  </span>{" "}
                  and passionate{" "}
                  <span className="text-gradient">Competitive Programmer</span>,
                  dedicated to creating robust and efficient solutions for
                  real-world challenges. I am also proficient in a variety of
                  front-end development technologies, using Modern frameworks.
                </li>

                <li className="body-2 text-md">
                  My mission is to{" "}
                  <span className="text-gradient">design and develop</span> a
                  website that you and your audience love.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section crosses topBorder>
        <div className="container md:w-[90%] mx-auto">
          <Heading title="Projects" underline />
          <div className="flex items-center justify-center gap-8 pb-20 flex-wrap">
            <ProjectCard
              className="max-w-[600px]"
              tag="Jan 2024"
              src="/assets/tv.png"
              title="Kico ui component Library."
              description="Beautifully designed components that you can copy and paste into your apps. Build complex components easy and responsive."
              status="inProgress"
              borderGradient
              leftButton={{
                title: "Website",
                href: "https://ui-zeta-nine.vercel.app/",
              }}
              rightButton={{
                title: "GitHub",
                href: "https://ui-zeta-nine.vercel.app/",
              }}
            />

            <ProjectCard
              className="max-w-[600px]"
              tag="Jan 2024"
              src="/assets/tv.png"
              title="Kico ui component Library."
              description="Beautifully designed components that you can copy and paste into your apps. Build complex components easy and responsive."
              status="inProgress"
              borderGradient
              leftButton={{
                title: "Website",
                href: "https://ui-zeta-nine.vercel.app/",
              }}
              rightButton={{
                title: "GitHub",
                href: "https://ui-zeta-nine.vercel.app/",
              }}
            />
          </div>
        </div>
      </Section>

      <Section crosses topBorder>
        <div className="container md:w-[90%] mx-auto">
          <Heading title="Skills" underline />
          <div className="flex items-center justify-center flex-wrap gap-6">
            {mySkills.map((skill) => (
              <span
                key={skill.title}
                className="group glass-effect rounded-full md:rounded-lg p-3 flex items-center justify-center w-fit cursor-pointer transition-all"
              >
                {skill.icon}
                <p className="hidden md:block text-sm font-thin pl-3">
                  {skill.title}
                </p>
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section crosses topBorder>
        <div className="container sm:w-[90%] mx-auto">
          <Heading title="Quick and beautiful web design" underline />

          <div className="flex flex-wrap gap-12 items-center justify-center">
            <div className="max-w-[350px] glass-effect">
              <div className="flex items-center justify-center">
                <div className="relative bg-foreground/95 supports-[backdrop-filter]:bg-foreground/5 w-full h-32 backdrop-blur rounded-2xl border border-foreground/20 flex items-center justify-center">
                  <DotEffect />
                  <div className="relative bg-foreground/95 supports-[backdrop-filter]:bg-foreground/5 w-[75%] h-16 backdrop-blur rounded-2xl border border-foreground/20"></div>
                </div>
              </div>
              <h6 className="h6 text-foreground py-4">
                Modular Design Systems
              </h6>
              <p className="text-foreground text-sm font-thin pb-6">
                Explore the art of building salable, cohesive design systems
                that streamline UI development and enhance team collaboration.
              </p>

              <ButtonLink
                buttonTitle="Learn More"
                buttonHref="#"
                className=""
              />
            </div>

            <div className="max-w-[550px] glass-effect">
              <BlurEffect />

              <div className="z-10">
                <h6 className="h6 text-foreground">
                  UI Kits: Bridging Design and Code
                </h6>

                <p className="text-foreground text-sm font-thin py-4">
                  An in-depth guide to understanding the core principles,
                  structures, and benefits of well-organized design systems in
                  digital products.
                </p>

                <ButtonLink
                  buttonTitle="Documentation"
                  buttonHref="#"
                  className="mb-8"
                />

                <Image
                  src={"/assets/ui-kit.png"}
                  width={500}
                  height={60}
                  alt="video"
                />
              </div>
            </div>

            <div className="max-w-[550px] glass-effect">
              <BlurEffect />

              <div className="z-10">
                <Image
                  src={"/assets/effective-design.png"}
                  width={500}
                  height={60}
                  alt="video"
                />

                <h6 className="h6 text-foreground py-4">
                  The Anatomy of Effective Design Systems
                </h6>

                <p className="text-foreground text-sm font-thin mb-8">
                  Uncover the secrets of seamlessly integrating UI kits into
                  your development workflow, enhancing both design quality and
                  coding efficiency.
                </p>

                <ButtonLink buttonTitle="Documentation" buttonHref="#" />
              </div>
            </div>

            <div className="max-w-[350px] glass-effect">
              <h6 className="h6 text-foreground">Modular Design Systems</h6>

              <p className="text-foreground text-sm font-thin py-4">
                Explore the art of building salable, cohesive design systems
                that streamline UI development and enhance team collaboration.
              </p>

              <ButtonLink
                buttonTitle="Components"
                buttonHref="#"
                className="mb-8"
              />

              <div className="flex items-center justify-center">
                <div className="relative bg-foreground/95 supports-[backdrop-filter]:bg-foreground/5 w-full h-32 backdrop-blur rounded-2xl border border-foreground/20 flex items-center justify-around">
                  <DotEffect />
                  <CodeIcon className="h-10 text-blue-500 w-10" />
                  <WebIcon className="h-10 text-pink-500 w-10" />
                  <MobileIcon className="h-10 text-orange-500 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};
export default Home;
