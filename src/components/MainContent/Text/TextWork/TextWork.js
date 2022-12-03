const TextWork = ({ title, company, experience, text }) => {
  return (
    <>
      <h3>{title}</h3>
      {company ? (
        <p>
          {company} {experience}
        </p>
      ) : (
        <p>{experience}</p>
      )}
      <p>{text}</p>
    </>
  );
};

export default TextWork;
