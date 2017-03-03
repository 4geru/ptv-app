import React, { PropTypes } from 'react'

import { List } from 'components'

const Ptv = ({ location, accessibility }) => (

  <List>



     Lift access: <b>{accessibility.lifts ? 'available' : 'not available'}</b>


  </List>

)




export default Ptv
