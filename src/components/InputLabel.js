import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 50%;
  height: 30px;
  display: inline;
`

const Label = styled.label`
  font-size: 1.25em;
  width: 50%;
  display: inline;
`

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
`

const InputLabel = (props) => {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Input type={props.type} placeholder={props.placeholder}/>
    </Wrapper>
  )
}

export default InputLabel