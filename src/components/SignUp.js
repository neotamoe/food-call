import React, { useState } from 'react'
import styled from 'styled-components'
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
import CircularProgress from '@material-ui/core/CircularProgress'

const StyledDiv = styled.div`
  text-align: left;
`

const SignUp = props => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, errors, getValues } = useForm()

  const onFormSubmit = data => {
    console.log(data)
    setIsSubmitting(true)
  }  
  const validate = () => {
    return ["post", "receive"].some(name => getValues()[name]);
  };

  return (
    <Grid item={true} xs={12} sm={6}>
      <Card>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Heading title="Sign Up"/>
          <p>Sign up to post a Food Call or receive emails when new food calls are posted.</p>
          <FormGroup>
            <Input id="email" name="email" type="email" placeholder="Enter your email" inputRef={register({required: true})} />
            {errors.email && errors.email.type === 'required' && <InputError>This field is required</InputError>}
          </FormGroup>
          <StyledDiv>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox 
                    ref={props.inputRef} 
                    color="primary" 
                    name="post" 
                  />}
                label="I want to post..."
                labelPlacement="end"
                inputRef={register({
                  onebox: 'You must check at least one checkbox!',
                  validate: validate,
                })}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox 
                    ref={props.inputRef} 
                    color="primary" 
                    name="receive" 
                  />}
                label="I want to receive email notifications..."
                labelPlacement="end"
                inputRef={register({
                  onebox: 'You must check at least one checkbox!',
                  validate: validate,
                })}
              />
            </FormGroup>
              { 
                (errors.post && <InputError>You must check at least one box</InputError>) ||
                (errors.receive && <InputError>You must check at least one box</InputError>)
              }
          </StyledDiv>
          <FormGroup>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            {
              isSubmitting 
              ? <CircularProgress style={{marginBottom: '-15px', marginLeft: '20px'}}/>
              : null
            }
          </FormGroup>
        </form>
      </Card>
    </Grid>  
  )
}

export default SignUp