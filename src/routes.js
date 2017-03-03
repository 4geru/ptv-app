import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { prototype, SamplePage, NotFoundPage, HomePage, GenericPage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={prototype} />

  </Route>
)

export default routes
