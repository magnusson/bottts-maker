import { observable, action } from 'mobx'
import { randomHex, getRandomPart } from './util'

interface states {
  activePart: string
  colorPickerOpen: boolean
}

export const uiStore: states = observable({
  activePart: 'faces',
  colorPickerOpen: false,
})

const store: Record<string, Record<string, string>> = observable({
  faces: {
    part: '',
    color: '',
  },
  eyes: {
    part: '',
  },
  mouths: {
    part: '',
  },
  sides: {
    part: '',
    color: '',
  },
  tops: {
    part: '',
    color: '',
  },
})

export const randomizeBottt = action(() => {
  store.faces.part = getRandomPart('faces')
  store.eyes.part = getRandomPart('eyes')
  store.mouths.part = getRandomPart('mouths')
  store.sides.part = getRandomPart('sides')
  store.tops.part = getRandomPart('tops')
  store.faces.color = randomHex()
  store.sides.color = randomHex()
  store.tops.color = randomHex()
})

export const setActivePart = action(
  (activePart: string) => (uiStore.activePart = activePart)
)

export const setPart = action(
  (type: string, part: string) => (store[type].part = part)
)

export const setColor = action(
  (type: string, color: string) => (store[type].color = color)
)

export const toggleColorPicker = action(
  (isOpen: boolean) => (uiStore.colorPickerOpen = isOpen)
)

export default store
