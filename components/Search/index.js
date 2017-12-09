import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import actions from '../../actions'
import SearchList from '../SearchList'
import SearchSort from '../SearchSort'
import SearchInput from '../SearchInput'
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
    return <div className='app'>
      <Link to='/'>To home page</Link>
      <h1>{`You are looking for "${this.props.match.params.query}"`}</h1>
      <SearchSort {...this.props} />
      <SearchInput {...this.props} />
      {this.props.search.data.length > 0 && <SearchList {...this.props} />}
      {this.props.search.requested && this.props.search.data.length <= 0 && <p>{`Oops... we didn't find "${this.props.match.params.query}"`}</p>}
    </div>
  }
}

export default withRouter(connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Search))
