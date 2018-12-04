import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './store/counter'

const mapStateToProps = store => ({
    _counterValue: store.counter
})

const mapDispatchToProps = dispatch => ({
    _increment: () => dispatch(increment()),
    _decrement: () => dispatch(decrement()),
    _reset: () => dispatch(reset())
})

const Counter = props => {
    return (
        <div>
            <h1>Count state: {props._counterValue}</h1>
            <button
                onClick={props._increment}
            >
                +
            </button>
            <button
                onClick={props._decrement}
            >
                -
            </button>
            <button
            onClick={props._reset}
            >
                Reset
            </button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)