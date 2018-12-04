import React from 'react'
import { connect } from 'react-redux'

import ToDoList from './ToDoList'

const mapStateToProps = store => ({
  todos: store.todos.allToDos,
  visibleToDos: store.todos.visibleToDos
})

class App extends React.Component {
  render() {
    console.log('App props', this.props)
    return (
      <ToDoList todos={this.props.todos} />
    )
  }
}

export default connect(mapStateToProps)(App)
