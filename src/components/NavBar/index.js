import React from 'react'
import useScroll from '../../utils/useScroll'
import { Link } from 'react-router-dom'
import { Container, Wrapper, ActionContainer, Action, LogoImage} from './styles'
import Background from '../../assets/logohome.png'
import styled from 'styled-components'
import { useEffect } from 'react'

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

function NavBar() {
  const isScroll = useScroll({scrollRanger: 20})
  return (
    <Container isScroll={isScroll}>
      <Wrapper>
          <Logo />
        <ActionContainer>
          <Action>
            <Link to='/'>Home</Link>
          </Action>
          <Action>
            <Link to='/review'>Review</Link>
          </Action>
          <Action>
            <Link to='/community'>Community</Link>
          </Action>
          <Action>
            <Link to='/register'>Register</Link>
          </Action>
          <Action>
          <Link to='/login'>Login</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}
export default NavBar