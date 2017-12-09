import React from 'react'
import './style.css'

const SortSearch = props => {
  return <div className='sort'>
    <label>Sort by: </label>
    <select defaultValue='' onChange={props.actions.sortSearch}>
      <option disabled value=''>---</option>
      <option value='published'>Date</option>
      <option value='title'>Title</option>
    </select>
  </div>
}
export default SortSearch
