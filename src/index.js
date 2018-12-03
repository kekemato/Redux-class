import React from 'react'
import ReactDOM from 'react-dom'
//IMPORTING REDUX STUFF
import { createStore, combineReducers } from 'redux'

import todos, { addToDo } from './store/todos'
import counter from './store/counter'
import './index.css'
import App from './App'

//REDUX STUFF GOES HERE
const rootReducer = combineReducers({
    todos,
    counter
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )
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
