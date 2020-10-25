import React from 'react'
import useScroll from '../../utils/useScroll'
import { Link } from 'react-router-dom'
import { Container, Wrapper, Logo, ActionContainer, Action, LogoImage} from './styles'
import LogoImg from '../../assets/Weblogo.png'

function NavBar() {
  const isScroll = useScroll({scrollRanger: 20})
  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <LogoImage>
          <img scr={LogoImg}/>
        </LogoImage>
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