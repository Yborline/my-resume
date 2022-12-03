import TextWork from "../Text/TextWork/TextWork";
import Title from "../../Title/Title";

const AddEducationSection = () => {
  const titleSection = "ADDITIONAL EDUCATION";

  const education1 = {
    institution: "IT School GoIT",
    experience: "| 2021 - 2022 |",
    text: "Full Stack Developer",
  };

  const education2 = {
    institution: "Children's Music School №14 them. D. Kabalevsky",
    experience: "| 2006 - 2014 |",
    text: "Violin, piano",
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

export default AddEducationSection;
