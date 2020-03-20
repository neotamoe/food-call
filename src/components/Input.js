import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  display: inline;
  padding-left: 10px;
`

const Input = (props) => {
  return (
      <StyledInput
        name={props.name} 
        ref={props.ref}
        type={props.type} 
        placeholder={props.placeholder} 
        accept={props.accept ? props.accept : ''}
        id={props.id ? props.id : ''}
        style={props.style}
        value={props.value}
      />
  )
}

export default Input