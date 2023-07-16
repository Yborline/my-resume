const TextWork = ({ title, company, experience, text }) => {
  return (
    <>
      {company ? (
        <>
          <h3>{title}</h3>
          <p>
            {company} {experience}
          </p>
        </>
      ) : (
        <>
          <h3>{title}</h3> <p>{experience}</p>
        </>
      )}
      <p>{text}</p>
    </>
  );
};

export default TextWork;
