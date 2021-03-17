import { FC } from 'react'
import { motion } from 'framer-motion'
import { Artuito, Round1 } from './components/parts/Faces'
import { Hearts, RoundFrame1 } from './components/parts/Eyes'

const faceAnimation = (Component: FC) => () => (
  <motion.g
    initial={{
      translateX: 256,
    }}
    animate={{
      translateX: 25,
    }}
    exit={{
      translateX: -256,
    }}
    style={{ translateY: 44 }}
    id="face_part"
  >
    <Component />
  </motion.g>
)

const eyesAnimation = (Component: FC) => () => (
  <motion.g
    initial={{
      scale: 1.5,
    }}
    animate={{
      scale: 1,
    }}
    style={{ translateX: 38, translateY: 76 }}
    id="eye_part"
  >
    <Component />
  </motion.g>
)

interface BotttParts {
  [index: string]: {
    parts: Record<string, FC>
    position: Record<string, number>
    animation: (Component: FC) => FC
  }
}

const botttParts: BotttParts = {
  faces: {
    parts: {
      face: Artuito,
      face2: Round1,
    },
    animation: faceAnimation,
    position: {
      x: 25,
      y: 44,
    },
  },
  eyes: {
    parts: {
      eyes: Hearts,
      eyes2: RoundFrame1,
    },
    animation: eyesAnimation,
    position: {
      x: 38,
      y: 76,
    },
  },
}

export default botttParts
