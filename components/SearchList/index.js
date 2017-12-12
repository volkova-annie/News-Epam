import React from 'react'
import {getDate} from '../../modules/date.js'
import './style.css'


function findImage (multimedia) {
  const image = multimedia.find((el) =>
    (el.subtype &&  el.subtype === 'superJumbo'))
  return image ? `https://www.nytimes.com/${image.url}` : '/assets/no-photo.png'
}

const Item = props => {
  return <li className='post-item'>
    <a
      href={props.web_url}
      className='post-item__link'
      target='_blank'>
      <div className='image-wrapper'>
        <img src={findImage(props.multimedia)} alt='image from news' />
      </div>
      <span className='title'>{props.title}</span>
      <span className='date'>{getDate(props.published)}</span>
    </a>
  </li>
}

const SearchList = props => {
  return <ul className='news-list'>
    {props.search.data.map(item =>
      <Item
        key={item.web_url}
        actions={props.actions}
        {...item} />
    )}
  </ul>
}
export default SearchList
