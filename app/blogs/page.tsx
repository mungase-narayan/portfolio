import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { Heading } from "@/components/kico/ui/heading";
import { LinkedCard } from "@/components/kico/ui/linked-card";
import { Section } from "@/components/kico/ui/section";
import { LandingPageGridEffect } from "@/components/kico/effects/landing-page-grid-effect";
import { blogCategories } from "@/constants";

const Blog = () => {
  return (
    <div className="min-h-screen relative">
      <Section crosses>
        <div className="container md:w-[90%] mx-auto">
          <div className="relative">
            <Heading
              title="Explore Our Latest Blogs"
              text="Data Structure and Algorithms, Web Development, Mobile App Development, AI, Database and DevOps make easy."
              tag="Blogs"
            />
            <BlurEffect className="dark:bg-blue-400" />
          </div>

          <div className="z-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:justify-items-center gap-8">
            {blogCategories.map((category, key) => (
              <LinkedCard src={category.href} key={key}>
                {category.icon}
                <p className="mt-4">{category.category}</p>
              </LinkedCard>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
export default Blog;
