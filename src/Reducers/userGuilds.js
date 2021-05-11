function userGuilds(state = null, action) {
    switch(action.type){
        case 'GUILD':
            return state = action.payload;
        default:
            return state;
    }
};

export default userGuilds;