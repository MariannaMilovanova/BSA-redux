let id = 0
export const addUser = name => {
  return {
    type: 'ADD_USER',
    id: ++id,
    name
  }
}

export const deleteUser = id => {
  return {
    type: 'DELETE_USER',
    id
  }
}

export const searchName = typedValue => {
  return {
    type: 'SEARCH',
    typedValue
  }
}