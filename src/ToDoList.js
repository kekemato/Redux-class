import React from 'react'
import { connect } from 'react-redux'

import { addToDo } from './store/todos'

const mapDispatchToProps = dispatch => ({
    addToDo: text => dispatch(addToDo(text))
})

class ToDoList extends React.Component {
    state = {}

    handleButtonClick = () => {
        console.log('want to save todo: ', this.state.value)
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

export default connect(null, mapDispatchToProps)(ToDoList)