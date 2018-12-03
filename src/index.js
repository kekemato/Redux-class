import React from 'react'
import ReactDOM from 'react-dom'
//IMPORTING REDUX STUFF
import { createStore, combineReducers } from 'redux'

import { addToDo } from './store'
import todos from './store'
import './index.css'
import App from './App'

//REDUX STUFF GOES HERE
const rootReducer = combineReducers({
    todos
})
const store = createStore(rootReducer)
//END OF REDUX STUFF

console.warn('before dispatch', store.getState())
store.dispatch(addToDo('Go shopping'))
store.dispatch(addToDo('Make bed'))
store.dispatch(addToDo('Wash the dishes'))
store.dispatch(addToDo('Clean the bathroom'))
console.warn('after dispatch',store.getState())

ReactDOM.render(
    <App />,
    document.getElementById('root'))
