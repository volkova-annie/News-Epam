import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import actions from '../../actions'
import SearchList from '../SearchList'
import SearchSort from '../SearchSort'
import SearchInput from '../SearchInput'
import Footer from '../Footer'
import './style.css'

class Search extends Component {
  componentDidMount () {
    if (!this.props.search.requested && this.props.search.data.length <= 0) {
      this.props.actions.requestSearch(this.props.match.params.query)
    }
  }

  componentDidUpdate () {
    if (!this.props.search.requested && this.props.search.data.length <= 0) {
      this.props.actions.requestSearch(this.props.match.params.query)
    }
  }

  render () {
    console.log(this.props);
    if (this.props.search.requested) {
      return <div>
      <div className='app'>
      <Link
      className='link-back'
      to='/'>
      To home page
      </Link>
      <h1 className='header'>{`You are looking for "${this.props.match.params.query}"`}</h1>
      <div className='header-inputs'>
      <SearchInput {...this.props} />
      <SearchSort {...this.props} />
      </div>
      {this.props.search.data.length > 0 && <SearchList {...this.props} />}
      {this.props.search.requested && this.props.search.data.length <= 0 &&
        <p className='text-error'>{`Oops... we didn't find "${this.props.match.params.query}"`}</p>}
        </div>
        <Footer />
        </div>
    }
    else {
      return <div className='loading'>
        <Link
          className='link-back'
          to='/'>
          To home page
        </Link>
        <span className='loading-text'>Loading...</span>
        <div className='footer-wrapper'>
          <Footer />
        </div>
      </div>
    }
  }
}

export default withRouter(connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Search))
