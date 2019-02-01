import React from 'react'
import ReactDOM from 'react-dom'
import Bottt from './components/Bottt/Bottt'

function App() {
  return (
    <div>
      <h1>Bottts Maker</h1>
      <Bottt />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
