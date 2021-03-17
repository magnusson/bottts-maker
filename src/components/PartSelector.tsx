import { useState, Dispatch, SetStateAction } from 'react'
import botttParts from '../util'

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
      </div>
      <div className="flex space-x-4 mb-6">
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
                <g
                  id="eyes_part"
                  transform={`translate(${position.x}, ${position.y})`}
                >
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
