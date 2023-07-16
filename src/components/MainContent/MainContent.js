import SummarySection from "./SummaruSection/SummarySection";
import ProjectSection from "./ProjectSection/ProjectSection";
import WorkSection from "./WorkSection/WorkSection";
import EducationSaction from "./EducationSection/EducationSection";
import AddEducationSection from "./AddEducationSection/AddEducationSecrion";
import { Div, H1 } from "./MainContent.styled";

const MainContent = () => {
  return (
    <Div>
      <H1>YAROSLAV BORYS </H1>
      <SummarySection />
      <ProjectSection />
      <WorkSection />
      <EducationSaction />
      <AddEducationSection />
    </Div>
  );
};

export default MainContent;
