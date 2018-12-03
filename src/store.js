const ADD_TODO = 'ADD_TODO'

export const addToDo = text => ({
    type: ADD_TODO,
    text
})

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newToDo = {text: action.text, completed: false}
            return [...state, newToDo]
        default:
            return state
    }

}