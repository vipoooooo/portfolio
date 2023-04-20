import { type NextPage } from "next";
import {
  Description,
  Imagez,
  Section,
  Subtitle,
  Title,
} from "y/components/Micro";
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
        {/* <ButtonI label="Website (Coming soon)" url="/projects/opentask" /> */}
        <Section
          title="Visual Language"
          subtitle="the attention to the details of every colors, icons, texts, shapes"
        />
        <Imagez image="/image/otlogo1.png" />
        <Imagez image="/image/otlogo2.png" />
        <Description text="1 shape, 2 logos" />
        <Imagez image="/image/ot7.png" />
        <Description text="Icon library of choice: Ionicons" />
        <Imagez image="/image/ot0.png" />
        <Description text="Local Customize Components" />
        <Section
          title="Authentication"
          subtitle="Login/Signup, Email, Phone number, setup account,..."
        />
        <Imagez image="/image/ot1.png" />
        <Description text="Login & Signup with email, phone number & otp" />
        <Imagez image="/image/ot2.png" />
        <Description text="Setting up account" />
        <Section
          title="Post"
          subtitle="Basic Information, Location, Description and budget"
        />
        <Imagez image="/image/ot5.png" />
        <Description text="Step by step of posting a task process" />
        <Section
          title="Task"
          subtitle="Task Status, History, Offer, Negotiate, Question, etc"
        />
        <Imagez image="/image/ot3.png" />
        <Imagez image="/image/ot4.png" />
      </>
    </ProjectLayout>
  );
};

export default Opentask;
