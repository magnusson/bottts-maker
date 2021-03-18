import { useState, Dispatch, SetStateAction } from 'react'
import botttParts from '../botttParts'

const PartSelector = ({
  setPart,
}: {
  setPart: Record<string, Dispatch<SetStateAction<string>>>
}) => {
  const [activePart, setActivePart] = useState('faces')
  const { parts, position } = botttParts[activePart]

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4 justify-center mb-6">
        <button onClick={() => setActivePart('faces')}>Faces</button>
        <button onClick={() => setActivePart('eyes')}>Eyes</button>
        <button onClick={() => setActivePart('mouths')}>Mouths</button>
        <button onClick={() => setActivePart('sides')}>Sides</button>
        <button onClick={() => setActivePart('tops')}>Tops</button>
      </div>
      <div className="flex space-x-4 mx-auto">
        {Object.keys(parts).map((part) => {
          const Part = parts[part]

          return (
            <button onClick={() => setPart[activePart](part)} key={part}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 180 180"
              >
                <g transform={`translate(${position.x}, ${position.y})`}>
                  <Part />
                </g>
              </svg>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default PartSelector
