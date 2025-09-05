import { useState } from 'react';
import './App.css';
import { Editor } from './components/Editor';

import { information } from './utils/curriculumInformation';
import { Curriculum } from './components/Curriculum';

function App() {
  const [curriculum, setCurriculum] = useState(information);

  return (
    <>
      <Editor curriculum={curriculum} setCurriculum={setCurriculum}/>
      <Curriculum curriculum={curriculum}/>    
    </>
  )
}

export default App;