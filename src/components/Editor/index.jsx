import { useState } from "react";
import "./style.css";

import { PersonalInformation } from "../PersonalInformation";
import { EducationSection } from "../EducationSection";
import { ExperienceSection } from "../ExperienceSection";
import { Button } from "../Button";
import { LoaderCircle, Trash } from "lucide-react";
import {
  cleanedInformation,
  loadExample,
} from "../../utils/curriculumInformation";

export function Editor({ curriculum, setCurriculum }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLoadSampe = () => {
    setCurriculum(loadExample());
  };

  const handleCleanResume = () => {
    setCurriculum(cleanedInformation());
  };

  return (
    <div className="editor-container">
      <div className="edition-action ">
        <Button
          text="Clear Resume"
          icon={Trash}
          color="red"
          onClick={handleCleanResume}
        />
        <Button
          text="Load Sample"
          icon={LoaderCircle}
          onClick={handleLoadSampe}
        />
      </div>

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
