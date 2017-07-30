import React from 'react'
import PropTypes from 'prop-types'
import User from './User'
import SearchUser from '../containers/SearchFilter'


const UserList = ({ users, onUserClick }) => (
  <div className = 'user-list'>
  <SearchUser />
    <ol>
      {users.map(user => (
        <User key={user.id} name = {user.name} onClick={() => onUserClick(user.id)} />
      ))}
    </ol>
  </div>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onUserClick: PropTypes.func.isRequired
}

export default UserList