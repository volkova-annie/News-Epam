import React from 'react'
import './style.css'

const Sort = props => {
  return <div className='sort'>
    <label>Sort by: </label>
    <select defaultValue='' onChange={props.actions.sortNews}>
      <option disabled value=''>---</option>
      <option value='published'>Date</option>
      <option value='title'>Title</option>
    </select>
  </div>
}
export default Sort
