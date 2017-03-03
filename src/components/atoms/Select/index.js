import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { font, color, reverseColor, ifProps } from 'arc-theme'


const Wrapper = styled.div`
  background-color: ${color('grayscale', 4)};
  padding: 1rem 18rem;
  text-align: center;
`


const StyledSelect = styled.select`

`


const Select = ({ ...props }) => {

  return (
    <Wrapper {...props}>
    <StyledSelect {...props} />
    </Wrapper>
  )
}




export default Select
