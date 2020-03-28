import React from 'react'

const Text = props => {
  return (
    <p><strong>{props.field}: </strong>{props.fieldValue}</p>
  )
}

export default Text