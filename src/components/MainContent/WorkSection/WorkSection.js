import Title from "../../Title/Title";
import TextWork from "../Text/TextWork/TextWork";

const WorkSection = () => {
  const titleSection = "WORK EXPERIENCE";

  const work1 = {
    position: "Sales manager",
    company: "Mobile Trand",
    experience: "| 2021 - 2022 |",
    text: "Sales; fulfillment of the assigned tasks from the office; control over all changes in the company.",
  };
  const work2 = {
    position: "Head of warehouse",
    company: "MK ( Private company )",
    experience: "| 2018-2021 |",
    text: "Organization of the work of the warehouse ; analysis of orders and the formation of applications ; even distribution of work among all employees. Reached the highest level of career growth in this company.",
  };

  return (
    <section>
      <Title title={titleSection} />
      <TextWork
        title={work1.position}
        company={work1.company}
        experience={work1.experience}
        text={work1.text}
      />
      <TextWork
        title={work2.position}
        company={work2.company}
        experience={work2.experience}
        text={work2.text}
      />
    </section>
  );
};

export default WorkSection;
