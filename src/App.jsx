import { useState } from 'react';
import './App.css';
import { Editor } from './components/Editor/Editor';

import { information, loadExample } from './utils/curriculumInformation';

function App() {
  const [curriculumInformation, setCurriculumInformation] = useState(information);

  return (
    <div>
      <Editor curriculumInformation={curriculumInformation} setCurriculumInformation={setCurriculumInformation}/>    
    </div>
  )
}

export default App;