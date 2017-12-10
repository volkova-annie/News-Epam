import React from 'react'
import './style.css'

const SearchInput = props =>
  <form onSubmit={props.actions.searchNews.bind(null, props.history)}>
    <label
      htmlFor='input-search'
      className=''> Search news:
    </label>
    <input
      id='input-search'
      className='search'
      name='search'
      placeholder='Search...'
      type='search' />
  </form>

export default SearchInput
