import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/reviwe.jpg'
import backgroundImage2 from '../assets/reviwe2.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Title } from '../components/Typography'


function Review () {
  return (
    <>
    <BackgroundBlock src = {backgroundImage}>

      <Title>
        reviwe
      </Title>

      
    </BackgroundBlock>
    <BackgroundBlock src = {backgroundImage2}>

    </BackgroundBlock>
    </>

  )
}
export default Review