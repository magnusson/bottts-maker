import { observable, action } from 'mobx'
import { randomHex, getRandomPart } from './util'

const store: Record<string, any> = observable({
  activePart: 'faces',
  faces: {
    part: null,
    color: null,
  },
  eyes: {
    part: null,
  },
  mouths: {
    part: null,
  },
  sides: {
    part: null,
    color: null,
  },
  tops: {
    part: null,
    color: null,
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
  (activePart: string) => (store.activePart = activePart)
)

export const setPart = action(
  (type: string, part: string) => (store[type].part = part)
)

export const setColor = action(
  (type: string, color: string) => (store[type].color = color)
)

export default store
