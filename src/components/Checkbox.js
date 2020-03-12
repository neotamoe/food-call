import React from 'react'
import styled from 'styled-components'

const StyledCheckbox = styled.input`
  height: 30px;
  display: inline;
`

const Checkbox = (props) => {
  return (
      <StyledCheckbox type="checkbox"/>
  )
}

export default Checkbox