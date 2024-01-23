const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW ';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {
      id: 1,
      userPhotoURL: 'https://kartinki.pics/uploads/posts/2022-03/thumbs/1646527476_2-kartinkin-net-p-kartinki-na-avatarku-dlya-malchikov-3.jpg',
      followed: false,
      fullName: 'Dmitriy',
      status: 'I am a boss',
      location: { city: 'Minsk', country: 'Belarus ' },
    },
    {
      id: 2,
      userPhotoURL: 'https://kartinki.pics/uploads/posts/2022-03/thumbs/1646527476_2-kartinkin-net-p-kartinki-na-avatarku-dlya-malchikov-3.jpg',
      followed: true,
      fullName: 'Mary',
      status: 'I am a boss',
      location: { city: 'Minsk', country: 'Belarus ' },
    },
    {
      id: 3,
      userPhotoURL: 'https://kartinki.pics/uploads/posts/2022-03/thumbs/1646527476_2-kartinkin-net-p-kartinki-na-avatarku-dlya-malchikov-3.jpg',
      followed: true,
      fullName: 'Leon',
      status: 'I am a boss',
      location: { city: 'Minsk', country: 'Belarus ' },
    },

  ],
};
const usersReducer = (state, action) => {
  const newState = state || initialState;
  switch (action.type) {
    case FOLLOW:
      return {
        ...initialState,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...initialState,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          } return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return newState;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({
  type: UNFOLLOW, userId,
});
export const setUsersAC = (users) => ({
  type: SET_USERS, users,
});
export default usersReducer;
