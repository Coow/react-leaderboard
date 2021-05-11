import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signIn, user, userGuilds, userMe } from '../Actions'

import LoginButton from '../Components/LoginButton'



export default function () {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const userState = useSelector(state => state.userReducer);
    const userStateGuilds = useSelector(state => state.userGuilds);
    const userStateMe = useSelector(state => state.userMe);

    const [me, set_me] = useState([]);

    //Get the guilds that the User is in
    useEffect(() => {
        if (isLoggedIn) {
            fetch('https://discord.com/api/users/@me/guilds', {
                headers: {
                    authorization: `${userState.token_type} ${userState.access_token}`
                }
            })
                .then(result => result.json())
                .then(response => {
                    console.log(response)
                    dispatch(userGuilds(response))
                })
        }
    }, [isLoggedIn])

    //Get personal user info
    useEffect(() => {
        if (isLoggedIn) {
            fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${userState.token_type} ${userState.access_token}`
                }
            })
                .then(result => result.json())
                .then(response => {
                    console.log(response)
                    dispatch(userMe(response))
                })
        }
    }, [isLoggedIn])

    return (
        <div>
            {isLoggedIn ?
                "logged in" + me
                :
                "not logged in"
            }
            <br />
            <h1 className="text-red-700">Tailwind</h1>
            <LoginButton />
        </div>
    )
}