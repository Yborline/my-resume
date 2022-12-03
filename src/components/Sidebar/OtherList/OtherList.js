const OtherList = ({ skills }) => {
  return <ul>{skills && skills.map((skill) => <li>{skill}</li>)}</ul>;
};

export default OtherList;
