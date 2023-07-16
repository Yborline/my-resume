import TextWork from "../Text/TextWork/TextWork";
import Title from "../../Title/Title";

const AddEducationSection = () => {
  const titleSection = "ADDITIONAL EDUCATION";

  const educations = [
    {
      institution: "IT School GoIT",
      experience: "| 2021 - 2022 |",
      text: "Full Stack Developer",
    },
    {
      institution: "Children's Music School №14 them. D. Kabalevsky",
      experience: "| 2006 - 2014 |",
      text: "Violin, piano",
    },
  ];

  return (
    <section>
      <Title title={titleSection} />
      {educations.map((item) => (
        <TextWork
          title={item.institution}
          experience={item.experience}
          text={item.text}
        />
      ))}
    </section>
  );
};

export default AddEducationSection;
