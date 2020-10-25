import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/reviwe.jpg'
import backgroundImage2 from '../assets/wakeup.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Title } from '../components/Typography'

const ReviewBackground = styled.div`
h1{
  width: 100%;
  height: 100vh;
  padding: 2%;
  text-align: center;
  background-color: #A9A9A9 ;
}
`

const Test = styled.div`
font-size:150px;
padding:15%;
text-align: center;
color:white;
`

const BoxReviwe = styled.div`
`


function Review () {
  return (
    <>
    <BackgroundBlock src = {backgroundImage}>

      <Title>
        reviwe
      </Title>
      </BackgroundBlock>
      <ReviewBackground>
        <h1>
        <Test>
          WAKE UP CAFE
        </Test>
        </h1>

        <BoxReviwe>

        </BoxReviwe>
        

      </ReviewBackground>
    
    <BackgroundBlock src = {backgroundImage2}>
    </BackgroundBlock>
    
    </>

  )
}
export default Review