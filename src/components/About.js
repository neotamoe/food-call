import React from 'react'
import Heading from './Heading'
import Card from './Card'
import Grid from '@material-ui/core/Grid'

const About = () => {
  return (
    <Grid xs={12}>
      <Card>
        <Heading title="About"/>
        <p>Augsurg Food Call intends to ...</p>
      </Card>
    </Grid>  
  )
}

export default About