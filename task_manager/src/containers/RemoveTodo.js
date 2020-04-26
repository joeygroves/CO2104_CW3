import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

const RemoveTodo = ({ id, dispatch }) => {

    return (
        <div>
            <a onClick={e => {
                e.preventDefault()
                dispatch(deleteTodo(id))

                //console.log(dispatch(deleteTodo()));
            }}>Remove TODO</a>
        </div>
    )
}

export default connect()(RemoveTodo)