import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import Card from './Card'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: purple;
`

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