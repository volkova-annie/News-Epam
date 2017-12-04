import React from 'react'
import './style.css'

const Delete = props =>
  <button className='article-delete' onClick={props.actions.deleteOneNews.bind(null, props.url)}>
    &times;
  </button>

export default Delete
