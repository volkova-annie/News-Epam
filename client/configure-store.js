import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from '../reducers'


export default function configreStore (initialState) {
  const appReducer = combineReducers({
    ...reducers,
  })

  return createStore(
    appReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
