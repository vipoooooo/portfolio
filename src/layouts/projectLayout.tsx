import { type ReactElement } from "react";
import DefaultLayout from "./default";
import Image from "next/image";
import Link from "next/link";

export default function ProjectLayout({
  children,
  image,
  title,
  subtitle,
  description,
}: {
  children: ReactElement;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <DefaultLayout>
      <>
        <nav className="top-[1.99rem] z-20 mb-6 flex h-auto w-full flex-1 items-stretch justify-between md:sticky md:mb-0">
          <Link href="/" className="sticky ml-auto">
            <p className="fit-content inline-block cursor-pointer justify-self-end rounded-md bg-[rgba(50,50,50,.5)] px-2 py-1 text-zinc-100 hover:bg-[rgba(100,100,100,.5)]">
              Back home
            </p>
          </Link>
        </nav>
        <main className="min-h-[70vh]">
          <section className=" undefined relative grid grid-cols-12 gap-4 md:gap-8">
            <div className="relative col-span-12 my-2 grid h-[60vw] w-full overflow-hidden rounded-md object-cover md:my-8 md:h-[49vw]">
              <div className="relative h-full">
                <article className="opacity-1 h-full w-full overflow-hidden rounded-md object-cover transition duration-500 ease-out">
                  <span className="w-initial h-initial absolute inset-0 m-0 box-border block overflow-hidden border-0 bg-none p-0 opacity-100">
                    <Image
                      src={image}
                      alt="Me"
                      width={2000}
                      height={500}
                      decoding="async"
                      className="absolute inset-0 box-border block h-auto max-h-full min-h-full w-0 min-w-full max-w-full overflow-hidden border-0 bg-none object-cover md:h-full md:w-full"
                    />
                  </span>
                </article>
              </div>
            </div>
            <div className="col-span-full text-zinc-100 md:sticky md:top-[2rem] md:col-end-4">
              <h1 className="font-nimbus text-2xl">{title}</h1>
              <p className="text-zinc-500">{subtitle}</p>
            </div>
            <div className="col-start-1 col-end-13 mb-2 gap-6 text-zinc-100  md:col-start-5 md:col-end-13 md:columns-2">
              <p>{description}</p>
            </div>
            {children}
          </section>
        </main>
      </>
    </DefaultLayout>
  );
}
