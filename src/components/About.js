import React from 'react'
import Heading from './Heading'
import Card from './Card'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const About = () => {
  return (
    <Grid item={true} xs={12}>
      <Divider variant="middle"/>
      <Card>
        <Heading title="About Augsburg Food Call"/>
        <p>Augsurg Food Call intends to ...</p>
      </Card>
    </Grid>  
  )
}

export default About