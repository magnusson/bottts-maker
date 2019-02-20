import React, { Component } from 'react'
import styled from 'styled-components'

const CreditsWrapper = styled.div`
  font-size: 12px;
  line-height: 20px;

  a {
    font-weight: bold;
    text-decoration: none;
  }
`

class Credits extends Component {
  render() {
    return (
      <CreditsWrapper>
        <p>
          Bottts designed by{' '}
          <a
            href="https://twitter.com/pablostanley"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pablo Stanley
          </a>{' '}
          <span role="img" aria-label="Artist Palette">
            🎨
          </span>
        </p>
        <p>
          Developed by{' '}
          <a
            href="https://www.rickardmagnusson.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rickard Magnusson
          </a>{' '}
          <span role="img" aria-label="Man Technologist">
            👨‍💻
          </span>
        </p>
        <p>
          Original Sketch library can be found at{' '}
          <a
            href="https://bottts.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            bottts.com
          </a>
        </p>
        <p>
          Code can be found at{' '}
          <a
            href="https://github.com/magnusson/bottts-maker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </CreditsWrapper>
    )
  }
}
export default Credits
