let initialState = {
    friends : [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Mary'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Sam'},
    ],
}
const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;