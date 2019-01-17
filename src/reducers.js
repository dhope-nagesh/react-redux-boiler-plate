
import { combineReducers } from 'redux'
import AppReducer from './reducers/App'
import GithubReducer from './reducers/github'

export default combineReducers({
  AppReducer,
  GithubReducer
})
