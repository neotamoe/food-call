import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid'

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
    <Grid item={true} xs={12} sm={6} med={4}>
      <Card> 
        <Title>{props.name}</Title>
        <Image src={props.imgSrc} alt={props.imgAlt}/>
        <p>Date/Time: {dateFormatted}</p>
        <p>Posted By: {props.postedBy}</p>
        <p>Description: {props.description}</p>
        <p>Location: {props.location}</p>
      </Card>
    </Grid>
  )
}

export default foodCard