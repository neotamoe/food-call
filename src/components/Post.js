import React from 'react'
import Heading from './Heading'
import Card from './Card'
import Input from './Input'
import Label from './Label'
import FormGroup from './FormGroup'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const Post = () => {
  return (
    <Grid xs={12}>
      <Card>
        <Heading title="Post Your Food Call"/>
        <form>
          <FormGroup>
            <Input
              style={{display: 'none'}}
              accept="image/*"
              id="upload-food-image"
              type="file"
            />
            <label htmlFor="upload-food-image">
              <Button variant="contained" color="primary" component="span">
                Upload Food Image
              </Button>
            </label>
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
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </FormGroup>
        </form>
      </Card>
    </Grid>  
  )
}

export default Post