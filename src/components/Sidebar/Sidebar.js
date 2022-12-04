import ContactSection from "./ContactSection/ContactSection";
import OtherSection from "./OtherSection/OtherSection";
import { Section } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <Section>
      <ContactSection />
      <OtherSection />
    </Section>
  );
};

export default Sidebar;
