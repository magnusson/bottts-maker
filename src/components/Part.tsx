import { memo } from 'react'
import botttParts from '../util'

const Part = memo(({ type, part }: { type: string; part: string }) => {
  const { animation, parts } = botttParts[type]
  const Elem = animation(parts[part])

  return <Elem />
})

export default Part
