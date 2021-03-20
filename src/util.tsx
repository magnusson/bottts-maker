import { FC } from 'react'
import { motion } from 'framer-motion'
import botttParts from './botttParts'

export const animation = (Component: FC) => ({
  partAttributes,
}: {
  partAttributes: Record<string, Record<string, number> | string>
}) => (
  <motion.g {...partAttributes}>
    <Component />
  </motion.g>
)

export const getRandomPart = (type: string) => {
  const parts = Object.keys(botttParts[type].parts)

  return parts[(parts.length * Math.random()) << 0]
}

export const randomHex = () => {
  return '#' + Math.random().toString(16).slice(2, 8)
}
