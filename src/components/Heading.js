import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`
const Heading = (props) => {
  return (
    <Title>{props.title}</Title>
  )
}

export default Heading