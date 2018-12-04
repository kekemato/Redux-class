import React from 'react'
import { connect } from 'react-redux'

import { addToDo } from './store/todos'

const mapStateToProps = store => ({
    todos: store.todos.allToDos
  })

const mapDispatchToProps = dispatch => ({
    addToDo: text => dispatch(addToDo(text))
})

class ToDoList extends React.Component {
    state = {}

    handleButtonClick = () => {
       this.props.addToDo(this.state.value)
    }

    handleInputChange = (event) => {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <div>
                <input
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleButtonClick}>
                    Add todo
                </button>
                {this.props.todos.map(todo =>
                    <div key={todo.text}>
                        {todo.text}
                    </div>
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)