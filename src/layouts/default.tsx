import { type ReactElement } from "react";
import { DynamicLink, Digit } from "y/components/dynamic_link";

export default function DefaultLayout({
  children,
}: {
  children: ReactElement;
}) {
  const tickerSegment =
    "_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Built by Po_▞▚▞▚▞▚▞_Based in PhnomPenh";
  const tickerSegments = Array.from({ length: 6 }, () => tickerSegment);

  return (
    <div className="bg-zinc-800 font-sans text-sm uppercase">
      <div className="relative z-[1] w-full border-b border-solid border-neutral-800 bg-[#111111] px-4 py-8 shadow-xl md:px-6">
        <div className="flex max-w-7xl justify-self-center">{children}</div>
      </div>
      <footer className="-z-1 sticky bottom-0 w-full text-zinc-600">
        <section className="relative grid grid-cols-12 gap-4 px-4 pb-10 pt-6 md:gap-8 md:px-6 md:pb-10 md:pt-8">
          <div className="col-start-1 col-end-13 flex-col space-y-2 md:col-start-1 md:col-end-6">
            <span className="flex flex-row space-x-2 align-middle">
              <p className="mono w-min self-center rounded-full border border-solid border-yellow-300 px-2 pb-[2px] pt-1 lowercase text-yellow-300">
                v1.1.0
              </p>
              <p className="mono self-center px-2 pb-[2px] pt-1 uppercase text-zinc-600">
                Last updated Oct 18, 2025
              </p>
            </span>
          </div>
          <span className="col-start-1 col-end-13 flex flex-col space-y-1 md:col-start-7 md:col-end-9">
            <p>
              <DynamicLink
                title="LinkedIn"
                url="https://www.linkedin.com/in/viphou-chhun-aab64b198/"
              />
              <Digit digit="1" />
            </p>
            <p>
              <DynamicLink
                title="CV"
                url="https://docs.google.com/document/d/1Sn0b2sMNY8V5zKc07Qv4zD79jiRyK8a5xMQZPVZo2UM/edit?tab=t.0"
              />
              <Digit digit="2" />
            </p>
            {/* <p>
              <DynamicLink title="Github" url="https://github.com/vipoooooo" />
              <Digit digit="3" />
            </p> */}
            <p>
              <DynamicLink
                title="Behance"
                url="https://www.behance.net/vipoodecrut"
              />
              <Digit digit="3" />
            </p>
          </span>
          <div className="col-start-1 col-end-13 flex flex-col space-y-1 md:col-start-9">
            <p className="text-white">Let&apos;s build something together.</p>
            <p>
              <DynamicLink
                title="vipoopoopoo@gmail.com"
                url="mailto:vipoopoopoo#gmail.com"
              />
              <Digit digit="4" />
            </p>
          </div>
        </section>
        <div className="relative col-start-1 col-end-13 overflow-hidden text-clip pb-2">
          <div className="ticker" aria-label={tickerSegment}>
            <div className="ticker-track font-mono" aria-hidden="true">
              {tickerSegments.map((segment, index) => (
                <span key={`ticker-segment-${index}`}>{segment}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
