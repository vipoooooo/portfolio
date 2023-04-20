import { type NextPage } from "next";
import { ButtonI, ButtonII, Subtitle, Title } from "y/components/Micro";
import ProjectLayout from "y/layouts/projectLayout";

const Mef: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/mef.png"
      title="Ministry of Economy and Finance"
      subtitle="Software Developer"
      description="After graduated, I get to intern at Ministry of economy and finance. I was hired for software engineer role, and my time at MEF involves mostly building projects that help improve the productivity inside and outside the office, designing UI for various projects, pitching ideas to my mentor. I also help building one of the mobile application called FMIS portal."
    >
      <>
        <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 md:mb-8">
          <Title label="Role" />
          <Subtitle label="Software Engineer" />
        </div>
        <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9 md:mb-8">
          <Title label="Mentor" />
          <Subtitle label="Tharo" />
        </div>
        <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-11">
          <Title label="Duration" />
          <Subtitle label="2023 - Present" />
        </div>
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13 ">
          <Title label="Tools" />
          <Subtitle label="Figma" />
          <Subtitle label="Flutter - Dart" />
          <Subtitle label="Next js" />
        </div>

        <ButtonI label="Visit mef website" url="https://mef.gov.kh/" />
        <ButtonII
          label="Facebook"
          url="https://www.facebook.com/ministry.economy.finance"
        />
      </>
    </ProjectLayout>
  );
};

export default Mef;
