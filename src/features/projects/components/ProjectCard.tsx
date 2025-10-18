import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { ProjectSummary } from "../types";

interface ProjectCardProps {
  project: ProjectSummary;
  className?: string;
}

const baseCardClasses =
  "group relative block col-span-full overflow-hidden rounded-2xl bg-neutral-800 p-2 transition duration-[180ms] ease-out outline outline-0 outline-offset-4 active:scale-[0.95] active:outline-none lg:col-span-6";

const lockedClasses = "cursor-not-allowed pointer-events-none";
const interactiveClasses =
  "cursor-pointer hover:outline-2 hover:outline-yellow-300 focus-visible:outline-2 focus-visible:outline-yellow-300";

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { slug, title, subtitle, image, locked } = project;

  const cardClasses = clsx(
    baseCardClasses,
    locked ? lockedClasses : interactiveClasses,
    className
  );

  return (
    <Link
      href={`/projects/${slug}`}
      aria-disabled={locked}
      className={cardClasses}
    >
      <div className="relative w-full overflow-hidden rounded-xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition duration-[180ms] ease-out group-hover:scale-[1.05]"
          />
        </div>
      </div>
      <div className="mt-2 px-2 py-1">
        <p className="text-zinc-50">{title}</p>
        <p className="text-zinc-500">{subtitle}</p>
      </div>
    </Link>
  );
}
