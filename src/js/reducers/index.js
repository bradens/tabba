import tab from './tab'
import option from './option'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  tab,
  option,
  form: formReducer,
})
