import { type NextPage } from "next";
import {
  Button0,
  ButtonI,
  ButtonII,
  Description,
  Imagez,
  Subtitle,
  Title,
  Videoz,
} from "y/components/Micro";
import ProjectLayout from "y/layouts/projectLayout";

const Smart: NextPage = () => {
  return (
    <ProjectLayout
      image="/image/smartBanner2.png"
      title="Smartnas 4.0 [REVAMP]"
      subtitle="Self care application"
      description="I led the design for the SmartNas 4.0 revamp at Smart Axiata, one of Cambodia's top three telecommunications companies. As the sole designer on the team, I played a key role in scaling the platform from under 1 million to over 1.5 million users. My contributions included creating a design system from scratch, which tripled team productivity, managing the current version (3.0) across multiple departments, and simultaneously driving the redesign for the 4.0 version."
    >
      <>
        <div className="col-start-1 col-end-7 md:col-start-5 md:col-end-7 md:mb-8">
          <Title label="Role" />
          <Subtitle label="Senior Product Designer" />
        </div>
        <div className="col-start-7 col-end-13 md:col-start-7 md:col-end-9 md:mb-8">
          <Title label="Team" />
          <Subtitle label="Customer Expecience & Digital Touchpoint" />
        </div>
        <div className="col-start-1 col-end-7 mb-8 md:col-start-9 md:col-end-11">
          <Title label="Duration" />
          <Subtitle label="Dec 2023 - OnGoing" />
        </div>
        <div className="col-start-7 col-end-13 mb-8 md:col-start-11 md:col-end-13 ">
          <Title label="Tools" />
          <Subtitle label="Figma" />
          <Subtitle label="Illustrator" />
        </div>

        <Button0
          label="SmartNas's Website"
          url="https://www.smart.com.kh/km/smartnas"
        />
        <ButtonI
          label="Download Smartnas on iOS"
          url="https://apps.apple.com/cy/app/smartnas/id1205849979"
        />
        <ButtonII
          label="Download Smartnas on Android"
          url="https://play.google.com/store/apps/details?id=net.omobio.smartsc&hl=en&gl=US"
        />
        <Imagez image="/image/snIcon1.webp" />
        <Imagez image="/image/snIcon2.webp" />
        <Description text="+400 Hand drawn icons including both outline and filled" />
        <Videoz video="/image/snHome 2.mp4" />
        {/* <Imagez image="/image/sn1.webp" />
        <Description text="Homepage is where user can find the most important things related to their number like top up, history, plan, service, event...." />
        <Imagez image="/image/sn2.webp" />
        <Description text="History is the all-in-one place where you can fild all the transactions, data usages, every actions that you did with Smart" />
        <Imagez image="/image/sn3.webp" />
        <Description text="Home Internet is where your you can keep track and manage your wifi plan" />
        <Imagez image="/image/sn4.webp" />
        <Description text="Settings is where you can make changes to your profile such as change theme, language, update profile, manage devices, ....." />
        <Imagez image="/image/sn5.webp" />
        <Description text="and more." /> */}
      </>
    </ProjectLayout>
  );
};

export default Smart;
