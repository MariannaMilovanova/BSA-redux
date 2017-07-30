import React from 'react'
import { connect } from 'react-redux'
import { searchName } from '../actions/index'


let SearchUser = ({ dispatch }) => {
  let input;

  return (
    <input className = " search" placeholder="Search Guests"
        ref={node => {
            input = node
          }}
        onChange={(e) => {
            dispatch(searchName(input.value))
            console.log(input.value)
            }
        }
        />)
}
SearchUser = connect()(SearchUser)

export default SearchUser