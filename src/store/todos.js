const ADD_TODO = 'ADD_TODO'
const FILTER_TODO = 'FILTER_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

const INITIAL_STATE = {
    allToDos: [],
    visibleToDos: [],
    filter: ''
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
        case ADD_TODO:
            const newToDo = { text: action.text, completed: false }
            const newVisibleToDo =
                newToDo.text.includes(state.filter)
                    ? [...state.visibleToDos, newToDo]
                    : state.visibleToDos
            return {
                ...state,
                allToDos: [...state.allToDos, newToDo],
                visibleToDos: newVisibleToDo
            }
        case FILTER_TODO:
            return {
                ...state,
                filter: action.input,
                visibleToDos: getVisibleToDos(state.allToDos, action.input)
            }
        case TOGGLE_TODO:
            const allToDosWithToggled = state.allToDos.map((todo, index) => (index === action.index)
                ? { ...todo, completed: !todo.completed }
                : todo
            )
            return {
                ...state,
                allToDos: allToDosWithToggled,
                visibleToDos: getVisibleToDos(allToDosWithToggled, state.filter)
            }
        case DELETE_TODO:
            const allToDosWithDeleted = state.allToDos.filter((todo, index) => !(index === action.index))
            return {
                ...state,
                allToDos: allToDosWithDeleted,
                visibleToDos: getVisibleToDos(allToDosWithDeleted, state.filter)
            }
        default:
            return state
    }

}

function getVisibleToDos(allToDos, filter) {
    return allToDos.filter(
        todo => todo.text.toLowerCase().replace(/\s/g, '')
            .includes(filter.toLowerCase().replace(/\s/g, ''))
    )
}
