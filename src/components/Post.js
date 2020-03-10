import React from 'react'
import Heading from './Heading'
import Wrapper from './Wrapper'
import Card from './Card'
import InputLabel from './InputLabel'

const Post = () => {
  return (
    <Wrapper>
      <Card>
        <Heading title="Post Your Food Call"/>
        <form>
          <InputLabel type="file" placeholder="Upload Image" accept="image/*"/>
          <InputLabel type="text" placeholder="What is it?" label="What food is it?"/>
          <InputLabel type="text" placeholder="Add a description (optional)" label="Tell me more..."/>
          <InputLabel type="text" placeholder="Where is it?" label="Where is it?"/>
          <InputLabel type="text" placeholder="Who are you? (optional)" label="Who are you?"/>
          <input type="submit" value="Submit" />
        </form>
      </Card>
    </Wrapper>  
  )
}

export default Post