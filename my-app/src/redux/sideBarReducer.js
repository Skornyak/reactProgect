let initialState = {
    sideBar: {
        navMenu: [
            {id: 1, name: 'Profile'},
            {id: 2, name: 'Massages'},
            {id: 3, name: 'News'},
            {id: 4, name: 'Music'},
            {id: 5, name: 'Settings'},
            {id: 6, name: 'Friends'},
        ]
    }
}
const sideBarReducer = (state = initialState,action) => {

    return state;
}

export default sideBarReducer;