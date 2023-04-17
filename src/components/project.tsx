import Image from "next/image";

const Project = ({
  url,
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
    <a href={url}>
      <div className="relative h-[60vw] overflow-hidden rounded-md object-cover lg:h-[29vw]">
        <div className="relative h-full">
          <article className="opacity-1 h-full w-full overflow-hidden rounded-md object-cover transition duration-500 ease-out">
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
      <div className="mt-2">
        <p className="text-zinc-50">{title}</p>
        <p className="text-zinc-500">{subtitle}</p>
      </div>
    </a>
  </div>
);

export default Project;
