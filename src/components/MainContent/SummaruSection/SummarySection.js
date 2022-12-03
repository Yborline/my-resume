import Title from "../../Title/Title";
import Text from "../Text/Text";

const SummarySection = () => {
  const titleSummarry = "S U M M A R Y";
  const textSummary =
    "My new passion is creating and learning websites. That is why I am interested in the position of Front-End Developer. I have knowledge of HTML, CSS, JavaScript and React. During my studies, I worked on several projects (you can see my GitHub account). I am a fast learner and am ready for challenging tasks. I will be glad to become a part of big and interesting projects. My goal is to enjoy my work.";

  return (
    <>
      <Title title={titleSummarry} />
      <Text text={textSummary} />
    </>
  );
};

export default SummarySection;
