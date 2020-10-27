import React from 'react'
import styled from 'styled-components'

const View = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
`
const TextBox = styled.div`
    justify-content: center;
    align-items: center;
    padding-bottom: 8%;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    height: 30px;
    width: 400px;
`

const TextPassword = styled.div`
    display:flex;
    flex-direction:column;
`

const Content = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    height:100vh;

`

const Inputs = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    height: 30px;
    width: 400px;
`

const Inputss = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    height: 30px;
    width: 400px;
`

const Box1 = styled.div`
padding-bottom:3%;
`

const Box2 = styled.div`
padding-bottom:3%;
`

const Box3 = styled.div`

`


const Button = styled.div`
    background-color: unset;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px 10px;
    color: gray;
    margin-top: 100px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    :hover{
        background-color: gray;
        color: white;
    }
`


function Password (){
    return(
    <>
        <Content>
            <View>
                <TextBox>
                    Recover new Password
                </TextBox>
                <TextPassword>
                    <Box1>
                        <Input placeholder='NEW PASSWORD' />
                    </Box1>       
                    <Box2>
                        <Inputs placeholder='CONFIRM PASSWORD' />
                    </Box2>
                    <Box3>
                        <Inputss placeholder='YOU G-MAIL' />
                    </Box3>       
                <Button>
                CONFIRM
                </Button>
                </TextPassword>
            </View>
        </Content> 
    </>
    )
}
export default Password