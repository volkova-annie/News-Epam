export function getDate(date) {
  if (date) {
    const createdDate = new Date(date)
    const mm = (createdDate.getMonth() + 1) >= 10 ? (createdDate.getMonth() + 1) : '0' + (createdDate.getMonth() + 1)
    const dd = (createdDate.getDate()) >=10 ? (createdDate.getDate()) : '0' + (createdDate.getDate())
    const yy = createdDate.getFullYear()
    return  `${dd}.${mm}.${yy}`
  }
  else {
    return ''
  }
}
