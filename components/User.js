import React from 'react'
import PropTypes from 'prop-types'

const User = ({name, onClick}) => (
  <li className='one-user'>
    {name}
      <button className='delete' onClick = {onClick}>
      delete
      </button>
  </li>
)

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default User