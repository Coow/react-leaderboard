function userMe(state = null, action) {
    switch(action.type){
        case 'ME':
            return state = action.payload;
        default:
            return state;
    }
};

export default userMe;