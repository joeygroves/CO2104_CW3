import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import RemoveTodo from '../../containers/RemoveTodo'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}

  </li>
  
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo