import Link from "next/link";

const DynamicLink = ({ title, url }: { title: string; url: string }) => (
  <Link
    href={url}
    target="_blank"
    rel="noreferrer"
    className="border-b-[1px] border-dotted border-[rgba(255,255,255,.5)] bg-white/0 px-[2px] pt-[2px] text-white hover:border-yellow-300 hover:bg-white/10 hover:text-yellow-300"
  >
    {title}
  </Link>
);

const Digit = ({ digit }: { digit: string }) => (
  <sub className="top-[-0.5em]  font-mono text-[10px] font-light text-yellow-300">
    {digit}
  </sub>
);

export { DynamicLink, Digit };
