import React from 'react'
import styled from 'styled-components'
import { color, reverseColor } from 'arc-theme'

import { Paragraph, Link, Icon } from 'components'

const Wrapper = styled.div`
  background-color: ${reverseColor('grayscale', 1)};
  padding: 1rem 18rem;
  text-align: center;
`



const Text = styled(Paragraph)`
  color: ${color('grayscale', 3)}

  max-width: 800px;
  font-weight: 300;
  font-size: 1.35rem;

  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
    <Text>
        sadaf's portfolio
    </Text>
    </Wrapper>
  )
}

export default Footer
