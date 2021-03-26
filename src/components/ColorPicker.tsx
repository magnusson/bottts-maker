import { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { HexColorPicker } from 'react-colorful'
import store, { uiStore, setColor, toggleColorPicker } from '../store'
import { ColorSwatch } from './Icons'

const ColorPicker = observer(() => {
  const pickerNode = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e: MouseEvent) => {
    if (
      pickerNode &&
      pickerNode.current &&
      pickerNode.current.contains(e.target as Element)
    ) {
      return
    }
    toggleColorPicker(false)
  }

  return (
    <div className="picker cursor-pointer ml-4" ref={pickerNode}>
      <div
        className="w-16 h-16 flex items-center justify-center"
        onClick={() => toggleColorPicker(!uiStore.colorPickerOpen)}
      >
        <span
          className="flex items-center justify-center w-10 h-10 text-white rounded-full border-2 p-2"
          style={{ backgroundColor: store[uiStore.activePart].color }}
        >
          <ColorSwatch />
        </span>
      </div>

      {uiStore.colorPickerOpen && (
        <div className="absolute right-0 top-0 left-0 mr-16">
          <HexColorPicker
            color={store[uiStore.activePart].color}
            onChange={(color) => setColor(uiStore.activePart, color)}
          />
        </div>
      )}
    </div>
  )
})

export default ColorPicker
