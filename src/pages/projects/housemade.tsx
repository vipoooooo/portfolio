import { NextPage } from "next";
import {
  ButtonI,
  ButtonII,
  Description,
  Imagez,
  Subtitle,
  Title,
} from "y/components/Micro";
import ProjectLayout from "y/layouts/projectLayout";

const Opentask: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/housemade.png"
      title="Housemade"
      subtitle="Design & Code"
      description="this project is my final univ project that i did with my friends. A few years ago, I noticed the difficulties of finding specialist to fix your house in my country. Whenever there’s a problem occur in someone’s house, the first solution is to ask people around them if they know or have contact of someone that can fix their house problem. and that make me wonder why aren’t there anyone who create some kind of website or application that can provide these kinds of services.
      That’s is why me and my friend decide to create a service provider website that provide all kind of in-house repair."
    >
      <>
        <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 md:mb-8">
          <Title label="Role" />
          <Subtitle label="Designer" />
          <Subtitle label="Developer" />
        </div>
        <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9 md:mb-8">
          <Title label="Collaborators" />
          <Subtitle label="Chinda Thorn" />
          <Subtitle label="Leangsuor Kim" />
        </div>
        <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-11">
          <Title label="Duration" />
          <Subtitle label="3 months (2022)" />
        </div>
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13 ">
          <Title label="Technology" />
          <Subtitle label="Figma" />
          <Subtitle label="Next js" />
          <Subtitle label="Tailwind Css" />
          <Subtitle label="Auth js" />
          <Subtitle label="Trpc" />
          <Subtitle label="Prisma" />
          <Subtitle label="Planetscale" />
        </div>

        <ButtonI label="Read Documents" url="https://mef.gov.kh/" />
        <ButtonII
          label="Visit Live Website"
          url="https://www.facebook.com/ministry.economy.finance"
        />
        <ButtonI label="Github" url="https://mef.gov.kh/" />
        <Imagez image="/image/housemade1.png" />
        <Description text="I made customize icons for the application" />
        <Imagez image="/image/housemade2.png" />
        <Imagez image="/image/housemade3.png" />
        <Description text="We decided to use baseweb library for design system" />
        <Imagez image="/image/housemade6.png" />
        <Description text="Custom Components" />
        <Imagez image="/image/housemade5.png" />
        <Description text="Some of the mobile screen" />
      </>
    </ProjectLayout>
  );
};

export default Opentask;
