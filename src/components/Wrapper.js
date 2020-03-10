import React from 'react'
import styled from 'styled-components'

const WrapperDiv = styled.div`
  width: 33%;
  display: inline-block;
  height: 600px;
`

const Wrapper = (props) => {
  return (
    <WrapperDiv {...props}>
      {props.children}
    </WrapperDiv>
  )
}

export default Wrapper