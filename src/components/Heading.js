import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #660033;
`
const Heading = (props) => {
  return (
    <Title>{props.title}</Title>
  )
}

export default Heading