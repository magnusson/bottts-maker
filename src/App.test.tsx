import { render } from '@testing-library/react'
import App from './App'

test('render div with className', () => {
  const { container } = render(<App />)
  expect(container.firstChild).toHaveClass(
    'flex flex-col h-screen justify-center items-center'
  )
})
