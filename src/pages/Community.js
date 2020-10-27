import React, { Component } from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/community.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Link } from 'react-router-dom'

const Title = styled.div`
font-size:230px;
color:white;
`

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
    border:1px solid black;
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


export default class Community extends Component {
    constructor() {
        super()

        this.state = {
            review: '',
            comment: '',
            reviews: ["มีร้านคาเฟ่ที่มีใกล้มอบ้างครับ","มีร้านคาเฟ่ที่ไหนถ่ายรูปบ้างคะ"],
            comments: ['WAKE UP ','TRANSIT NO.8']
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.submitReview = this.submitReview.bind(this)
        this.submitComment = this.submitComment.bind(this)


    }

    handleInputChange(event) {
        let name = event.target.name
        let value = event.target.value

        this.setState({ [name]: value })
    }

    submitReview() {
        let reviews = this.state.reviews
        let review = this.state.review
        reviews.push(review)

        this.setState({ reviews: reviews })

    }

    submitComment() {
        let comments = this.state.comments
        let comment = this.state.comment
        comments.push(comment)

        this.setState({ comments: comments })

    }

 
    render() {
        return (
            <div>
                <BackgroundBlock src={backgroundImage}>
                    <Title>Community</Title>
                </BackgroundBlock>

                <ContainerWrapper>
                    <Container>
                        <p>COMMENT</p>
                        <Content>
                            
                            {this.state.comments.map((comment) => {
                                return (
                                        <p>{comment}</p>                                 
                                )
                            })}
                        </Content>
                    </Container>

                    <Container>
                        <p>REVIEW/POST</p>
                        <Content>
                           
                            {this.state.reviews.map((review) => {
                                return (
                                    <p>{review}</p>
                                )
                            })}

                        </Content>
                    </Container>
                </ContainerWrapper>


                <ContainerBox>
                    <p>COMMENT & REVIWE</p>
                </ContainerBox>
                <Test>
                    <div style={{ marginTop: "4em" }}>
                        <Input type="text" name="comment" onChange={this.handleInputChange}></Input>
                        <Button onClick={this.submitComment}>Submit Comment</Button>
                    </div>
                    <div style={{ margin: "2em" }}>
                        <Input type="text" name="review" onChange={this.handleInputChange}></Input>
                        <Button onClick={this.submitReview}>Submit Review</Button>
                    </div>
                </Test>
            </div>
        )
    }
}