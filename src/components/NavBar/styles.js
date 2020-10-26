import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: ${props => (props.isScroll ? 'fixed' : 'static')};
  position: fixed;
  z-index: 1000;
  background-color: ${props => (props.isScroll ? '#DAA520' : 'rgba(0,0,0,0.3)')};
  transition: background-color .5s;
  /* display: flex;
  justify-content: space-between; */

`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex: 1;
  justify-content: space-between;

`
export const Logo = styled.div`
  font-size: 30px;
  font-weight: 300;
  width: 100px;
`
export const ActionContainer = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  a{
  padding: 0 1.7rem;
  }
`
export const Action = styled.li`
  list-style-type: none;
  color:white;
`
export const LoginContainer =styled.div`
  font-size: 20px;
  font-weight: 500;
`

export const LogoImage = styled.div`
  width:6%;
`