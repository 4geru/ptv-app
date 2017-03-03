import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import ptvApp from './reducers'
import dataService from './services/data-service'
import request from 'superagent'

import routes from 'routes'

let store = createStore(ptvApp,{}, compose(applyMiddleware(dataService), window.devToolsExtension
	? window.devToolsExtension() : f => f))

const root = document.getElementById('app')

const renderApp = () => (
  <Provider store={store}>
  <AppContainer>
    <Router history={browserHistory} routes={routes} render={applyRouterMiddleware(useScroll())} />
  </AppContainer>
  </Provider>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}

store.dispatch({type: 'GET_DATA'})
