import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
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
 
const Content = styled.div`
padding: 4rem;
`

function Home() {
  return (
    <>
      <BackgroundBlock src={backgroundImage}>
      <Title> Cafe For You </Title>
          <Subtitle> recommended and reviwe </Subtitle>
          <Button as='a' href='#content'>Look Review  </Button>
        </BackgroundBlock>
        <Content id='content'>
        
        
        </Content>
      </>
  )
}
export default Home