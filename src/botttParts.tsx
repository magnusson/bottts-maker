import { FC } from 'react'
import {
  ArtuioFace,
  RoboCopFace,
  RoundFace1,
  RoundFace2,
  SquareFace1,
  SquareFace2,
  SquareFace3,
  SquareFace4,
} from './components/parts/Faces'
import {
  ArtuitoEye,
  Bulging,
  Dizzy,
  Eva,
  Frame1,
  Frame2,
  Glow,
  Hal,
  Happy,
  Hearts,
  RobocopEye,
  RoundEye,
  RoundFrame1,
  RoundFrame2,
  Sensor,
  Shade,
} from './components/parts/Eyes'
import {
  ArtuitoMouth,
  Bite,
  Diagram,
  Grill1,
  Grill2,
  Grill3,
  RobocopMouth,
  Smile1,
  Smile2,
  SquareMouth1,
  SquareMouth2,
} from './components/parts/Mouths'
import {
  Antenna1,
  Antenna2,
  Cables1,
  Cables2,
  RoundSide,
  SquareSide,
  SquareAssymetric,
} from './components/parts/Sides'
import {
  Antenna,
  ArtuitoTop,
  Bulb1,
  Bulb2,
  GlowingBulb1,
  GlowingBulb2,
  Horns,
  Lights,
  Plankton,
  Pyramid,
  Radar,
} from './components/parts/Tops'

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
      artuioFace: ArtuioFace,
      roboCop: RoboCopFace,
      round1: RoundFace1,
      round2: RoundFace2,
      squareFace1: SquareFace1,
      squareFace2: SquareFace2,
      squareFace3: SquareFace3,
      squareFace4: SquareFace4,
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
      artuitoEye: ArtuitoEye,
      bulging: Bulging,
      dizzy: Dizzy,
      eva: Eva,
      frame1: Frame1,
      frame2: Frame2,
      glow: Glow,
      hal: Hal,
      happy: Happy,
      hearts: Hearts,
      robocopEye: RobocopEye,
      round: RoundEye,
      roundFrame1: RoundFrame1,
      roundFrame2: RoundFrame2,
      sensor: Sensor,
      shade: Shade,
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
      Artuito: ArtuitoMouth,
      bite: Bite,
      diagram: Diagram,
      grill1: Grill1,
      grill2: Grill2,
      grill3: Grill3,
      robocopMouth: RobocopMouth,
      smile1: Smile1,
      smile2: Smile2,
      squareMouth1: SquareMouth1,
      squareMouth2: SquareMouth2,
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
      antenna2: Antenna2,
      cables1: Cables1,
      cables2: Cables2,
      roundSide: RoundSide,
      squareSide: SquareSide,
      squareAssymetric: SquareAssymetric,
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
      artuitoTop: ArtuitoTop,
      bulb1: Bulb1,
      bulb2: Bulb2,
      glowingBulb1: GlowingBulb1,
      glowingBulb2: GlowingBulb2,
      horns: Horns,
      lights: Lights,
      plankton: Plankton,
      pyramid: Pyramid,
      radar: Radar,
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
