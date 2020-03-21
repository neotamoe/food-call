import React from 'react'
import { useForm } from 'react-hook-form'

import Heading from './Heading'
import Card from './Card'
import Input from './Input'
import Label from './Label'
import FormGroup from './FormGroup'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const Post = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onFormSubmit = data => {console.log('is this working?'); console.log(data)}
  
  return (
    <Grid item={true} xs={12} sm={6}>
      <Card>
        <Heading title="Post Your Food Call"/>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <FormGroup>
            <Input
              inputRef={register}
              style={{display: 'none'}}
              accept="image/*"
              id="upload-food-image"
              type="file"
              name="image"
            />
            <label htmlFor="upload-food-image">
              <Button variant="contained" color="primary" component="span">
                Upload Food Image
              </Button>
            </label>
          </FormGroup>
          <FormGroup>
            <Label for="food" label="What food is it?" display="block"/>
            <Input id="food" name="food" inputRef={register} type="text" placeholder="What is it?"/>
          </FormGroup>
          <FormGroup>
            <Label for="description" label="Tell me more..." display="block"/>
            <Input id="description" name="description" inputRef={register} type="text" placeholder="Add a description (optional)"/>
          </FormGroup>
          <FormGroup>
            <Label for="location" label="Where is it?" display="block"/>
            <Input id="location" name="location" inputRef={register} type="text" placeholder="Where is it?"/>
          </FormGroup>
          <FormGroup>
            <Label for="poster" label="Who are you?" display="block"/>
            <Input id="poster" name="poster" inputRef={register} type="text" placeholder="Who are you? (optional)"/>
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