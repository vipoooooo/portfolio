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

const Eccc: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/ecccCover.webp"
      title="The Extraordinary Chambers in the Courts of Cambodia"
      subtitle="Website"
      description="I was employed to assist in the design of one of the most significant websites to date following my internship at MEF. The most significant period of Cambodian history, the Khmer Rouge, is covered in detail on the ECCC website, which offers information on the past, present, and future. When I joined the project in the middle, the people who were already involved only cared about the artistic side of things, so my main responsibility was to help create interactive design in Figma and design a layout where it made sense. I concentrated on the more technical side of design."
    >
      <>
        <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 md:mb-8">
          <Title label="Role" />
          <Subtitle label="Web designer" />
        </div>
        <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9 md:mb-8">
          <Title label="Collaborator" />
          <Subtitle label="Melina -PM" />
          <Subtitle label="Guilliume -AD" />
          <Subtitle label="Ingchhorng" />
        </div>
        <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-11">
          <Title label="Duration" />
          <Subtitle label="July 2023 - Nov 2023" />
        </div>
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13 ">
          <Title label="Tools" />
          <Subtitle label="Figma" />
          <Subtitle label="Illustrator" />
          <Subtitle label="Photoshop" />
        </div>

        <ButtonI label="ECCC's Website" url="https://eccc.gov.kh/en" />
        <ButtonII
          label="ECCC's Facebook"
          url="https://web.facebook.com/eccckh"
        />
        <Description text="One of my main responsibility of this project is to fix, design and organize all of the components in the project." />
        <Imagez image="/image/ecccsb.webp" />
        <Description text="This sidebar/breadcrumb is one of the most complex thing i ever built" />
        <Description text="Below are some of the highlight of my work in this project:" />
        <Imagez image="/image/eccc1.webp" />
        <Description text="typical design to display boring long content to readable and clean layout" />
        <Imagez image="/image/eccc4.webp" />
        <Imagez image="/image/eccc3.webp" />
        <Description text="Highlight each section as user scroll to help user focus on reading small content once at a time" />
        <Imagez image="/image/eccc5.webp" />
        <Description text="Directory for every person evolve in ECCC" />
        <Imagez image="/image/eccc2.webp" />
        <Description text="Layout design to display unique case of each person" />
      </>
    </ProjectLayout>
  );
};

export default Eccc;
