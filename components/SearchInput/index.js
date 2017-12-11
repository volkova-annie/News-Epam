import React from 'react'
import './style.css'

const SearchInput = props =>
  <form
    className='form-search'
    onSubmit={props.actions.searchNews.bind(null, props.history)}>
    <label
      htmlFor='input-search'>
      Search news:
    </label>
    <input
      id='input-search'
      className='search'
      name='search'
      placeholder='Search...'
      type='search' />
  </form>

export default SearchInput
