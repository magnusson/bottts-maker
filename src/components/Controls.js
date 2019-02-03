import React, { Component } from 'react'
import Slider from './Slider'

class Controls extends Component {
  handleChange = e => {
    let typeValue = Object.assign({}, this.props[e.target.name])
    typeValue.value = e.target.value
    this.props.setType({ [e.target.name]: typeValue })
  }
  render() {
    const { side, top, face, eyes, mouth, children } = this.props
    return (
      <div>
        <Slider
          label="Top"
          id="top"
          max={top.max}
          value={top.value}
          setValue={this.handleChange}
        />
        <Slider
          label="Side"
          id="side"
          max={side.max}
          value={side.value}
          setValue={this.handleChange}
        />
        <Slider
          label="Face"
          id="face"
          max={face.max}
          value={face.value}
          setValue={this.handleChange}
        />
        <Slider
          label="Eyes"
          id="eyes"
          max={eyes.max}
          value={eyes.value}
          setValue={this.handleChange}
        />
        <Slider
          label="Mouth"
          id="mouth"
          max={mouth.max}
          value={mouth.value}
          setValue={this.handleChange}
        />
        {children}
      </div>
    )
  }
}
export default Controls
