import React from 'react'

const Slider = props => {
  return (
    <div>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        type="range"
        id={props.id}
        name={props.id}
        min="0"
        max={props.max}
        value={props.value}
        onChange={props.setValue}
      />
    </div>
  )
}
export default Slider
