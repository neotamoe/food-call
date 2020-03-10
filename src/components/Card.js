import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
  width: 90%;
  margin: 20px;
  text-align: center;
`

const Card = (props) => {
  return (
    <CardDiv {...props}>
      {props.children}
    </CardDiv>
  )
}

export default Card