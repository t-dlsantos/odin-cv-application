import { useState } from 'react';
import './App.css';
import { Editor } from './components/Editor/Editor';

import { information, loadExample } from './utils/curriculumInformation';

function App() {
  const [curriculum, setCurriculum] = useState(information);

  return (
    <>
      <Editor curriculum={curriculum} setCurriculum={setCurriculum}/>    
    </>
  )
}

export default App;