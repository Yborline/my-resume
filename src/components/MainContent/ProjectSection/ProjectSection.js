import Title from "../../Title/Title";
import TextProject from "../Text/TextProject/TextProject";

const ProjectSection = () => {
  const titleProject = "PROJECT EXPERIENCE";
  const website1 = {
    name: "WEB STUDIO",
    http: "https://yborline.github.io/goit-markup-hw-08/",
    text: "[HTML, CSS, SASS, BEM] , a website with a responsive layout",
    frontendCode: "https://github.com/Yborline/goit-markup-hw-08",
  };

  const website2 = {
    name: "ICE CREAM",
    http: "https://userrk.github.io/team-pro-24/",
    text: "[HTML, CSS, SASS, BEM, Parcel] (Team project/developer), a website a responsive layout.",
    frontendCode: "https://github.com/Yborline/team-pro-24",
  };
  const website3 = {
    name: "FILMOTEKA",
    http: "https://vladosik12333.github.io/project-4-filmoteka/",
    text: " [HTML , SASS, JS, API, AJAX, Parcel, Handlebars] (Team project/developer), application for choosing a movie.",
    frontendCode: "https://github.com/Vladosik12333/project-4-filmoteka",
  };
  const website4 = {
    name: "PROJECT-BOOKS",
    http: "https://project-books.netlify.app/",
    text: "[HTML,CSS, JS , API ,AJAX , Babel ,React , NodeJS ,Redux , Formik, Axios] , application for book readers, which helps to control the assigned tasks.",
    frontendCode: "https://github.com/Yborline/project-books",
    backendCode: "https://github.com/Yborline/project-books-api",
  };

  return (
    <>
      <Title title={titleProject} />
      <TextProject
        linkToProject={website1.http}
        titleProject={website1.name}
        text={website1.text}
        LinkToCode={website1.frontendCode}
      />
      <TextProject
        linkToProject={website2.http}
        titleProject={website2.name}
        text={website2.text}
        LinkToCode={website2.frontendCode}
      />
      <TextProject
        linkToProject={website3.http}
        titleProject={website3.name}
        text={website3.text}
        LinkToCode={website3.frontendCode}
      />

      <TextProject
        linkToProject={website4.http}
        titleProject={website4.name}
        text={website4.text}
        LinkToCode={website4.backendCode}
        LinkToCodeBackend={website4.backendCode}
      />
    </>
  );
};

export default ProjectSection;
