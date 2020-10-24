import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/community.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Title,} from '../components/Typography'
import { Link } from 'react-router-dom'


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

const ContainerBox = styled.div`


p{
justify-content:center;
align-items:center;
display:flex;
padding:30px;
}
`
const Test = styled.div`
width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const Input = styled.input`
border: none;
    border-bottom: 1px solid gray;
    padding: 0 30px;
    height: 30px;
    width: 500px;
    margin-top: -58px;
    `

const Button = styled.div`
background-color: unset;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px 30px;
    color: gray;
    margin-top: 45px;
    cursor: pointer;
    :hover{
        background-color: gray;
        color: white;
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
                
                
                <ContainerBox> 
                    <p>ASK?</p>
                </ContainerBox>
                <Test>
                <Input type="text" placeholder ='The message'></Input>
                <Button><Link to='/Community'>POST</Link></Button>
                </Test>

</>
    )
}
export default Community