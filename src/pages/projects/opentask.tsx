import { NextPage } from "next";
import { ButtonI, ButtonII, Subtitle, Title } from "y/components/Micro";
import ProjectLayout from "y/layouts/projectLayout";

const Opentask: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/ot.png"
      title="Opentask"
      subtitle="Design & Code"
      description="Opentask is a online community marketplace where user can connect with tasker and ask them for help completing task. After Finish my last project together with my 2 teammates, i figure that i want to maybe do something together again. that's how we decided to build opentask as our side project during our free time. the idea is pretty similar to my last project, while taking insperation from other existing product."
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
          <Subtitle label="2023 - Present" />
        </div>
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13 ">
          <Title label="Tools" />
          <Subtitle label="Figma" />
          <Subtitle label="Flutter - Dart" />
          <Subtitle label="Next js" />
        </div>

        <ButtonI label="Website (Coming soon)" url="/projects/opentask" />
      </>
    </ProjectLayout>
  );
};

export default Opentask;
