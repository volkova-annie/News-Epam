import equal from 'equals'

export function updateNews(news) {
  return {
    type: 'news/UPDATE_NEWS',
    news: [...news],
  }
}

export function requestNews () {
  return (dispatch, getState) => {
    const news = getState().news
    const apiKey = '4ed42e82763648ac9179da0d157d71bc'
    const url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=' + apiKey
    // https://api.nytimes.com/svc/topstories/v2/world.json?api-key=656af0c6ac43444b9bd39a0854759afa

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (!equal(news, response.results)){
          const news = response.results.map((el) => {
            el.published = new Date(el.published_date)

            return el
          })

          dispatch(updateNews(news))
        }
      })
      .catch(error => {
        console.error(error) //eslint-disable-line no-console
      })
  }
}

export function sortNews (event) {
  const sorter = event.target.value
  return (dispatch, getState) => {
    const news = getState().news

    news.sort((a, b) => {
        const x = a[sorter] || '';
        const y = b[sorter] || '';

        if (typeof x === 'string') {
          return  x.localeCompare(y)
        }

        return x-y;
      })

    dispatch(updateNews(news))
  }
}
