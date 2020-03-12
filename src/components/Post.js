import React from 'react'
import Heading from './Heading'
import Wrapper from './Wrapper'
import Card from './Card'
import Input from './Input'
import Label from './Label'
import FormGroup from './FormGroup'

const Post = () => {
  return (
    <Wrapper>
      <Card>
        <Heading title="Post Your Food Call"/>
        <form>
          <FormGroup>
            <Label name="Show us the food!" display="block"/>
            <Input type="file" placeholder="Upload Image" accept="image/*" style={{display: 'none'}}/>
          </FormGroup>
          <FormGroup>
            <Label name="What food is it?" display="block"/>
            <Input type="text" placeholder="What is it?"/>
          </FormGroup>
          <FormGroup>
            <Label name="Tell me more..." display="block"/>
            <Input type="text" placeholder="Add a description (optional)"/>
          </FormGroup>
          <FormGroup>
            <Label name="Where is it?" display="block"/>
            <Input type="text" placeholder="Where is it?"/>
          </FormGroup>
          <FormGroup>
            <Label name="Who are you?" display="block"/>
            <Input type="text" placeholder="Who are you? (optional)"/>
          </FormGroup>
          <FormGroup>
            <Input type="submit" value="Submit"/>
          </FormGroup>
        </form>
      </Card>
    </Wrapper>  
  )
}

export default Post