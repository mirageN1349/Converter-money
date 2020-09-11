import { combineReducers } from 'redux'
import converterReducer from './converter'
import listReducer from './listMoney'
export const rootReducer = combineReducers({
  listMoney: listReducer,
  converter: converterReducer,
})
