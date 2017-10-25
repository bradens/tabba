import window from './window'
import tab from './tab'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  window,
  tab,
  form: formReducer,
})
