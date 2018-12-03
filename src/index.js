import React from 'react'
import ReactDOM from 'react-dom'
//IMPORTING REDUX STUFF
import { createStore, combineReducers } from 'redux'

import todos, { addToDo, filterToDo, toggleToDo, deleteToDo } from './store/todos'
import counter, { increment, decrement, reset } from './store/counter'
import cart, {addToCart} from './store/cart'
import './index.css'
import App from './App'

//REDUX STUFF GOES HERE
const rootReducer = combineReducers({
    todos,
    counter,
    cart
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
//END OF REDUX STUFF

store.dispatch(addToDo('Go shopping'))
store.dispatch(addToDo('Make bed'))
store.dispatch(addToDo('Wash the dishes'))
store.dispatch(addToDo('Clean the bathroom'))
store.dispatch(increment())
store.dispatch(addToCart(20, 'Jeansy'))
store.dispatch(addToCart(20, 'Kurtka'))

window.increaseCounter = () => store.dispatch(increment())
window.decreaseCounter = () => store.dispatch(decrement())
window.resetCounter = () => store.dispatch(reset())
window.addToDo = (text) => store.dispatch(addToDo(text))
window.filterToDo = (input) => store.dispatch(filterToDo(input))
window.toggleToDo = (index) => store.dispatch(toggleToDo(index))
window.deleteToDo = (index) => store.dispatch(deleteToDo(index))

ReactDOM.render(
    <App />,
    document.getElementById('root'))
