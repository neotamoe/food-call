import React from 'react'
import Heading from './Heading'
import InputLabel from './InputLabel'
import Wrapper from './Wrapper'
import Card from './Card'

const SignUp = () => {
  return (
    <Wrapper>
      <Card>
        <Heading title="Sign Up"/>
        <p>Sign up to post a Food Call or receive emails when new food calls are posted.</p>
        <InputLabel label="email" type="email" placeholder="Enter your email"/>
        <InputLabel label="I want to post" type="checkbox"/>
        <InputLabel label="I want to receive email notifications" type="checkbox"/>
      </Card>
    </Wrapper>  
  )
}

export default SignUp