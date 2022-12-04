import MainContent from "../../components/MainContent/MainContent";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Div } from "./ResumePage.styled";

const ResumePage = () => {
  return (
    <Div>
      <Sidebar />
      <MainContent />
    </Div>
  );
};

export default ResumePage;
