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
  text-align: center;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: purple;
`;

const Image = styled.img`
  width: 90%;
`

const foodCard = (props) => {
  const dateTime = new Date()
  const dateFormatted = dateTime.toUTCString()
  return (
    <Wrapper>
      <Card> 
        <Title>{props.name}</Title>
        <Image src={props.imgSrc} alt={props.imgAlt}/>
        <p>Date/Time: {dateFormatted}</p>
        <p>Posted By: {props.postedBy}</p>
        <p>Description: {props.description}</p>
        <p>Location: {props.location}</p>
      </Card>
    </Wrapper>
  )
}

export default foodCard