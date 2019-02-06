const breakpoints = {
  tablet: '768px'
}

export const device = {
  tablet: `(min-width: ${breakpoints.tablet})`
}

export const randomHex = () => {
  return (
    '#' +
    Math.random()
      .toString(16)
      .slice(2, 8)
  )
}
