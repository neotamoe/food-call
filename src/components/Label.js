import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-size: 1.25em;
  margin-bottom: 5px;
`

const StyledLeftDiv = styled.div`
  text-align: left;
`

const Label = (props) => {
  return (
    <StyledLeftDiv>
      <StyledLabel style={{display: props.display}}>{props.label}</StyledLabel>
    </StyledLeftDiv>
  )
}

export default Label