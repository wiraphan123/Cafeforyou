import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import Showcafe from '../components/Showcafe'
//import SlideShow from '../components/SlideShow'

import { Title, Subtitle } from '../components/Typography'

const Button = styled.button`
padding: .2rem .5rem;
background-color:transparent;
border: #fff solid 3px;
border-radius:5px;
margin:1rem;
color: #fff ;
cursor:pointer;
transition:background-color .3s;

text-transform: uppercase;


&:hover{
  background-color: #fff;
  color: #cf7b7e;
}
`
const title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  padding: 1rem 0;
`
const Container = styled.div`
  padding: 2rem 6rem;
`

const Content = styled.div`
  padding-bottom: 2rem;
`

function Home() {
  return (
    <>
      <BackgroundBlock src={backgroundImage}>
      <Title> Cafe For You </Title>
          <Subtitle> recommended and reviwe </Subtitle>
          <Button as='a' href='#content'>Look Review  </Button>
        </BackgroundBlock>
        
      <Container>
        <Content id ='content'>
        <Title> RECOMMENDED </Title>
          <Showcafe>
            <h4>Cafe</h4>
            <p>Wake up</p>
          </Showcafe>
        </Content>
      </Container>
      </>
  )
}

export default Home