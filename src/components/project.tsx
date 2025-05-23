import Image from "next/image";
import Link from "next/link";
import { IoLockClosed } from "react-icons/io5";

const Project = ({
  url,
  col,
  image,
  title,
  subtitle,
}: // locked,
{
  url: string;
  col: string;
  image: string;
  title: string;
  subtitle: string;
  // locked: boolean;
}) => (
  <div className={col}>
    <Link href={url}>
      <div className="relative h-[60vw] overflow-hidden rounded-md object-cover lg:h-[29vw]">
        <div className="relative h-full">
          <article className="opacity-1 h-full w-full overflow-hidden rounded-lg object-cover transition duration-500 ease-out">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: 0,
              }}
            >
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                decoding="async"
                className="absolute inset-0 box-border block h-auto max-h-full min-h-full w-0 min-w-full max-w-full overflow-hidden border-0 bg-none object-cover md:h-full md:w-full"
              />
            </span>
          </article>
        </div>
      </div>
      {/* {locked && (
      <div className="absolute left-4 top-4 flex items-center gap-1 rounded-sm bg-neutral-900 px-2 py-1 text-zinc-50">
        <IoLockClosed className="w-3" />
        <p className="uppercase">Locked</p>
      </div>
      )} */}
      <div className="mt-2">
        <p className="text-zinc-50">{title}</p>
        <p className="text-zinc-500">{subtitle}</p>
      </div>
    </Link>
  </div>
);

const ProjectNoLink = ({
  col,
  image,
  title,
  subtitle,
}: {
  url: string;
  col: string;
  image: string;
  title: string;
  subtitle: string;
}) => (
  <div className={col}>
    <div className="relative h-[60vw] overflow-hidden rounded-md object-cover lg:h-[29vw]">
      <div className="relative h-full">
        <article className="opacity-1 h-full w-full overflow-hidden rounded-lg object-cover transition duration-500 ease-out">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: "0px",
              margin: "0px",
              padding: "0px",
              position: "absolute",
              inset: 0,
            }}
          >
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              decoding="async"
              className="absolute inset-0 box-border block h-auto max-h-full min-h-full w-0 min-w-full max-w-full overflow-hidden border-0 bg-none object-cover md:h-full md:w-full"
            />
          </span>
        </article>
      </div>
    </div>
    <div className="absolute left-4 top-4 flex items-center gap-1 rounded-sm bg-neutral-900 px-2 py-1 text-zinc-50">
      <IoLockClosed className="w-3" />
      <p className="uppercase">Locked</p>
    </div>
    <div className="mt-2">
      <p className="text-zinc-50">{title}</p>
      <p className="text-zinc-500">{subtitle}</p>
    </div>
  </div>
);

export { Project, ProjectNoLink };
