import { type NextPage } from "next";
import {
  ButtonI,
  ButtonII,
  Description,
  Imagez,
  Section,
  Subtitle,
  Title,
} from "y/components/Micro";
import ProjectLayout from "y/layouts/projectLayout";

const Mef: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/edemy.png"
      title="Edemy"
      subtitle="UXUI Lead"
      description="I lead design at Edemy, a small startup building a education platform application. During my time there, I introduced new features that help improve the experience, improving current UX, create onboarding and fully revamped the payment interface. The company also accept a lots of projects that related to education from clients. I responsible for both revamped old project and new projects. Since this is just a startup, I also did things other than design interface, like video editing, design poster, build landing page for Tesdopi app."
    >
      <>
        <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 md:mb-8">
          <Title label="Role" />
          <Subtitle label="UXUI Designer" />
        </div>
        <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9 md:mb-8">
          <Title label="Manager" />
          <Subtitle label="Sovann Srun" />
        </div>
        <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-11">
          <Title label="Duration" />
          <Subtitle label="8 months" />
        </div>
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13 ">
          <Title label="Tools" />
          <Subtitle label="Figma" />
        </div>

        <ButtonI label="Visit Edemy website" url="https://www.edemy.org/" />
        <ButtonII
          label="Facebook"
          url="https://www.facebook.com/ministry.economy.finance"
        />
        <Section
          title="Tesdopi"
          subtitle="The collector's profile is platform for token holders to display their
        collection — whether that's the Azuki they own, the emblems they earned,
        and more. We wanted to build a showroom experience that made members
        feel proud and special to be a part of the Azuki community."
        />
        <ButtonI label="Visit Tesdopi website" url="https://www.tesdopi.com/" />
        <Imagez image="/image/tesdopi1.png" />
        <Description
          text="Just a few components that i came up with and designed scattered
          across the app"
        />
        <Imagez image="/image/tesdopi2.png" />
        <Description text="Redesign Homescreen" />
        <Section
          title="Impact hub"
          subtitle="Impact hub is a place where they help connect entrepreneurs and innovators to large organizations, investors and the public sector. they need a design for their e-learning platform's administration website. I take on a responsibility to design their website following their existing design language"
        />
        <ButtonI label="Visit Impacthub website" url="https://impacthub.net/" />
        <Imagez image="/image/ih2.png" />
        <Description text="Admin Main Screen" />
        <Imagez image="/image/ih4.png" />
        <Description text="Overview of Content" />
        <Imagez image="/image/ih5.png" />
        <Description text="User Screen" />
        <Section
          title="WEG's Learning Managerment System"
          subtitle="Impact hub is a place where they help connect entrepreneurs and innovators to large organizations, investors and the public sector. they need a design for their e-learning platform's administration website. I take on a responsibility to design their website following their existing design language"
        />
        <ButtonI label="Visit WEG website" url="https://wegcambodia.com/" />
        <Imagez image="/image/weg1.png" />
        <Description text="I redesign the logo(right) of WEG LMS so that it look more modern and cleaner than the old one(left)" />
        <Imagez image="/image/weg5.png" />
        <Imagez image="/image/weg4.png" />
        <Description text="Web version of the system" />
        <Imagez image="/image/weg2.png" />
        <Imagez image="/image/weg3.png" />
        <Description text="Mobile version of the system" />
        <Section
          title="IBFKH"
          subtitle="I design the whole web application for ibfkh's Admission Test. ibfkh stands for The Institute of Banking & Finance Cambodia (formely know as CIB) has been set up by The Association of Banks in Cambodia (ABC), with the assistance from the Mekong Private Sector Development Facility (MPDF), the Asian Development Bank, and the ASEAN Bankers’ Association"
        />
        <ButtonI label="Visit IBFKH website" url="http://ibfkh.org/" />
        <Imagez image="/image/ibfkh1.png" />
        <Description text="On Going and Completed Exam Card" />
        <Imagez image="/image/ibfkh3.png" />
        <Description text="During Exam" />
        <Imagez image="/image/ibfkh2.png" />
        <Description text="Preview Section before submit the result" />
      </>
    </ProjectLayout>
  );
};

export default Mef;
