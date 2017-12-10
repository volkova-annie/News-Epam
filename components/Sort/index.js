import React from 'react'
import './style.css'

const Sort = props => {
  return <form className='sort'>
    <label htmlFor='select-input' >Sort by: </label>
    <select
      id='select-input'
      defaultValue=''
      onChange={props.actions.sortNews}>
      <option disabled value=''>---</option>
      <option value='published'>Date</option>
      <option value='title'>Title</option>
    </select>
  </form>
}
export default Sort
