import { type NextPage } from "next";
import {
  ButtonI,
  ButtonII,
  Description,
  Imagez,
  Subtitle,
  Title,
} from "y/components/Micro";
import ProjectLayout from "y/layouts/projectLayout";

const Filelog: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/filelogCover.webp"
      title="Filelog"
      subtitle="Internal Tool"
      description="One of the product that i'd been working on during my internship at ministry of economy and finance was filelog. My boss want me to build a product to help increase productivity internally. The everyday struggle of my colleague mostly related to manual reports. Everyday, there are a lots of file going around and all the stuff have to keep track of all those documents using the combination of google sheet and drive. Filelog is aim to solved that problem by creating a system that turn existing manual system into digital. User can create report, send, sign, and track. It's also build to scale so other department can also benifit from this."
      // description="After graduated, I get to intern at Ministry of economy and finance. I was hired for software engineer role, and my time at MEF involves mostly building projects that help improve the productivity inside and outside the office, designing UI for various projects, pitching ideas to my mentor. I also help building one of the mobile application called FMIS portal."
    >
      <>
        <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 md:mb-8">
          <Title label="Role" />
          <Subtitle label="Intern Web Developer" />
        </div>
        <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9 md:mb-8">
          <Title label="Mentor" />
          <Subtitle label="Tharo" />
        </div>
        <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-11">
          <Title label="Duration" />
          <Subtitle label="6 months (2023)" />
        </div>
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13 ">
          <Title label="Tools" />
          <Subtitle label="Figma" />
          <Subtitle label="Next js" />
          <Subtitle label="Prisma" />
          <Subtitle label="tRPC" />
          <Subtitle label="Planetscale" />
          <Subtitle label="Google drive" />
        </div>

        <ButtonI label="Visit mef website" url="https://mef.gov.kh/" />
        <ButtonII
          label="Facebook"
          url="https://www.facebook.com/ministry.economy.finance"
        />
        <Imagez image="/image/component.webp" />
        <Description text="Built the design system from the ground up with the goal of unifying visual language." />
        <Imagez image="/image/section.webp" />
        <Description text="More section components" />
        <Imagez image="/image/filelogShot1.webp" />
        <Description text="Final product" />
      </>
    </ProjectLayout>
  );
};

export default Filelog;
