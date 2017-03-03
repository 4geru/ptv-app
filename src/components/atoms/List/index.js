import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { font, color } from 'arc-theme'

const styles = css`
  font-family: ${font('primary')};
  margin: 1rem 0;
padding: 1rem 18rem;
  line-height: 1.7rem;
  text-align: center;
`



const Ol = styled.ol`${styles}`
const Ul = styled.ul`${styles}`

const List = ({ ordered, children, ...props }) => {
  return (

    React.createElement(ordered ? Ol : Ul, props, children)

  )
}

List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.any,
  color: PropTypes.string,
  reverse: PropTypes.bool
}

List.defaultProps = {
  color: 'grayscale'
}

export default List
