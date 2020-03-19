import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`

const Header = props => {
  return (
    <StyledHeader>{props.children}</StyledHeader>
  )
}

export default Header