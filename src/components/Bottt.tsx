import { AnimatePresence } from 'framer-motion'
import Part from './Part'

const Bottt = ({ face, eyes }: { face: string; eyes: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="256"
    viewBox="0 0 180 180"
  >
    <AnimatePresence initial={false}>
      <Part type="faces" part={face} key={face} />
      <Part type="eyes" part={eyes} key={eyes} />
    </AnimatePresence>
  </svg>
)

export default Bottt
