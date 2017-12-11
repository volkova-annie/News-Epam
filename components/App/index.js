import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import actions from '../../actions'
import NewsList from '../NewsList'
import Sort from '../Sort'
import Footer from '../Footer'
import SearchInput from '../SearchInput'
import './style.css'

class App extends Component {
  componentDidMount () {
    this.props.actions.requestNews()
  }

  render () {
    return <div>
      <div className='app'>
        <h1 className='header'>The Most Popular News from New York Times API</h1>
        <div className='header-inputs'>
          <SearchInput {...this.props} />
          <Sort {...this.props} />
        </div>
        <NewsList {...this.props} />
      </div>
      <Footer />
    </div>
  }
}

export default withRouter(connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App))
