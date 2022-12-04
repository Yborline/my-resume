import { nanoid } from "nanoid";

const OtherList = ({ skills }) => {
  return (
    <ul>{skills && skills.map((skill) => <li key={nanoid()}>{skill}</li>)}</ul>
  );
};

export default OtherList;
