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
  // max-width: 90%;
  // max-height: 200px;
  // width: auto;
  // height: auto;
  // overflow-y: hidden;
  object-fit: cover;
  width: 90%;
  height: 190px;
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