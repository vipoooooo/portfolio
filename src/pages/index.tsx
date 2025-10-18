import clsx from "clsx";
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DynamicLink, Digit } from "y/components/dynamic_link";
import { ProjectCard, projectSummaries } from "y/features/projects";
import DefaultLayout from "y/layouts/default";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DefaultLayout>
      <main className="relative z-10 grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-4">
          <nav className="sticky top-6 z-20 md:top-8">
            <div className="ease-[cubic-bezier(0.22, 1, 0.36, 1)] relative h-[48px] w-[48px] hover:cursor-help hover:opacity-[.9]">
              <span className="absolute inset-0 block">
                <Image src="/me.png" alt="Me" width={48} height={48} />
              </span>
            </div>
          </nav>
        </div>
        <p
          className={clsx(
            "col-span-12 md:col-span-8 md:col-start-5 lg:col-start-5 lg:col-span-8",
            "select-none gap-6 pt-2 text-zinc-100 md:columns-2"
          )}
        >
          Po designs interfaces for humans. He thrives in complex, ambiguous
          problem spaces. He studied Computer Science at{" "}
          <DynamicLink
            title="Kasem Bundit University"
            url="https://kbu.ac.th/"
          />{" "}
          <Digit digit="1" /> and has worked at places like{" "}
          <DynamicLink title="Edemy" url="https://www.edemy.org/" />{" "}
          <Digit digit="2" />,{" "}
          <DynamicLink
            title="Ministry of Economy and Finance"
            url="https://mef.gov.kh/"
          />{" "}
          <Digit digit="3" />,{" "}
          <DynamicLink
            title="Melon Rouge Agency"
            url="https://melonrouge.asia/"
          />{" "}
          <Digit digit="4" />, and{" "}
          <DynamicLink
            title="Smart Axiata"
            url="https://www.smart.com.kh/km"
          />{" "}
          <Digit digit="5" />. He is currently a UXUI Designer at{" "}
          <DynamicLink title="ABA Bank" url="https://www.ababank.com/" />{" "}
          <Digit digit="6" />.
        </p>
          {projectSummaries.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              className={clsx(
                mounted ? "animate-card-fade" : "opacity-0",
                "will-change-transform"
              )}
            />
          ))}
      </main>
    </DefaultLayout>
  );
};

export default Home;
