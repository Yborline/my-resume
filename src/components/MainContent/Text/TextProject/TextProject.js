import { ProjectLink } from "./TextProject.styled";

const TextProject = ({
  titleProject,
  linkToProject,
  LinkToCode,
  LinkToCodeBackend,
  text,
}) => {
  return (
    <div>
      <ProjectLink href={linkToProject}>{titleProject} </ProjectLink>
      <span>
        (link to code <ProjectLink href={LinkToCode}> frontend </ProjectLink>
        {LinkToCodeBackend ? (
          <>
            <span> or</span>
            <ProjectLink href={LinkToCodeBackend}> backend </ProjectLink>{" "}
          </>
        ) : (
          ""
        )}
        )
      </span>
      <span>{text}</span>
      <br></br>
    </div>
  );
};

export default TextProject;
