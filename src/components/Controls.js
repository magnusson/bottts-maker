import React, { Component } from 'react'
import styled from 'styled-components'
import { device } from '../utils'
import Slider from './Slider'
import ColorPicker from './ColorPicker'

const ControlsWrapper = styled.div`
  background-color: #fff;
  color: #333;
  padding: 20px;

  @media ${device.tablet} {
    width: 256px;
  }
`

const ControlsTitle = styled.h3`
  font-weight: 700;
`

const StyledSlider = styled(Slider)`
  margin-bottom: 12px;
`

class Controls extends Component {
  handleChange = e => {
    let typeValue = Object.assign({}, this.props[e.target.name])
    typeValue.value = e.target.value
    this.props.setType({ [e.target.name]: typeValue })
  }
  render() {
    const { side, top, face, eyes, mouth, children } = this.props
    return (
      <ControlsWrapper>
        <ControlsTitle>Controls</ControlsTitle>
        <StyledSlider
          label="Top"
          id="top"
          max={top.max}
          value={top.value}
          setValue={this.handleChange}
        />
        <ColorPicker part={top} name="top" setColor={this.props.setColor} />
        <StyledSlider
          label="Side"
          id="side"
          max={side.max}
          value={side.value}
          setValue={this.handleChange}
        />
        <ColorPicker part={side} name="side" setColor={this.props.setColor} />
        <StyledSlider
          label="Face"
          id="face"
          max={face.max}
          value={face.value}
          setValue={this.handleChange}
        />
        <ColorPicker part={face} name="face" setColor={this.props.setColor} />
        <StyledSlider
          label="Eyes"
          id="eyes"
          max={eyes.max}
          value={eyes.value}
          setValue={this.handleChange}
        />
        <StyledSlider
          label="Mouth"
          id="mouth"
          max={mouth.max}
          value={mouth.value}
          setValue={this.handleChange}
        />
        {children}
      </ControlsWrapper>
    )
  }
}
export default Controls
