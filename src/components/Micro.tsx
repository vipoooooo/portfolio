import Image from "next/image";

const Button = ({
  classs,
  url,
  label,
}: {
  classs: string;
  url: string;
  label: string;
}) => (
  <a href={url} className={classs} target="_blank">
    <p>{label}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="ml-auto h-3 w-3 stroke-white/30 stroke-[3px] group-hover:stroke-yellow-300"
    >
      <path
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </a>
);

const ButtonI = ({ url, label }: { url: string; label: string }) => (
  <Button
    classs="group col-span-full flex flex-row items-center rounded-md bg-white/[.05] p-4 text-white/80 hover:bg-white/10 hover:text-yellow-300 md:col-start-5 md:col-end-9"
    url={url}
    label={label}
  />
);

const ButtonII = ({ url, label }: { url: string; label: string }) => (
  <Button
    classs="md:col-start-9 md:col-end-13 group text-white/80 bg-white/[.05] col-span-full hover:bg-white/10 hover:text-yellow-300 flex items-center flex-row p-4 rounded-md"
    url={url}
    label={label}
  />
);

const Title = ({ label }: { label: string }) => (
  <p className="text-zinc-100">{label}</p>
);

const Subtitle = ({ label }: { label: string }) => (
  <p className="text-zinc-500">{label}</p>
);

const Imagez = ({ image }: { image: string }) => (
  <div className="col-start-1 col-end-13 overflow-hidden rounded-md bg-gray-800 md:col-start-5">
    <Image
      src={image}
      alt="Me"
      width={0}
      height={0}
      sizes="50"
      decoding="async"
      className="related inset-0 box-border block h-auto 
              max-h-full min-h-full 
              w-0 min-w-full max-w-full overflow-hidden border-0 bg-none object-cover md:h-full md:w-full"
    />
  </div>
);

const Description = ({ text }: { text: string }) => (
  <p className="col-start-1 col-end-13 mb-2 gap-6  text-zinc-500 md:col-start-5 md:col-end-13">
    {text}
  </p>
);

const Section = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <hr className="col-start-1 col-end-13 border-solid border-[.5x] border-neutral-800 md:col-start-5" />
    <div className="col-start-1 col-end-13 mb-2 gap-6  text-zinc-100 md:col-start-5 md:col-end-13">
      <h2 className="h2 mt-4 font-nimbus text-lg">{title}</h2>
      <p>{subtitle}</p>
    </div>
  </>
);

export { ButtonI, ButtonII, Title, Subtitle, Imagez, Description, Section };
