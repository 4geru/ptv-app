import React, { PropTypes } from 'react'
import Ptv from './Ptv'


const PtvList = ({ ptvs }) => (
  <ul>

    {ptvs.map(ptv =>
      <Ptv
        key={ptv.stop_id}
        {...ptv}

      />
    )}
  </ul>
)



export default PtvList
