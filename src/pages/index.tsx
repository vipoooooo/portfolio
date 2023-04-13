import clsx from "clsx";
import { type NextPage } from "next";
import Image from "next/image";
import { DynamicLink, Digit } from "y/components/dynamic_link";
import Project from "y/components/project";

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800 font-sans uppercase">
      <div className="relative z-[9] w-full border-b border-solid border-neutral-800 bg-[#111111] px-4 py-8 shadow-xl md:px-6">
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
            subtitle="Intern"
          />
          <Project
            url="/"
            col="lg:col-start-7 lg:col-end-13 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/opentask.png"
            title="Opentask"
            subtitle="Design and Code"
          />
          <Project
            url="/"
            col="lg:col-start-1 lg:col-end-7 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/housemade.png"
            title="Housemade"
            subtitle="Design and Code"
          />
          <Project
            url="/"
            col="lg:col-start-7 lg:col-end-13 col-start-1 col-end-13 cursor-pointer hover:bg-neutral-800 group relative grid p-2 bg-[rgba(255,255,255,.03)] rounded-md ease-in"
            image="/image/edemy.png"
            title="Edemy"
            subtitle="UXUI Lead"
          />
        </main>
      </div>
      <footer className="-z-1 sticky bottom-0 w-full text-zinc-600">
        <section className="relative grid grid-cols-12 gap-4 px-4 pb-10 pt-6 md:gap-8 md:px-6 md:pb-10 md:pt-8">
          <div className="col-start-1 col-end-13 flex-col space-y-2 md:col-start-1 md:col-end-6">
            <span className="flex flex-row space-x-2 align-middle">
              <p className="mono w-min self-center rounded-full border border-solid border-yellow-300 px-2 pb-[2px] pt-1 lowercase text-yellow-300">
                v1.0.0
              </p>
              <p className="mono self-center px-2 pb-[2px] pt-1 uppercase text-zinc-600">
                Last updated 2023-04-09
              </p>
            </span>
          </div>
          <span className="col-start-1 col-end-13 flex flex-col space-y-1 md:col-start-7 md:col-end-9">
            <p>
              <DynamicLink title="Read.cv" url="https://example.com" />
              <Digit digit="1" />
            </p>
            <p>
              <DynamicLink title="LinkedIn" url="https://example.com" />
              <Digit digit="2" />
            </p>
            <p>
              <DynamicLink title="Github" url="https://example.com" />
              <Digit digit="3" />
            </p>
            <p>
              <DynamicLink title="Twitter" url="https://example.com" />
              <Digit digit="4" />
            </p>
          </span>
          <div className="col-start-1 col-end-13 flex flex-col space-y-1 md:col-start-9">
            <p className="text-white">Let's build something together.</p>
            <p>
              <DynamicLink
                title="vipoopoopoo@gmail.com"
                url="mailto:vipoopoopoo#gmail.com"
              />
              <Digit digit="5" />
            </p>
          </div>
        </section>
        <div className="relative col-start-1 col-end-13 overflow-hidden text-clip pb-2">
          <p className="overflow-hidden whitespace-nowrap">
            _▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in
            PhnomPenh_▞▚▞▚▞▚▞_Copyright_2023_▞▚▞▚▞▚▞_Built with
            Next.JS_Vercel_▞▚▞▚▞▚▞_Based in PhnomPenh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
