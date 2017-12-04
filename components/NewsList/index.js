import React from 'react'
import {Link} from 'react-router-dom'
import slug from 'slug'
import './style.css'


const Item = props => {
  const id = slug(props.title).toLowerCase()

  return <li>
    <Link to={`/post/${id}`}>{props.title}</Link>
  </li>
}

const NewsList = props => {
  return <ul className='newsList'>
    {props.news.map(item =>
      <Item
        key={item.url}
        actions={props.actions}
        {...item} />
    )}
  </ul>
}
export default NewsList
