import { CppIcon } from "@/components/icons/cpp";
import { JavascriptIcon } from "@/components/icons/javascript";
import { PythonIcon } from "@/components/icons/python";
import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { Heading } from "@/components/kico/ui/heading";
import { Section } from "@/components/kico/ui/section";
import { TopicCard } from "@/components/kico/ui/topic-card";

const DSAPage = () => {
  return (
    <div className="overflow-hidden relative">
      <Section crosses>
        <div className="container mx-auto md:w-[90%]">
          <div className="relative">
            <Heading
              title="Choose Your Favorite Language and Start Learning"
              tag="languages"
            />
            <BlurEffect />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TopicCard
              icon={<CppIcon className="size-16" />}
              title="CPP"
              description="C++ is a powerful and versatile programming language renowned for its efficiency, flexibility, and performance."
              buttonHref="/blogs/dsa/cpp"
              buttonTitle="Read Blogs"
            />

            <TopicCard
              icon={<JavascriptIcon className="size-16" />}
              title="Javascript"
              description="key features of JavaScript is its ability to add interactivity to web pages. Through JavaScript, developers can manipulate HTML elements, modify CSS styles, and handle user interactions."
              buttonHref="/blogs/dsa/js"
              buttonTitle="Read Blogs"
            />

            <TopicCard
              icon={<PythonIcon className="size-16" />}
              title="Python"
              description=" key features that sets Python apart is its clear and expressive syntax, which emphasizes readability and reduces the cost of program maintenance."
              buttonHref="/blogs/dsa/py"
              buttonTitle="Read Blogs"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DSAPage;
