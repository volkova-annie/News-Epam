export function news (state = {}, action) {
  switch (action.type) {
    case 'news/UPDATE_NEWS': {
      return [...action.news]
    }
    default: {
      return state
    }
  }
}
