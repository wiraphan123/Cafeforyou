import React from 'react'
import styled from 'styled-components'
const BackgroundImage = styled.div`
  height: ${props => props.height}vh;
  width: auto;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`
const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
function BackgroundBlock({ src, height = 100, width = 100, children, backgroundPosition = 'center', backgroundSize = 'cover' }) {
    return (
        <BackgroundImage src={src} height={height}>
          <BackgroundOverlay>
              {children}
          </BackgroundOverlay>
        </BackgroundImage>
    )
  }
export default BackgroundBlock