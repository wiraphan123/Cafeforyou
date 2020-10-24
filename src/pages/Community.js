import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/community.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Title,Text } from '../components/Typography'


const ContainerWrapper = styled.div`
    display: flex;
    justify-content:space-around;
`
const Container = styled.div`
    font-size:1rem;
    color:black;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding:50px;
    p{
      padding:15px;
    }
`
const Content = styled.div`
    border:2px solid black;
    padding:58px;
    border-radius:35px;
    p{
      border-bottom:1px solid black;
      display:flex;
      justify-items:center;
    }
`

function Community (){
    return(

    <>
    <BackgroundBlock src = {backgroundImage}>
    <Title>Community</Title>

    </BackgroundBlock>

        <ContainerWrapper>
            <Container>
                <p>COMMUNITY</p>
                <Content>
                    <p>WAKE UP หน้ามอ</p>
                    <p>TRANSIT NO.8</p>
                </Content>
            </Container>

            <Container>
                <p>POST</p>
                <Content>
                <p>มีร้านคาเฟ่ที่มีใกล้มอบ้างครับ</p>
                <p>มีร้านคาเฟ่ที่ไหนถ่ายรูปบ้างคะ</p>
                    
                </Content>
            </Container>
        </ContainerWrapper>

    </>
    )
}
export default Community