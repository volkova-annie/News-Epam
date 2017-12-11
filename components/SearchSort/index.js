import React from 'react'
import './style.css'

const SortSearch = props => {
  return <form className='form-sort'>
    <label>Sort by: </label>
    <select defaultValue='' onChange={props.actions.sortSearch}>
      <option disabled value=''>---</option>
      <option value='published'>Date</option>
      <option value='title'>Title</option>
    </select>
  </form>
}
export default SortSearch
