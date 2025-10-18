import { type ReactNode } from "react";
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
  children: ReactNode;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <DefaultLayout>
      <>
        <main className="min-h-[70vh]">
          <section className="relative grid grid-cols-12 gap-4 md:gap-8">
            <div className="sticky top-4 z-40 col-span-full md:top-6">
              <Link
                href="/"
                className="inline-block rounded-md bg-[rgba(50,50,50,.7)] px-3 py-1 text-xs uppercase text-zinc-100 transition hover:bg-[rgba(100,100,100,.7)]"
              >
                Back home
              </Link>
            </div>
            <div className="animate-card-fade col-span-12 mb-6 overflow-hidden rounded-xl md:mb-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[16/9]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="100vw"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="animate-card-fade col-span-full text-zinc-100 md:sticky md:top-[4rem] md:col-end-4">
              <h1 className="font-nimbus text-2xl">{title}</h1>
              <p className="text-zinc-500">{subtitle}</p>
            </div>
            <div className="animate-card-fade col-start-1 col-end-13 mb-2 gap-6 text-zinc-100 md:col-start-5 md:col-end-13 md:columns-2">
              <p>{description}</p>
            </div>
            {children}
          </section>
        </main>
      </>
    </DefaultLayout>
  );
}
