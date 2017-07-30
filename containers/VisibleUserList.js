import { connect } from 'react-redux'
import { deleteUser} from '../actions'
import UserList from '../components/UserList'

const getMatchUsers = (users, typedValue) => {
  if (typedValue == "" || typeof typedValue == 'underfined') {
    return users
  } else {
    return users.filter((user) => user.name.toLowerCase().indexOf(typedValue.toLowerCase()) != -1)
  }
};
const mapStateToProps = state => ({
  users: getMatchUsers(state.users, state.typedValue),
});

const mapDispatchToProps = dispatch => ({
  onUserClick: (id) => {
    dispatch(deleteUser(id));
  },
});

const MatchUsers= connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);

export default MatchUsers;