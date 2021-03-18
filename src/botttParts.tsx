import { FC } from 'react'
import { Artuito, Round1 } from './components/parts/Faces'
import { Hearts, RoundFrame1 } from './components/parts/Eyes'
import { Grill1, Smile1 } from './components/parts/Mouths'
import { Antenna1, Cables1 } from './components/parts/Sides'
import { Antenna, GlowingBulb1 } from './components/parts/Tops'

interface BotttParts {
  [index: string]: {
    parts: Record<string, FC>
    position: Record<string, number>
    partAttributes: Record<string, Record<string, number> | string>
  }
}

const botttParts: BotttParts = {
  faces: {
    parts: {
      artuito: Artuito,
      round1: Round1,
    },
    position: {
      x: 25,
      y: 44,
    },
    partAttributes: {
      initial: { translateX: 256 },
      animate: { translateX: 25 },
      exit: { translateX: -256 },
      style: { translateY: 44 },
      id: 'face_part',
    },
  },
  eyes: {
    parts: {
      hearts: Hearts,
      roundFrame1: RoundFrame1,
    },
    partAttributes: {
      initial: {
        scale: 1.5,
      },
      animate: {
        scale: 1,
      },
      style: { translateX: 38, translateY: 76 },
      id: 'eye_part',
    },
    position: {
      x: 38,
      y: 76,
    },
  },
  mouths: {
    parts: {
      grill1: Grill1,
      smile1: Smile1,
    },
    partAttributes: {
      initial: {
        translateX: 52,
        translateY: 256,
      },
      animate: {
        translateX: 52,
        translateY: 124,
      },
      exit: {
        translateX: 52,
        translateY: 256,
      },
      id: 'mouth_part',
    },
    position: {
      x: 52,
      y: 124,
    },
  },
  sides: {
    parts: {
      antenna1: Antenna1,
      cables1: Cables1,
    },
    partAttributes: {
      initial: {
        translateX: 0,
        translateY: -256,
      },
      animate: {
        translateX: 0,
        translateY: 66,
      },
      exit: {
        translateX: 0,
        translateY: 256,
      },
      id: 'side_part',
    },
    position: {
      x: 0,
      y: 66,
    },
  },
  tops: {
    parts: {
      antenna: Antenna,
      glowingBulb1: GlowingBulb1,
    },
    partAttributes: {
      initial: {
        translateX: 41,
        translateY: 75,
      },
      animate: {
        translateX: 41,
        translateY: 0,
      },
      exit: {
        translateX: 41,
        translateY: 75,
      },
      id: 'top_part',
    },
    position: {
      x: 41,
      y: 0,
    },
  },
}

export default botttParts
