import React, { Component } from 'react'
import { GithubPicker } from 'react-color'
import styled from 'styled-components'
import { Button } from '../styles'

const StyledPicker = styled(GithubPicker)`
  position: absolute;
  z-index: 1;
`

class ColorPicker extends Component {
  state = {
    showPicker: false
  }
  handleClick = () => {
    this.setState({
      showPicker: !this.state.showPicker
    })
  }
  updateColor = color => {
    let partObject = Object.assign({}, this.props.part)
    partObject.color = color.hex
    this.props.setColor({ [this.props.name]: partObject })
    this.setState({
      showPicker: false
    })
  }
  render() {
    return (
      <>
        <Button small onClick={this.handleClick}>
          <span role="img" aria-label="Color Picker">
            🎨
          </span>
          Select a color
        </Button>
        {this.state.showPicker && (
          <StyledPicker
            color={this.props.part.color}
            onChange={this.updateColor}
            width="212px"
            colors={[
              '#B80000',
              '#DB3E00',
              '#FCCB00',
              '#008B02',
              '#006B76',
              '#1273DE',
              '#004DCF',
              '#5300EB',
              '#EB9694',
              '#FAD0C3',
              '#FEF3BD',
              '#C1E1C5',
              '#BEDADC',
              '#C4DEF6',
              '#9CCC65',
              '#607D8B'
            ]}
          />
        )}
      </>
    )
  }
}
export default ColorPicker
