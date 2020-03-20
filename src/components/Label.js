import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
  font-size: 1.25em;
  margin-bottom: 5px;
`

const Label = (props) => {
  return (
      <StyledLabel style={{display: props.display}}>{props.label}</StyledLabel>
  )
}

export default Label