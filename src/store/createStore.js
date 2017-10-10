// 插件
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'

// reducer
import reducers from './reducers'

export default createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware))

