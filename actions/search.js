import equal from 'equals'

export function updateSearch(data, requested) {
  return {
    type: 'search/UPDATE_SEARCH',
    requested,
    data: [...data]
  }
}

export function requestSearch(query) {
  return (dispatch, getState) => {
    const search = getState().search
    const apiKey = '4ed42e82763648ac9179da0d157d71bc'
    const url =
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${query}`

      fetch(url)
        .then(response => response.json())
        .then(response => {
          if (!equal(search.data, response.response.docs)){
            const search = response.response.docs.map((el) => {
              el.published = el.pub_date ? new Date(el.pub_date) : null
              el.title = el.headline.main
              return el
            })
            dispatch(updateSearch(search, true))
          }
          else {
            dispatch(updateSearch(search.data, true))
          }
        })
        .catch(() => {
          dispatch(updateSearch([], true))
        })
  }
}

export function searchNews (history, event) {
  event.preventDefault()

  const query = event.target.elements.search.value

  return (dispatch) => {
    dispatch(updateSearch([], false))
    history.push(`/search/${query}`)
  }
}

export function sortSearch (event) {
  const sorter = event.target.value
  return (dispatch, getState) => {
    const search = getState().search

    search.data.sort((a, b) => {
        const x = a[sorter] || '';
        const y = b[sorter] || '';

        if (typeof x === 'string') {
          return  x.localeCompare(y)
        }

        return x-y;
      })

    dispatch(updateSearch(search.data, search.requested))
  }
}
