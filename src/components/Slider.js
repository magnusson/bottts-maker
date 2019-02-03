import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
  height: auto;
`
const LabelTitle = styled.h3`
  font-size: 14px;
  display: block;
  margin-bottom: 4px;
`

const RangeInput = styled.input`
  display: block;

  &[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 20px;
    background: transparent;
  }

  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #fff;
    border: solid 2px #b8b5c0;
    cursor: pointer;
  }

  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 20px;
    cursor: pointer;
    background-color: #b8b5c0;
    border-radius: 999px;
  }
`

const Slider = props => {
  return (
    <Label htmlFor={props.id} className={props.className}>
      <LabelTitle>{props.label}</LabelTitle>
      <RangeInput
        type="range"
        id={props.id}
        name={props.id}
        min="0"
        max={props.max}
        value={props.value}
        onChange={props.setValue}
      />
    </Label>
  )
}
export default Slider
