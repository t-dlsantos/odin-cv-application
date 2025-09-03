import { PersonalInformation } from "../PersonalInformation/PersonalInformation"

export function Editor({ curriculumInformation, setCurriculumInformation }) {
  return (
    <div>
      {/* <Button title="Clear Resume" />
      <Button title="Load Sample" /> */}

      <PersonalInformation curriculumInformation={curriculumInformation} setCurriculumInformation={setCurriculumInformation} />
    </div>
  )
}