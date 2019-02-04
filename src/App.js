import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from './styles'
import { device } from './utils'
import Bottt from './components/Bottt/Bottt'
import Controls from './components/Controls'
import Download from './components/Download'

const botttRef = React.createRef()

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

const BotttWrapper = styled(Bottt)`
  margin: auto;
`

class App extends Component {
  state = {
    top: { value: 0, max: 10 },
    side: { value: 0, max: 6 },
    face: { value: 0, max: 7 },
    eyes: { value: 0, max: 15 },
    mouth: { value: 0, max: 10 },
    size: 256
  }
  setType = type => {
    this.setState(type)
  }
  randomizeBottt = () => {
    const { top, side, face, eyes, mouth } = this.state
    this.setState({
      top: {
        value: Math.round(Math.random() * (top.max - 0) + 0),
        max: top.max
      },
      side: {
        value: Math.round(Math.random() * (side.max - 0) + 0),
        max: side.max
      },
      face: {
        value: Math.round(Math.random() * (face.max - 0) + 0),
        max: face.max
      },
      eyes: {
        value: Math.round(Math.random() * (eyes.max - 0) + 0),
        max: eyes.max
      },
      mouth: {
        value: Math.round(Math.random() * (mouth.max - 0) + 0),
        max: mouth.max
      }
    })
  }
  render() {
    const { top, side, face, eyes, mouth, size } = this.state
    return (
      <Main>
        <BotttWrapper
          top={top}
          side={side}
          face={face}
          eyes={eyes}
          mouth={mouth}
          ref={botttRef}
          size={size}
        />
        <Controls
          top={top}
          side={side}
          face={face}
          eyes={eyes}
          mouth={mouth}
          setType={this.setType}
        >
          <Button onClick={this.randomizeBottt}>Randomize</Button>
          <Download svgRef={botttRef} size={size} />
        </Controls>
      </Main>
    )
  }
}
export default App
