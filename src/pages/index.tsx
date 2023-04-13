import clsx from "clsx";
import { type NextPage } from "next";
import Image from "next/image";
import { DynamicLink, Digit } from "y/components/dynamic_link";
import Project from "y/components/project";
import DefaultLayout from "y/layouts/default";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <>
        <nav className="top-[1.99rem] z-20 mb-6 flex h-auto flex-1 items-stretch justify-between md:fixed md:mb-0">
          <div className="ease-[cubic-bezier(0.22, 1, 0.36, 1)] relative h-[48px] w-[48px] hover:cursor-help hover:opacity-[.9]">
            <span className="absolute inset-0 block">
              <Image src="/me.png" alt="Me" width={48} height={48} />
            </span>
          </div>
        </nav>
        <main className="undefined relative z-10 grid grid-cols-12 gap-4 md:gap-8">
          <p
            className={clsx(
              "col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-5 lg:col-end-13",
              "mb-8 select-none gap-6 pt-2 text-zinc-100 md:mt-0 md:columns-2"
            )}
          >
            Viphou is a both designer and developer interested in designing and
            building product that have huge impact in society. After working at{" "}
            <DynamicLink title="Edemy" url="https://www.edemy.org/" />
            <Digit digit="1" /> as a UXUI designer, he discovered a love for
            having full control over how the interface should and feel. He
            graduated from Kasem bundit University where she studied computer
            Science. He iscurrently an intern at{" "}
            <DynamicLink
              title="Ministry of Economy and Finance"
              url="https://mef.gov.kh/"
            />
            <Digit digit="2" /> doing both UXUI and mobile developement
          </p>
          <Project
            url="/projects/mef"
            col="group relative col-start-1 col-end-13 grid cursor-pointer rounded-md bg-[rgba(255,255,255,.03)] p-2 ease-in hover:bg-neutral-800 lg:col-start-1 lg:col-end-7"
            image="/image/mef.png"
            title="Ministry of Economy and Finance"
            subtitle="Software Developer"
          />
          <Project
            url="/projects/opentask"
            col="lg:col-start-7 lg:col-end-13 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/opentask.png"
            title="Opentask"
            subtitle="Design & Code"
          />
          <Project
            url="/projects/housemade"
            col="lg:col-start-1 lg:col-end-7 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/housemade.png"
            title="Housemade"
            subtitle="Design & Code"
          />
          <Project
            url="/projects/edemy"
            col="lg:col-start-7 lg:col-end-13 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/edemy.png"
            title="Edemy"
            subtitle="UXUI Lead"
          />
        </main>
      </>
    </DefaultLayout>
  );
};

export default Home;
