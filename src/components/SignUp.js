import React, { useState } from 'react'
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
  const onFormSubmit = data => {console.log(typeof data.post); console.log(typeof data.receive); console.log(data)}
  const handleCheckboxChange = event => {
    console.log(`event.target.name: ${event.target.name}`)
    console.log(`event.target.checked: ${event.target.checked}`)
    setState({ ...state, [event.target.name]: event.target.checked });
  }
  const [state, setState] = useState({
    post: false,
    receive: false
  });
  
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
              control={<Checkbox ref={props.inputRef} value={state.post} color="primary" name="post" onChange={handleCheckboxChange} />}
              label="I want to post..."
              labelPlacement="end"
              inputRef={register}
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              value="receive"
              control={<Checkbox ref={props.inputRef} value={state.receive} color="primary" name="receive" onChange={handleCheckboxChange} />}
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