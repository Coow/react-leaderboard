function userGuildsArray(state = null, action) {
    switch(action.type){
        case 'GUILD_ARRAY':
            return state = action.payload;
        default:
            return state;
    }
};

export default userGuildsArray;