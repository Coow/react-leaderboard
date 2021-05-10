export const setJson_USERS = (data) => {
    return {
        type: 'SET_USERS',
        payload: data
    }
}

export const clearJson_USERS = () => {
    return {
        type: 'CLEAR_USERS',
        payload: null
    }
}

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const user = (data) => {
    return {
        type: 'AUTHENTICATED',
        payload: data
    }
}