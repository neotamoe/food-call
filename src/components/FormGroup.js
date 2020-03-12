import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const FormGroup = (props) => {
  return (
  <StyledDiv>{props.children}</StyledDiv>
  )
}

export default FormGroup