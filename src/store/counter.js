const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

export const increment = (num) => ({
    type: INCREMENT,
    num: num || 1
})

export const decrement = (num) => ({
    type: DECREMENT,
    num: num || 1
})

export const reset = () => ({
    type: RESET
})

export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state + action.num)
        case DECREMENT:
            if (state > 0)
                return (state - action.num)
            else
                alert('cannot go below 0')
        case RESET:
            return (state = 0)
        default:
            return state
    }
}