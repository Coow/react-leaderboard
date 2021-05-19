function userGuildsCommon(state = null, action) {
    switch(action.type){
        case 'GUILD_COMMON':
            return state = action.payload;
        default:
            return state;
    }
};

export default userGuildsCommon;