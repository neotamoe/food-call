import React from 'react'
import Heading from './Heading'
import Input from './Input'
import Label from './Label'
import Wrapper from './Wrapper'
import Card from './Card'
import Checkbox from './Checkbox'
import FormGroup from './FormGroup'

const SignUp = () => {
  return (
    <Wrapper>
      <Card>
        <Heading title="Sign Up"/>
        <p>Sign up to post a Food Call or receive emails when new food calls are posted.</p>
        <FormGroup>
          <Label name="email" display="inline"/>
          <Input type="email" placeholder="Enter your email"/>
        </FormGroup>
        <FormGroup>
          <Checkbox />
          <Label name="I want to post..." display="inline"/>
        </FormGroup>
        <FormGroup>
          <Checkbox />
          <Label name="I want to receive email notifications" display="inline"/>
        </FormGroup>
      </Card>
    </Wrapper>  
  )
}

export default SignUp