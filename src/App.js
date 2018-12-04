import React from 'react'

import ToDoList from './ToDoList'

class App extends React.Component {
  render() {
    console.log('App props', this.props)
    return (
      <ToDoList />
    )
  }
}

export default App