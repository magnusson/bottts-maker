import { useEffect, useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import store, { setColor } from '../store'

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false)
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
    setIsOpen(false)
  }

  return (
    <div className="picker cursor-pointer ml-4" ref={pickerNode}>
      <div
        className="w-16 h-16 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="flex items-center justify-center w-10 h-10 rounded-full border-2"
          style={{ backgroundColor: store[store.activePart].color }}
        >
          🎨
        </span>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-0 left-0 mr-16">
          <HexColorPicker
            color={store[store.activePart].color}
            onChange={(color) => setColor(store.activePart, color)}
          />
        </div>
      )}
    </div>
  )
}

export default ColorPicker
