import React from 'react'
import {Link} from 'react-router-dom'
import slug from 'slug'
import {getDate} from '../../modules/date.js'
import './style.css'


function findImage (multimedia) {
  const image = multimedia.find((el) =>
    (el.format &&  el.format === 'superJumbo'))
  return image ? image.url : '/assets/no-photo.png'
}

const Item = props => {
  const id = slug(props.title).toLowerCase()
  return <li className='post-item'>
    <Link to={`/post/${id}`}  className='post-item__link'>
      <div className='image-wrapper'>
        <img src={findImage(props.multimedia)} />
      </div>
      <span className='title'>{props.title}</span>
      <span className='date'>{getDate(props.published_date)}</span>
    </Link>
  </li>
}

const NewsList = props => {
  return <ul className='news-list'>
    {props.news.map(item =>
      <Item
        key={item.url}
        actions={props.actions}
        {...item} />
    )}
  </ul>
}
export default NewsList
