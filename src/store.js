export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newToDo = {text: action.text, completed: false}
            return [...state, newToDo]
        default:
            return state
    }

}


// export default (state = [], action) => {
//     return state
// }
//To to samo co:
// const todos = (state = [], action) => {
//     return state
// }

// export default todos