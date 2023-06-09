import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Welcome to our club <HighlightSpan>JMC</HighlightSpan>!
      </p>
      <p>
        This page is still<HighlightAlt>Under Construction</HighlightAlt>
      </p>
      <p>
        Check regularly for updates<3
      </p>
    </AboutWrapper>
  );
};

export default About;
