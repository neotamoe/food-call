import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 33%;
  display: inline-block;
`
const Card = styled.div`
  border: 1px solid grey;
  width: 90%;
  margin: 20px;
  height: 400px;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: purple;
`;

const foodCard = (props) => {
  return (
    <Wrapper>
      <Card> 
        <Title>{props.name}</Title>
      </Card>
    </Wrapper>
  )
}

export default foodCard