import React from 'react'
// import './style.css'

const SearchInput = props =>
  <form onSubmit={props.actions.searchNews.bind(null, props.history)}>
    <label></label>
    <input name='search' type='search' />
  </form>

export default SearchInput
