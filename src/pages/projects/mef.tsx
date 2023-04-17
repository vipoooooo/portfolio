import { type NextPage } from "next";
import { ButtonI, ButtonII, Subtitle, Title } from "y/components/Micro";
import ProjectLayout from "y/layouts/projectLayout";

const Mef: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/mef.png"
      title="Ministry of Economy and Finance"
      subtitle="Software Developer"
      description="During the summers of 2020 and 2021, I interned at Apple as an Interaction Designer working on two core Siri teams — the Understanding team with Garrett Weinberg and the Knowledge team with Maria Cordell. During my time there, I designed platform-level voice UI patterns and disambiguation behaviors for various hardware platforms. My time at Apple involved pitching ideas to high level leadership such as Robby Walker, weekly syncs with Machine Learning engineers, and throwing around ideas with senior designers."
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
