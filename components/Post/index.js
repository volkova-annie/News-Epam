import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import slug from 'slug'
import actions from '../../actions'
// import './style.css';

class Post extends Component {
  componentDidMount () {
    this.props.actions.requestNews()
  }

  render() {
    const {news, match: {params: {postId}}} = this.props
    const article = news.find(item =>
      slug(item.title).toLowerCase() === postId
    )

    if (article) {
      return <div>
        <Link to='/'>To homepage</Link>
        <h2>{article.title}</h2>
      </div>
    }
    else {
      return <div>
        <Link to='/'>To homepage</Link>
        Loading...
      </div>
    }
  }
}

export default withRouter(connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Post))
