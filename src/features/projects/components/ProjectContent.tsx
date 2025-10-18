import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type {
  ProjectAction,
  ProjectActionSpan,
  ProjectContentBlock,
  ProjectDetail,
  ProjectMeta,
} from "../types";

interface ProjectContentProps {
  project: ProjectDetail;
}

const actionSpanClasses: Record<ProjectActionSpan | "full", string> = {
  full: "md:col-start-5 md:col-end-13",
  "half-left": "md:col-start-5 md:col-end-9",
  "half-right": "md:col-start-9 md:col-end-13",
};

const baseActionClasses =
  "group col-span-full flex flex-row items-center rounded-md bg-white/[.05] p-4 text-white/80 transition hover:bg-white/10 hover:text-yellow-300";

function ProjectActionButton({ action }: { action: ProjectAction }) {
  const span = action.span ?? "full";

  return (
    <Link
      href={action.url}
      target="_blank"
      className={clsx(baseActionClasses, actionSpanClasses[span])}
    >
      <p>{action.label}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="ml-auto h-3 w-3 stroke-white/30 stroke-[3px] transition group-hover:stroke-yellow-300"
      >
        <path
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Link>
  );
}

function ProjectMetaGrid({ meta }: { meta: ProjectMeta[] }) {
  return (
    <div className="col-span-full md:col-start-5 md:col-end-13 md:mb-8">
      <div className="grid gap-4 md:grid-cols-4">
        {meta.map((section) => (
          <div key={section.title} className="text-zinc-100">
            <p className="text-zinc-100">{section.title}</p>
            {section.items.map((item) => (
              <p key={item} className="text-zinc-500">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function renderBlock(block: ProjectContentBlock, index: number) {
  switch (block.type) {
    case "description":
      return (
        <p
          key={`description-${index}`}
          className="col-span-full mb-2 text-zinc-500 md:col-start-5 md:col-end-13"
        >
          {block.text}
        </p>
      );
    case "image":
      return (
        <div
          key={`image-${block.src}-${index}`}
          className="col-span-full overflow-hidden rounded-md bg-gray-800 md:col-start-5 md:col-end-13"
        >
          <Image
            src={block.src}
            alt={block.alt ?? ""}
            width={2000}
            height={2000}
            decoding="async"
            className="relative inset-0 block h-auto max-h-full min-h-full w-0 min-w-full max-w-full overflow-hidden object-cover md:h-full md:w-full"
          />
        </div>
      );
    case "video":
      return (
        <div
          key={`video-${block.src}-${index}`}
          className="col-span-full overflow-hidden rounded-md bg-gray-800 md:col-start-5 md:col-end-13"
        >
          <video
            src={block.src}
            controls
            autoPlay
            loop
            muted
            className="relative inset-0 block h-auto max-h-full min-h-full w-0 min-w-full max-w-full overflow-hidden object-cover md:h-full md:w-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    case "section":
      return (
        <div
          key={`section-${block.title}-${index}`}
          className="col-span-full text-zinc-100 md:col-start-5 md:col-end-13"
        >
          <h2 className="mt-4 font-nimbus text-lg">{block.title}</h2>
          <p className="text-zinc-500">{block.subtitle}</p>
        </div>
      );
    case "divider":
      return (
        <hr
          key={`divider-${index}`}
          className="col-span-full border border-neutral-800 md:col-start-5 md:col-end-13"
        />
      );
    case "action":
      return (
        <ProjectActionButton
          key={`action-${block.action.label}-${index}`}
          action={block.action}
        />
      );
    default:
      return null;
  }
}

export function ProjectContent({ project }: ProjectContentProps) {
  const { meta, actions, content } = project;

  return (
    <div className="contents animate-card-fade">
      <ProjectMetaGrid meta={meta} />
      {actions?.map((action) => (
        <ProjectActionButton key={action.label} action={action} />
      ))}
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
