import { useState } from 'react'
import Bottt from './components/Bottt'
import PartSelector from './components/PartSelector'
import { getRandomPart } from './util'

const App = () => {
  const [face, setFace] = useState(getRandomPart('faces'))
  const [eyes, setEyes] = useState(getRandomPart('eyes'))
  const [mouths, setMouths] = useState(getRandomPart('mouths'))
  const [sides, setSides] = useState(getRandomPart('sides'))
  const [tops, setTops] = useState(getRandomPart('tops'))

  return (
    <div className="flex flex-col justify-center items-center my-6">
      <Bottt
        face={face}
        eyes={eyes}
        mouths={mouths}
        sides={sides}
        tops={tops}
      />
      <PartSelector
        setPart={{
          faces: setFace,
          eyes: setEyes,
          mouths: setMouths,
          sides: setSides,
          tops: setTops,
        }}
      />
    </div>
  )
}

export default App
