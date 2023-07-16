import Title from "../../Title/Title";
import TextProject from "../Text/TextProject/TextProject";

const ProjectSection = () => {
  const titleProject = "PROJECT EXPERIENCE";
  const websites = [
    {
      name: "WEB STUDIO",
      http: "https://yborline.github.io/goit-markup-hw-08/",
      text: "[HTML, CSS, SASS, BEM] , a website with a responsive layout.",
      frontendCode: "https://github.com/Yborline/goit-markup-hw-08",
    },

    {
      name: "ICE CREAM",
      http: "https://userrk.github.io/team-pro-24/",
      text: "[HTML, CSS, SASS, BEM, Parcel] (Team project/developer), a website a responsive layout.",
      frontendCode: "https://github.com/Yborline/team-pro-24",
    },
    {
      name: "FILMOTEKA",
      http: "https://vladosik12333.github.io/project-4-filmoteka/",
      text: " [HTML , SASS, JS, API, AJAX, Parcel, Handlebars] (Team project/developer), application for choosing a movie.",
      frontendCode: "https://github.com/Vladosik12333/project-4-filmoteka",
    },
    {
      name: "PROJECT-BOOKS",
      http: "https://books-reading-rho.netlify.app",
      text: "[HTML,CSS, JS , API ,AJAX , Babel ,React , NodeJS ,Redux , Formik, Axios] , application for book readers, which helps to control the assigned tasks.",
      frontendCode: "https://github.com/Vasia911119/books",
      backendCode: "https://github.com/Vasia911119/books-api",
    },
    {
      name: "REPAIR-MOBILE",
      http: "https://borlinerepair.netlify.app",
      text: "[HTML,CSS, JS , API ,AJAX , Babel ,React , NodeJS ,Redux , Formik, Axios, Mui, dayjs, redux-persist], , my personal project, which is still under development.",
      frontendCode: "https://github.com/Yborline/react-mobile-repair",
      backendCode: "https://github.com/Yborline/react-mobile-repair-api",
    },
  ];

  return (
    <section>
      <Title title={titleProject} />
      {websites &&
        websites.map((item) => (
          <TextProject
            linkToProject={item.http}
            titleProject={item.name}
            text={item.text}
            LinkToCode={item.frontendCode}
            LinkToCodeBackend={item.backendCode}
          />
        ))}
    </section>
  );
};

export default ProjectSection;
