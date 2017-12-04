import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import actions from '../../actions'
import NewsList from '../NewsList'
import Sort from '../Sort'
import './style.css'

class App extends Component {
  componentDidMount () {
    this.props.actions.requestNews()
  }

  render () {
    return <div className='app'>
      <Sort {...this.props} />
      <NewsList {...this.props} />
    </div>
  }
}

export default withRouter(connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App))
