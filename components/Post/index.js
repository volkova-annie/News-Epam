import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import slug from 'slug'
import actions from '../../actions'
import {getDate} from '../../modules/date.js'
import Footer from '../Footer'
import './style.css';

function findImage (multimedia) {
  const image = multimedia.find((el) =>
    (el.format &&  el.format === 'mediumThreeByTwo210'))
  return image ? image.url : '/assets/no-photo.png'
}

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
        <div className='article'>
          <Link
            className='link-back'
            to='/'>
            To home page
          </Link>

          <h1 className='header'>{article.title}</h1>
          <div className='article__body'>
            <a
              href={article.url}
              target='_blank'
              className='article__image-wrapper'>
              <img className='article__image' src={findImage(article.multimedia)} />
            </a>
            <div className='article__description'>
              <p className='article__text'><b>Section: {article.section}, {article.subsection}, {article.geo_facet[0]}</b></p>
              <p className='article__text'>{article.abstract}</p>
            </div>
          </div>
          <div className='article__footer'>
            <p>{article.byline}</p>
            <p className='date'>Published: {getDate(article.published_date)}</p>
          </div>
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
)(Post))
