import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid'
import Text from './Text'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #660033;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
`

const StyledDiv = styled.div`
  text-align: left;
  width: 90%;
`

const foodCard = props => {
  const dateTime = new Date()
  const dateFormatted = dateTime.toUTCString()

  return (
    <Grid item={true} xs={12} sm={6} med={4}>
      <Card> 
        <Title>{props.name}</Title>
        <Image src={props.imgSrc} alt={props.name}/>
        <StyledDiv>
          <Text field="Date/Time Posted" fieldValue={dateFormatted}/>
          <Text field="Posted By" fieldValue={props.postedBy}/>
          <Text field="Description" fieldValue={props.description}/>
          <Text field="Location" fieldValue={props.location}/>
        </StyledDiv>
      </Card>
    </Grid>
  )
}

export default foodCard