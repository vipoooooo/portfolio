import { type NextPage } from "next";
import { ButtonI, ButtonII, Subtitle, Title } from "y/components/Micro";
import ProjectLayout from "y/layouts/projectLayout";

const Melon: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/melon.webp"
      title="Melon Rouge Agency"
      subtitle="UXUI Designer"
      description="After my internship at MEF, I decided to join Melon rouge agency to work on one of the biggest and most impactful website project to date. a website that contains confidential information about Khmer rouge with over 300+ pages with storytelling and full interaction. My responsibility is mostly handle the complexity of figma prototype which include main website, timeline and design system guildline."
    >
      <>
        <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 md:mb-8">
          <Title label="Role" />
          <Subtitle label="UXUI designer" />
        </div>
        <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9 md:mb-8">
          <Title label="Collaborator" />
          <Subtitle label="Guilliume" />
          <Subtitle label="Ingchhorng" />
        </div>
        <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-11">
          <Title label="Duration" />
          <Subtitle label="4 months (2023) - OnGoing" />
        </div>
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13 ">
          <Title label="Tools" />
          <Subtitle label="Figma" />
          <Subtitle label="Illustrator" />
          <Subtitle label="Photoshop" />
        </div>

        <ButtonI
          label="Visit Melon rouge website"
          url="https://melonrouge.asia/"
        />
        <ButtonII
          label="Facebook"
          url="https://www.facebook.com/melonrougeagency"
        />
      </>
    </ProjectLayout>
  );
};

export default Melon;
