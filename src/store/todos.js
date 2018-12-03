const ADD_TODO = 'ADD_TODO'
const FILTER_TODO = 'FILTER_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

const INITIAL_STATE = {
    allToDos: [],
    visibleToDos: [],
}

export const deleteToDo = index => ({
    type: DELETE_TODO,
    index
})

export const filterToDo = (input) => ({
    type: FILTER_TODO,
    input
})

export const addToDo = text => ({
    type: ADD_TODO,
    text
})

export const toggleToDo = index => ({
    type: TOGGLE_TODO,
    index
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newToDo = { text: action.text, completed: false }
            return {
                ...state,
                allToDos: [...state.allToDos, newToDo]
            }
        case FILTER_TODO:
            return {
                ...state,
                visibleToDos: state.allToDos.filter(todo => {
                    todo.text.toLowerCase().replace(/\s/g, '')
                        .includes(action.input.toLowerCase().replace(/\s/g, ''))
                })
            }
        case TOGGLE_TODO:
            return {
                ...state,
                allToDos: state.allToDos.map((todo, index) => (index === action.index) ?
                    { ...todo, completed: !todo.completed }
                    : todo
                )
            }
        case DELETE_TODO:
            return {
                ...state,
                allToDos: state.allToDos.filter((todo, index) => !(index === action.index))
    }
        default:
    return state
}

}