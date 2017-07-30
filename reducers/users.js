const users = (state = {users: [{id: 0, name: "Mickey Mouse - Party Maker"}], typedValue: ''}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign(
        {}, 
        state, 
        {users: [...state.users, { id: action.id, name: action.name }]}
      );
    case 'DELETE_USER':
      return Object.assign(
        {}, 
        state, 
        {users: state.users.filter(user => user.id !== action.id)}
        );
    case 'SEARCH':
      return Object.assign(
        {}, 
        state, 
        {typedValue: action.typedValue}
      );
    default:
      return state;
  }
};

export default users;