export function search (state = {}, action) {
  switch (action.type) {
    case 'search/UPDATE_SEARCH': {
      return {
        requested: !!action.requested,
        data: [...action.data],
      }
    }
    default: {
      return state
    }
  }
}
