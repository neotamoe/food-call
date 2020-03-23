import React from 'react'
import { useForm } from 'react-hook-form'

import Heading from './Heading'
import Input from './Input'
import Card from './Card'
import FormGroup from './FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import InputError from './InputError'
import Button from '@material-ui/core/Button'

const SignUp = props => {
  const { register, handleSubmit, errors } = useForm()
  const onFormSubmit = data => {console.log('is this working?'); console.log(data)}
  // state = { checked: false }
  const handleCheckboxChange = event => {
    console.log(`event.target.name: ${event.target.name}`)
    console.log(`event.target.checked: ${event.target.checked}`)
    // this.setState({ checked: event.target.checked })
  }
  
    return (
    <Grid item={true} xs={12} sm={6}>
      <Card>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Heading title="Sign Up"/>
          <p>Sign up to post a Food Call or receive emails when new food calls are posted.</p>
          <FormGroup>
            <Input id="email" name="email" type="email" placeholder="Enter your email" inputRef={register({required: true})} />
            {errors.email && <InputError>This field is required</InputError>}
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              value="post"
              onChange={handleCheckboxChange}
              control={<Checkbox ref={props.inputRef} color="primary" name="post" />}
              label="I want to post..."
              labelPlacement="end"
              inputRef={register}
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              value="receive"
              onChange={handleCheckboxChange}
              control={<Checkbox ref={props.inputRef} color="primary" name="receive" />}
              label="I want to receive email notifications..."
              labelPlacement="end"
              inputRef={register}
            />
          </FormGroup>
          <FormGroup>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </FormGroup>
        </form>
      </Card>
    </Grid>  
  )
}

export default SignUp