import React from 'react'
import VisibleList from './VisibleList'
import Addptv from './Addptv'


import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'

const prototype = () => {
  return (

    <PageTemplate header={<Header />}  footer={<Footer />}>

    <div>

      <Addptv />
      <VisibleList />
    </div>

    </PageTemplate>
  )
}

export default prototype
