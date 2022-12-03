import Title from "../Title/Title";
import Text from "./Text/Text";
import SummarySection from "./SummaruSection/SummarySection";
import ProjectSection from "./ProjectSection/ProjectSection";
import WorkSection from "./WorkSection/WorkSection";
import EducationSaction from "./EducationSection/EducationSection";
import AddEducationSection from "./AddEducationSection/AddEducationSecrion";

const MainContent = () => {
  return (
    <>
      <h1>Yaroslav</h1>
      <SummarySection />
      <ProjectSection />
      <WorkSection />
      <EducationSaction />
      <AddEducationSection />
      {/* 
      <Title title={titleSummarry} />
      <Text text={textSummary} />

      <Title title={titleSummarry} />
      <Text text={textSummary} /> */}
    </>
  );
};

export default MainContent;
