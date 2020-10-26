import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/login-register.jpg'
import { Link } from 'react-router-dom'


const  Containerleft = styled.div`
    img{
        width: 50vw;
        height: 100vh;
    }
`

const Containerright = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-weight: bold;
    }
`

const Test = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`


const Input = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    padding: 0 30px;
    height: 30px;
    width: 400px;
    margin-top: 20px;
`


const Button = styled.button`
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


function Register (){
    return(
        <>
        <Test>
        <Containerleft>
         <img src = {backgroundImage} />
         </Containerleft>
        <Containerright>
            <h1>REGISTER</h1>
            <Input placeholder='FRISTNAME(EX-WIRAPHAN)'></Input>
            <Input placeholder='LASTNAME(EX-LANOI)'></Input>
            <Input placeholder='G-MAIL(EX-Abs@gmail.com)'></Input> 
            <Input placeholder='PASSWORD(EX-Baa123456)'></Input>
            <Button><Link to='/Login'>SIGN UP</Link></Button>
         </Containerright>
        </Test> 
        </>
        )
    }
export default Register