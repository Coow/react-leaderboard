function userMe(state = null, action) {
    switch(action.type){
        case 'EXPIRES_AT':
            return state = action.payload;
        default:
            return state;
    }
};

export default userMe;