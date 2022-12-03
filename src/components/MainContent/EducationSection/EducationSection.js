import TextWork from "../Text/TextWork/TextWork";
import Title from "../../Title/Title";

const EducationSaction = () => {
  const titleSection = "EDUCATION";

  const education1 = {
    institution: "State University of Infrastructure and Technologies",
    experience: "| 2018 - 2021 |",
    text: "Faculty of transport technologies on railway transport",
  };

  const education2 = {
    institution: "Kyiv Professional College of Transport Infrastructure",
    experience: "| 2014 - 2018 |- with honours",
    text: "Faculty of organization of transportation and management of railway transport",
  };

  return (
    <>
      <Title title={titleSection} />
      <TextWork
        title={education1.institution}
        experience={education1.experience}
        text={education1.text}
      />
      <TextWork
        title={education2.institution}
        experience={education2.experience}
        text={education2.text}
      />
    </>
  );
};

export default EducationSaction;
