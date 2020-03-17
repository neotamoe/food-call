import React from 'react'
import Heading from './Heading'
import Input from './Input'
import Label from './Label'
import Card from './Card'
import FormGroup from './FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'

const SignUp = () => {
  return (
    <Grid xs={12}>
      <Card>
        <Heading title="Sign Up"/>
        <p>Sign up to post a Food Call or receive emails when new food calls are posted.</p>
        <FormGroup>
          <Label name="email" display="inline"/>
          <Input type="email" placeholder="Enter your email"/>
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            value="post"
            control={<Checkbox color="primary" />}
            label="I want to post..."
            labelPlacement="end"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            value="receive"
            control={<Checkbox color="primary" />}
            label="I want to receive email notifications..."
            labelPlacement="end"
          />
        </FormGroup>
      </Card>
    </Grid>  
  )
}

export default SignUp