import Heading from "./Heading.js";
import Section from "./Section.js";
import LevelProvider from "./LevelProvider.js";
import ToolbarSection from "./Toolbar.js";

export default function Page() {
  return (
    <LevelProvider>
      <ToolbarSection />
      <hr />
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </LevelProvider>
  );
}
