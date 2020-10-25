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

const Names = styled.div`
  font-size:100px;
  padding:19%;
  text-align: center;
  color: white;
`

const ImgBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  img{
  width: 50vw;
  height: 100vh;
  }
`
const Box = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  height: 500px;
  width: 400px;
  border: 2px solid black;
  margin-bottom: -49px;
  border-radius: 15px;
  background-color:#F0F8FF;
  a{
    padding:15px;
    display:flex;
    
  
  }
`

const Button = styled.div`
background-color: unset;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px 30px;
    color: gray;
    margin-top: 100px;
    cursor: pointer;
    :hover{
        background-color: gray;
        color: white;
    }
  `

function Review () {
  return (
      <>
    <BackgroundBlock src = {backgroundImage}>

      <Title>
        review
      </Title>
      </BackgroundBlock>
      <ReviewBackground>
        <h1>
        <Names>
          WAKE UP CAFE
        </Names>
        </h1>
</ReviewBackground>

  <ImgBackground>
  <Box>
    <Text>
      <a>ชื่อร้าน WAKE UP</a>
      <a>จำหน่ายกาแฟ | เบเกอรี | เค้ก | </a>
      <a>รีวิว</a>
      <a>เป็นร้านกาแฟที่สามารถนั่งได้24ชั่วโมง และสามารถทำงานได้มีพื้นที่มีตัวที่ดีมากๆ
        ครับอยู่ใกล้มหาวิทยาลัยเชียงใหม่ด้วยครับ...
      </a>
      <a>สถานที่ตั้ง</a>
      <a>เชียงใหม่ (อยู่หน้ามหาวิทยาลัยเชียงใหม่ ติดกับตลาดมาลินพลาซ่า)</a>
      <a>เบอร์ติดต่อ 052-000596</a>
    </Text>
  </Box>
    <img src = {backgroundImage2} />
  </ImgBackground>
      </>

  )
}
export default Review