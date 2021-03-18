import { memo } from 'react'
import botttParts from '../botttParts'
import { animation } from '../util'

const Part = memo(({ type, part }: { type: string; part: string }) => {
  const { partAttributes, parts } = botttParts[type]
  const Elem = animation(parts[part])

  return <Elem partAttributes={partAttributes} />
})

export default Part
