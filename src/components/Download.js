import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Button } from '../styles'
import saveAs from 'file-saver'

const canvasRef = React.createRef()

const SecretCanvas = styled.canvas`
  display: none;
`

class Download extends Component {
  downloadPNG = () => {
    const svg = ReactDOM.findDOMNode(this.props.svgRef.current)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const img = new Image()

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      canvas.toBlob(blob => {
        saveAs(blob, 'bottt.png')
      })
    }

    img.src = 'data:image/svg+xml;base64,' + btoa(svg.outerHTML)
  }
  render() {
    return (
      <>
        <Button onClick={this.downloadPNG}>Download</Button>
        <SecretCanvas
          width="180"
          height="180"
          style={{ display: 'none' }}
          ref={canvasRef}
        />
      </>
    )
  }
}
export default Download
