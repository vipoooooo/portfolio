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
              <img
                src={image}
                alt="Me"
                width="100vw"
                decoding="async"
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
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
