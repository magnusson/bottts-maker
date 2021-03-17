import { useState } from 'react'
import Bottt from './components/Bottt'
import PartSelector from './components/PartSelector'

const App = () => {
  const [face, setFace] = useState('face')
  const [eyes, setEyes] = useState('eyes')

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Bottt face={face} eyes={eyes} />
      <PartSelector setPart={{ faces: setFace, eyes: setEyes }} />
    </div>
  )
}

export default App
