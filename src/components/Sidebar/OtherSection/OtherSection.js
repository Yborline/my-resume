import Title from "../../Title/Title";
import OtherList from "../OtherList/OtherList";

const OtherSection = () => {
  const techSkills = [
    "HTML5/CSS3/SASS/BEM",
    "JavaScript",
    " ES6+ ",
    "React.js",
    "WebPack / Parcel",
    "Handlebars",
    "REST API",
    "Figma",
    "GitHub",
    "NPM",
    "Redux",
    "Node.js",
  ];

  const softSkills = [
    "Ability to work under pressure",
    "Bussiness communication skills",
    "Responsible",
    "Conscientious",
    "Easy learner",
    "Result - oriented",
    "Creative",
    "Honest",
    "Accurate",
    "Flexible",
  ];

  const languages = [
    "Ukrainian - native",
    "Russian - fluent",
    "English - elementary",
  ];

  return (
    <>
      <Title title="TECHNICAL SKILLS" />
      <OtherList skills={techSkills} />
      <Title title="SOFTS KILLS" />
      <OtherList skills={softSkills} />
      <Title title="LANGUAGES" />
      <OtherList skills={languages} />
    </>
  );
};

export default OtherSection;
