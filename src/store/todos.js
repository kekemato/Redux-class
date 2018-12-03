const ADD_TODO = 'ADD_TODO'
// const SWITCH_TODO_COMPLETED = 'SWITCH_TODO_COMPLETED'

export const addToDo = text => ({
    type: ADD_TODO,
    text
})

// export const switchToDoCompleted = (index) => ({
//     type: SWITCH_TODO_COMPLETED
// })

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newToDo = { text: action.text, completed: false }
            return [...state, newToDo]
        // case 'SWITCH_TODO_COMPLETED':
        //     return [
        //         ...state.slice(0, action.index),
        //         {
        //             text: state[action.index].text,
        //             completed: !state[action.index].completed
        //         },
        //         ...state.slice[action.index + 1]
        //     ]
        default:
            return state
    }

}