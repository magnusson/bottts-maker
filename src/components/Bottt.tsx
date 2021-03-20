import { AnimatePresence } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import store from '../store'
import Part from './Part'

const Bottt = observer(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="256"
    viewBox="0 0 180 180"
    className="mx-auto"
  >
    <AnimatePresence initial={false}>
      <Part type="tops" part={store.tops.part} key={store.tops.part} />
      <Part type="sides" part={store.sides.part} key={store.sides.part} />
      <Part type="faces" part={store.faces.part} key={store.faces.part} />
      <Part type="eyes" part={store.eyes.part} key={store.eyes.part} />
      <Part type="mouths" part={store.mouths.part} key={store.mouths.part} />
    </AnimatePresence>
  </svg>
))

export default Bottt
