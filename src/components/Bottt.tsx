import { AnimatePresence } from 'framer-motion'
import Part from './Part'

const Bottt = ({
  face,
  eyes,
  mouths,
  sides,
  tops,
}: {
  face: string
  eyes: string
  mouths: string
  sides: string
  tops: string
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="256"
    viewBox="0 0 180 180"
  >
    <AnimatePresence initial={false}>
      <Part type="tops" part={tops} key={tops} />
      <Part type="sides" part={sides} key={sides} />
      <Part type="faces" part={face} key={face} />
      <Part type="eyes" part={eyes} key={eyes} />
      <Part type="mouths" part={mouths} key={mouths} />
    </AnimatePresence>
  </svg>
)

export default Bottt
