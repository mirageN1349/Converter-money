import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store

export default store
