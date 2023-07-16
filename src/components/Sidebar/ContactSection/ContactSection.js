import { FiMapPin, FiMail } from "react-icons/fi";
import { BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import Title from "../../Title/Title";
import yaroslav from "../../../photo/yara.png";
import { Img } from "./ContactSection.styled";
import {
  Div,
  DivText,
  ResumeLink,
  IconsPTell,
  P,
} from "./ContactSection.styled";

const ContactSection = () => {
  return (
    <>
      <Img src={yaroslav} alt="yaroslav" />
      <Title title="CONTACT" />
      <Div>
        <div>
          <P>
            <FiMapPin pulse />
          </P>
          <P>
            <FiMail />
          </P>
          <P>
            <BsGithub />
          </P>
          <P>
            <BsLinkedin />
          </P>
          <IconsPTell>
            <BsTelephone />
          </IconsPTell>
        </div>
        <DivText>
          <ResumeLink href="https://www.google.com/maps/place/%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4020355,30.5326905,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234">
            Kyiv, Ukraine
          </ResumeLink>
          <ResumeLink href="mailto:borrline@gmail.com">
            {" "}
            borrline@gmail.com
          </ResumeLink>
          <ResumeLink href="https://github.com/Yborline">
            https://github.com/Yborline
          </ResumeLink>
          <ResumeLink href="https://www.linkedin.com/in/yaroslav-borys-793268231/">
            https://www.linkedin.com/in/yaroslav-borys-793268231/
          </ResumeLink>
          <ResumeLink href="tel:+380956025385">+38(095)-602-53-85</ResumeLink>
        </DivText>
      </Div>
    </>
  );
};

export default ContactSection;
