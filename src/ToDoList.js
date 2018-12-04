import React from 'react'
import { connect } from 'react-redux'

import { addToDo, toggleToDo, deleteToDo, filterToDo } from './store/todos'
import './todo.css'

const mapStateToProps = store => ({
    _todos: store.todos.visibleToDos
})

const mapDispatchToProps = dispatch => ({
    _addToDo: text => dispatch(addToDo(text)),
    _toggleToDo: index => dispatch(toggleToDo(index)),
    _deleteToDo: index => dispatch(deleteToDo(index)),
    _filterToDo: (input) => dispatch(filterToDo(input))
})

class ToDoList extends React.Component {
    state = {}

    handleButtonClick = () => {
        this.props._addToDo(this.state.value)
    }

    handleInputChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleToDoClick = (index) => {
        this.props._toggleToDo(index)
    }

    handleDeleteClick = (index) => {
        this.props._deleteToDo(index)
    }

    handleFilterInput = event => {
        this.setState({ filterValue: event.target.value })
    }

    handleFilterClick = () => {
        this.props._filterToDo(this.state.filterValue)
    }

    render() {
        return (
            <div>
                {this.renderFilter()}
                {this.renderInput()}
                {this.renderList()}
            </div>
        )
    }

    renderFilter() {
        return (
            <div
                className="input-container"
            >
                <h1>Filter tasks:</h1>
                <input
                    onChange={this.handleFilterInput}
                    className="input"
                />
                <button
                    onClick={this.handleFilterClick}
                    className="input-button"
                >
                    Filter
                </button>
            </div>
        )
    }

    renderInput() {
        return (
            <div
                className="input-container"
            >
                <h1>Add new task:</h1>
                <input
                    onChange={this.handleInputChange}
                    placeholder='Add task'
                    className="input"
                />
                <button
                    onClick={this.handleButtonClick}
                    className="input-button"
                >
                    Add todo
        </button>

            </div>
        )
    }

    renderList() {
        return this.props._todos.map((todo, index) => (
            <div
                className='todo'
                key={todo.text}
                onClick={() => this.handleToDoClick(index)}
            >
                <div
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                </div>
                <button
                    onClick={() => this.handleDeleteClick(index)}
                    className='btn'
                >
                    X
                </button>
            </div>
        ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)