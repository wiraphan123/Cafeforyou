import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import Showcafe from '../components/Showcafe'
import { Title, Subtitle } from '../components/Typography'
import transitnumber8 from '../assets/transitnumber8.jpg';
import wakeupcafe from '../assets/wakeup-cafe.jpg';
import starbuck from '../assets/starbuck.jpg';

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
  color: #2F4F4F;
}
`
const title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  padding: 1rem 0;
`
const Container = styled.div`
  
  
`

const Content = styled.div`
  padding-bottom: 2rem;
  display:flex;
`

const Test = styled.div`
font-size:25px;
padding:27px;
text-align:center;

`

function Home() {
  return (
    <>
      <BackgroundBlock src={backgroundImage}>
      <Title> Cafe For You </Title>
          <Subtitle> Recommended and Reviwe </Subtitle>
          <Button as='a' href='#content'> Review  </Button>
        </BackgroundBlock>
        
      <Container>
        <Test>
          Recommended
          </Test>
          
          <Content id ='content'>
          
          <Showcafe images={transitnumber8}>
            <h4>Transitnumber8</h4>
            <p>ร้านกาแฟ/ชาเบเกอรี/เค้กของหวาน</p>
          </Showcafe>
          <Showcafe images={wakeupcafe}>
            <h4>Wake Up</h4>
            <p>ร้านกาแฟ/ชาเบเกอรี/เค้กของหวาน</p>
          </Showcafe>
          <Showcafe images={starbuck}>
            <h4>Starduck</h4>
            <p>ร้านกาแฟ/ชาเบเกอรี/เค้กของหวาน</p>
          </Showcafe>
        </Content>
      </Container>
      </>
  )
}

export default Home