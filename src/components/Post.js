import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import Heading from './Heading'
import Card from './Card'
import Input from './Input'
import Label from './Label'
import FormGroup from './FormGroup'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputError from './InputError'
import CircularProgress from '@material-ui/core/CircularProgress'

const Post = () => {
  const { register, handleSubmit, errors } = useForm()
  const onFormSubmit = data => { 
    console.log(data)
    setIsSubmitting(true) 
  }
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <Grid item={true} xs={12} sm={6}>
      <Card>
        <Heading title="Post Your Food Call"/>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <FormGroup>
            <Label for="food" label="What food is it?*" display="block"/>
            <Input id="food" name="food" inputRef={register({required: true, maxLength: 50})} type="text" placeholder="What is it?"/>
            {errors.food && errors.food.type === 'required' && <InputError>This field is required</InputError>}
            {errors.food && errors.food.type === 'maxLength' && <InputError>Max length of 50 characters exceeded</InputError> }
          </FormGroup>
          <FormGroup>
            <Label for="location" label="Where is it?*" display="block"/>
            <Input id="location" name="location" inputRef={register({required: true, maxLength: 100})} type="text" placeholder="Where is it?"/>
            {errors.location && errors.location.type === 'required' && <InputError>This field is required</InputError>}
            {errors.location && errors.location.type === 'maxLength' && <InputError>Max length of 100 characters exceeded</InputError> }
          </FormGroup>
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
            <Label for="description" label="Tell me more..." display="block"/>
            <Input id="description" name="description" inputRef={register({maxLength: 150})} type="text" placeholder="Add a description (optional)"/>
            {errors.description && errors.description.type === 'maxLength' && <InputError>Max length of 150 characters exceeded</InputError> }
          </FormGroup>
          <FormGroup>
            <Label for="poster" label="Who are you?" display="block"/>
            <Input id="poster" name="poster" inputRef={register({maxLength: 25})} type="text" placeholder="Who are you? (optional)"/>
            {errors.poster && errors.poster.type === 'maxLength' && <InputError>Max length of 25 characters exceeded</InputError> }
          </FormGroup>
          <FormGroup>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
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

export default Post