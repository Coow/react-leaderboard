function userReducer(state = null, action) {
    switch(action.type){
        case 'AUTHENTICATED':
            return state = action.payload;
        default:
            return state;
    }
};

export default userReducer;