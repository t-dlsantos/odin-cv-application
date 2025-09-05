import { useState } from "react";
import "./style.css";

import { PersonalInformation } from "../PersonalInformation";
import { EducationSection } from "../EducationSection";
import { ExperienceSection } from "../ExperienceSection";

export function Editor({ curriculum, setCurriculum }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="editor-container">
      {/* <Button title="Clear Resume" />
      <Button title="Load Sample" /> */}

      <PersonalInformation
        curriculum={curriculum}
        setCurriculum={setCurriculum}
      />

      <div className="sections">
        <EducationSection
          curriculum={curriculum}
          setCurriculum={setCurriculum}
          isOpen={activeIndex === 0}
          onToggle={() => setActiveIndex(activeIndex === 0 ? null : 0)}
        />
        <ExperienceSection
          curriculum={curriculum}
          setCurriculum={setCurriculum}
          isOpen={activeIndex === 1}
          onToggle={() => setActiveIndex(activeIndex === 1 ? null : 1)}
        />
      </div>
    </div>
  );
}