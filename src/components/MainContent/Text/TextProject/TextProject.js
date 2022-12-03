const TextProject = ({
  titleProject,
  linkToProject,
  LinkToCode,
  LinkToCodeBackend,
  text,
}) => {
    return (
      <>
        <>
          <a href={linkToProject}>{titleProject}</a>
          {}
          <span>
            (link to code <a href={LinkToCode}> frontend </a>
            {LinkToCodeBackend ? (
              <>
                <span> or</span>
                <a href={LinkToCodeBackend}> backend </a>{" "}
              </>
            ) : (
              ""
            )}
            )
          </span>
          <span>{text}</span>
          <br></br>
        </>
      </>
    );
};

export default TextProject;
