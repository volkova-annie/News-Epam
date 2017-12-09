import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configure-store'
import initialState from './initial-state'
import {App, Post, Search} from '../components'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const store = configureStore(initialState)

let target = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route
          exact
          path="/"
          component={App} />
        <Route
          path="/search/:query"
          component={Search} />
        <Route
          path="/post/:postId"
          component={Post} />
      </div>
    </Router>
  </Provider>,
  target
)
