import React from 'react'
import styled from 'styled-components'

const Text = props => {
  return (
    <p><strong>{props.field}: </strong>{props.fieldValue}</p>
  )
}

export default Text