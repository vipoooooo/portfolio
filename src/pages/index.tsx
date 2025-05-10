import clsx from "clsx";
import { type NextPage } from "next";
import Image from "next/image";
import { DynamicLink, Digit } from "y/components/dynamic_link";
import { Project } from "y/components/project";
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
          <Project
            url="/projects/smart"
            col="group relative col-start-1 col-end-13 grid cursor-not-allowed rounded-md bg-[rgba(255,255,255,.03)] p-2 ease-in  lg:col-start-1 lg:col-end-7"
            image="/image/smartBanner2.png"
            title="Smart Axiata"
            subtitle="Self care application"
          />
          <Project
            url="/projects/eccc"
            col="lg:col-start-7 lg:col-end-13 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/ecccCover.webp"
            title="The Extraordinary Chambers in the Courts of Cambodia"
            subtitle="Website"
            // locked={false}
          />

          <Project
            url="/projects/edemy"
            col="group relative col-start-1 col-end-13 grid cursor-pointer rounded-md bg-[rgba(255,255,255,.03)] p-2 ease-in hover:bg-neutral-800 lg:col-start-1 lg:col-end-7"
            image="/image/edemy.png"
            title="Edemy"
            subtitle="Mobile/Web Applications"
            // locked={false}
          />
          <Project
            url="/projects/filelog"
            col="lg:col-start-7 lg:col-end-13 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/filelogCover.webp"
            title="Filelog"
            subtitle="Internal Tool"
            // locked={false}
          />

          <Project
            url="/projects/opentask"
            col="group relative col-start-1 col-end-13 grid cursor-pointer rounded-md bg-[rgba(255,255,255,.03)] p-2 ease-in hover:bg-neutral-800 lg:col-start-1 lg:col-end-7"
            image="/image/op.webp"
            title="Opentask"
            subtitle="Web application (Personal)"
            // locked={false}
          />
          <Project
            url="/projects/housemade"
            col="lg:col-start-7 lg:col-end-13 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/housemade.png"
            title="Housemade"
            subtitle="Web application (Personal)"
            // locked={false}
          />
        </main>
      </>
    </DefaultLayout>
  );
};

export default Home;
