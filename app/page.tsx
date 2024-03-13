import Image from "next/image";
import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { Heading } from "@/components/kico/ui/heading";
import { Section } from "@/components/kico/ui/section";
import { PageActionLinks } from "@/components/page-actions";
import { DotEffect } from "@/components/kico/effects/dot-effect";

const Home = () => {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <Section crosses>
        <div className="container sm:w-[90%] mx-auto">
          <div className="relative md:p-6">
            <Heading
              title="Hi, I'am Rushikesh Mungse"
              tag="welcome to my portfolio"
              text="I specialize in creating engaging and user-friendly websites that leave a lasting impression."
              className="mb-6 lg:mb-8"
            />
            <PageActionLinks className="mb-6 lg:mb-10" />
            <BlurEffect className="dark:bg-blue-400 z-0" />
            <DotEffect className="hidden dark:block" />
          </div>

          <div className="relative p-0.5 rounded-2xl bg-conic-gradient z-10">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={"/hero/robot.jpg"}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={100}
                  height={100}
                  alt="AI"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};
export default Home;
