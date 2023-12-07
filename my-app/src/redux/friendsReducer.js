const initialState = {
  friends: [
    { id: 1, name: 'Dmitriy' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Victor' },
    { id: 5, name: 'Sam' },
  ],
};
const friendsReducer = (state) => state || initialState;

export default friendsReducer;
