import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  color: red;
`

const InputError = props => {
  return (
    <StyledSpan>{props.children}</StyledSpan>
  )
}

export default StyledSpan;
