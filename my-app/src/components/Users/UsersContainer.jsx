import { connect } from 'react-redux';
import Users from './Users';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

const mapDspatchToProps = (dispatch) => ({

  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },

});
export default connect(mapStateToProps, mapDspatchToProps)(Users);
