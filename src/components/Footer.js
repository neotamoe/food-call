import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  margin-top: 25px;
  padding-bottom: 50px;
`

const Footer = props => {
  return (
    <StyledFooter>{props.children}</StyledFooter>
  )
}

export default Footer