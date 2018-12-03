import React from 'react'
import ReactDOM from 'react-dom'
//IMPORTING REDUX STUFF
import { createStore, combineReducers } from 'redux'

import todos from './store'
import './index.css'
import App from './App'

//REDUX STUFF GOES HERE
const rootReducer = combineReducers({
    todos
})
const store = createStore(rootReducer)
//END OF REDUX STUFF

ReactDOM.render(
    <App />,
    document.getElementById('root'))
