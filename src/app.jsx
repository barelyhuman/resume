import resumeJSON from "../resume.json";
import { Basics } from "./Basics";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Work } from "./Work";

export function App() {
  return (
    <div id="resume">
      <Basics resume={resumeJSON} />
      <Skills resume={resumeJSON} />
      <Work resume={resumeJSON} />
      <Projects resume={resumeJSON} />
      <Education resume={resumeJSON} />
    </div>
  );
}
