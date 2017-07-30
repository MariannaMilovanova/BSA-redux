import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

let AddUser = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className='user-form'
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addUser(input.value))
          input.value = ''
        }}
      >
        <input placeholder="You Party Name" className='user-input'
          ref={node => {
            input = node
          }}
        />
        <input type="submit"className = 'user-btn' value = 'Add Guest'/>
      </form>
    </div>
  )
}
AddUser = connect()(AddUser)

export default AddUser