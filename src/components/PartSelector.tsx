import { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import store, { uiStore, setActivePart, setPart } from '../store'
import botttParts from '../botttParts'
import ColorPicker from './ColorPicker'

const PartSelector = observer(() => {
  const partsElement = useRef<HTMLInputElement>(null)
  const { parts, position } = botttParts[uiStore.activePart]

  const changeActivePart = (type: string) => {
    setActivePart(type)
    partsElement.current!.scrollLeft = 0
  }

  return (
    <>
      <div className="flex space-x-4 justify-center mb-6">
        <button onClick={() => changeActivePart('faces')}>Faces</button>
        <button onClick={() => changeActivePart('eyes')}>Eyes</button>
        <button onClick={() => changeActivePart('mouths')}>Mouths</button>
        <button onClick={() => changeActivePart('sides')}>Sides</button>
        <button onClick={() => changeActivePart('tops')}>Tops</button>
      </div>
      <div className="flex justify-center relative">
        <div
          className="max-w-full self-center flex space-x-4 overflow-x-auto"
          ref={partsElement}
        >
          {Object.keys(parts).map((part) => {
            const Part = parts[part]

            return (
              <button
                onClick={() => setPart(uiStore.activePart, part)}
                key={part}
              >
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
        {store[uiStore.activePart].color && <ColorPicker />}
      </div>
    </>
  )
})

export default PartSelector
