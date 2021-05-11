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

export const userMe = (data) => {
    return {
        type: 'ME',
        payload: data
    }
}

export const userGuilds = (data) => {
    return {
        type: 'GUILD',
        payload: data
    }
}